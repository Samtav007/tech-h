import { Heart, Share2, Download, Eye, Edit, Trash2, Plus, Filter, Grid, List } from 'lucide-react'

export default function SavedDesigns() {
  const savedDesigns = [
    {
      id: 1,
      title: 'Modern Living Room',
      description: 'Scandinavian-inspired living room with neutral tones',
      image: '/api/placeholder/300/200',
      dateCreated: 'Dec 15, 2023',
      lastModified: '2 hours ago',
      roomType: 'Living Room',
      style: 'Modern',
      isPublic: true,
      views: 24,
      likes: 8,
    },
    {
      id: 2,
      title: 'Cozy Bedroom Retreat',
      description: 'Warm and inviting bedroom with soft textures',
      image: '/api/placeholder/300/200',
      dateCreated: 'Dec 10, 2023',
      lastModified: '1 day ago',
      roomType: 'Bedroom',
      style: 'Cozy',
      isPublic: false,
      views: 12,
      likes: 5,
    },
    {
      id: 3,
      title: 'Minimalist Kitchen',
      description: 'Clean lines and functional design for small spaces',
      image: '/api/placeholder/300/200',
      dateCreated: 'Dec 8, 2023',
      lastModified: '3 days ago',
      roomType: 'Kitchen',
      style: 'Minimalist',
      isPublic: true,
      views: 45,
      likes: 12,
    },
    {
      id: 4,
      title: 'Home Office Setup',
      description: 'Productive workspace with natural lighting',
      image: '/api/placeholder/300/200',
      dateCreated: 'Dec 5, 2023',
      lastModified: '1 week ago',
      roomType: 'Office',
      style: 'Modern',
      isPublic: false,
      views: 8,
      likes: 3,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Saved Designs</h2>
          <p className="text-gray-600">Manage and organize your design projects</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="p-2 bg-primary-600 text-white">
              <Grid className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <List className="h-4 w-4" />
            </button>
          </div>
          
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Design</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {savedDesigns.map((design) => (
          <div key={design.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm text-gray-500">Design Preview</p>
                </div>
              </div>
              
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  design.isPublic 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {design.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-2">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer">
                    {design.title}
                  </h3>
                  <p className="text-sm text-gray-600">{design.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                  {design.roomType}
                </span>
                <span className="bg-secondary-100 text-secondary-600 px-2 py-1 rounded text-xs">
                  {design.style}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div>
                  <span>Created {design.dateCreated}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{design.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3" />
                    <span>{design.likes}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex-1 btn-primary text-sm flex items-center justify-center space-x-2">
                  <Eye className="h-3 w-3" />
                  <span>View</span>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="btn-secondary">
          Load More Designs
        </button>
      </div>
    </div>
  )
}
