const express = require('express');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock designs database (in production, use MongoDB/PostgreSQL)
const designs = [];

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// Get user's designs
router.get('/', authenticateToken, (req, res) => {
  try {
    const userDesigns = designs.filter(design => design.userId === req.user.userId);
    
    res.status(200).json({
      success: true,
      designs: userDesigns
    });

  } catch (error) {
    console.error('Get designs error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get designs',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Create new design
router.post('/', authenticateToken, [
  body('name').notEmpty().withMessage('Design name is required'),
  body('roomType').notEmpty().withMessage('Room type is required'),
  body('style').notEmpty().withMessage('Design style is required'),
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, roomType, style, description, imageUrl, products } = req.body;

    const newDesign = {
      id: Date.now().toString(),
      userId: req.user.userId,
      name,
      roomType,
      style,
      description: description || '',
      imageUrl: imageUrl || '',
      products: products || [],
      isPublic: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    designs.push(newDesign);

    res.status(201).json({
      success: true,
      message: 'Design created successfully',
      design: newDesign
    });

  } catch (error) {
    console.error('Create design error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create design',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get specific design
router.get('/:id', authenticateToken, (req, res) => {
  try {
    const design = designs.find(d => d.id === req.params.id && d.userId === req.user.userId);
    
    if (!design) {
      return res.status(404).json({
        success: false,
        error: 'Design not found'
      });
    }

    res.status(200).json({
      success: true,
      design
    });

  } catch (error) {
    console.error('Get design error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get design',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Update design
router.put('/:id', authenticateToken, [
  body('name').optional().notEmpty().withMessage('Design name cannot be empty'),
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const designIndex = designs.findIndex(d => d.id === req.params.id && d.userId === req.user.userId);
    
    if (designIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Design not found'
      });
    }

    // Update design
    designs[designIndex] = {
      ...designs[designIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      message: 'Design updated successfully',
      design: designs[designIndex]
    });

  } catch (error) {
    console.error('Update design error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update design',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Delete design
router.delete('/:id', authenticateToken, (req, res) => {
  try {
    const designIndex = designs.findIndex(d => d.id === req.params.id && d.userId === req.user.userId);
    
    if (designIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Design not found'
      });
    }

    designs.splice(designIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Design deleted successfully'
    });

  } catch (error) {
    console.error('Delete design error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete design',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get public designs (for inspiration)
router.get('/public/inspiration', (req, res) => {
  try {
    const publicDesigns = designs.filter(design => design.isPublic);
    
    res.status(200).json({
      success: true,
      designs: publicDesigns
    });

  } catch (error) {
    console.error('Get public designs error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get public designs',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
