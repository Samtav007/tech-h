const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock products database (in production, use MongoDB/PostgreSQL)
const products = [
  {
    id: '1',
    name: 'Modern Sofa Set',
    category: 'furniture',
    subcategory: 'sofa',
    price: 1299.99,
    originalPrice: 1599.99,
    description: 'Comfortable modern sofa set perfect for living rooms',
    images: ['/images/sofa-1.jpg', '/images/sofa-2.jpg'],
    colors: ['Gray', 'Blue', 'Beige'],
    materials: ['Fabric', 'Wood'],
    dimensions: { width: 200, height: 90, depth: 80 },
    rating: 4.5,
    reviews: 128,
    inStock: true,
    vendor: 'FurnitureCo',
    tags: ['modern', 'comfortable', 'living-room'],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'LED Ceiling Light',
    category: 'lighting',
    subcategory: 'ceiling',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Energy-efficient LED ceiling light with dimmer',
    images: ['/images/light-1.jpg', '/images/light-2.jpg'],
    colors: ['White', 'Black', 'Gold'],
    materials: ['Metal', 'Glass'],
    dimensions: { width: 30, height: 15, depth: 30 },
    rating: 4.2,
    reviews: 67,
    inStock: true,
    vendor: 'LightPro',
    tags: ['led', 'energy-efficient', 'dimmable'],
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Premium Paint Set',
    category: 'paint',
    subcategory: 'interior',
    price: 45.99,
    originalPrice: 59.99,
    description: 'High-quality interior paint with excellent coverage',
    images: ['/images/paint-1.jpg'],
    colors: ['White', 'Beige', 'Gray', 'Blue', 'Green'],
    materials: ['Acrylic'],
    dimensions: { width: 20, height: 25, depth: 20 },
    rating: 4.7,
    reviews: 203,
    inStock: true,
    vendor: 'PaintMaster',
    tags: ['premium', 'interior', 'high-coverage'],
    createdAt: new Date().toISOString()
  }
];

// Get all products with filtering and pagination
router.get('/', (req, res) => {
  try {
    const {
      category,
      subcategory,
      minPrice,
      maxPrice,
      color,
      material,
      search,
      sort = 'createdAt',
      order = 'desc',
      page = 1,
      limit = 12
    } = req.query;

    let filteredProducts = [...products];

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (subcategory) {
      filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }

    if (color) {
      filteredProducts = filteredProducts.filter(p => 
        p.colors.some(c => c.toLowerCase().includes(color.toLowerCase()))
      );
    }

    if (material) {
      filteredProducts = filteredProducts.filter(p => 
        p.materials.some(m => m.toLowerCase().includes(material.toLowerCase()))
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
      if (order === 'asc') {
        return a[sort] > b[sort] ? 1 : -1;
      } else {
        return a[sort] < b[sort] ? 1 : -1;
      }
    });

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    res.status(200).json({
      success: true,
      products: paginatedProducts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredProducts.length / limit),
        totalProducts: filteredProducts.length,
        hasNext: endIndex < filteredProducts.length,
        hasPrev: startIndex > 0
      }
    });

  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get products',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get product by ID
router.get('/:id', (req, res) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get product',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get product categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(products.map(p => p.category))];
    const subcategories = [...new Set(products.map(p => p.subcategory))];
    const colors = [...new Set(products.flatMap(p => p.colors))];
    const materials = [...new Set(products.flatMap(p => p.materials))];

    res.status(200).json({
      success: true,
      categories: {
        main: categories,
        sub: subcategories,
        colors,
        materials
      }
    });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get categories',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Search products
router.get('/search/:query', (req, res) => {
  try {
    const { query } = req.params;
    const { limit = 10 } = req.query;

    const searchResults = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, parseInt(limit));

    res.status(200).json({
      success: true,
      query,
      results: searchResults,
      total: searchResults.length
    });

  } catch (error) {
    console.error('Search products error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search products',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get featured products
router.get('/featured/list', (req, res) => {
  try {
    const featuredProducts = products
      .filter(p => p.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);

    res.status(200).json({
      success: true,
      products: featuredProducts
    });

  } catch (error) {
    console.error('Get featured products error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get featured products',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
