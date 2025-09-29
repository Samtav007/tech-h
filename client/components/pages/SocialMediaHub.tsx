import { Youtube, Instagram, Play, Heart, MessageCircle, Share2, ArrowRight } from 'lucide-react'

export default function SocialMediaHub() {
  const youtubeVideos = [
    {
      id: 1,
      title: 'Living Room Makeover: From Drab to Fab',
      duration: '12:30',
      views: '45K',
      thumbnail: '/api/placeholder/300/200',
      description: 'Watch us transform a dated living room into a modern masterpiece using AI design recommendations.',
    },
    {
      id: 2,
      title: 'Small Apartment Design Hacks',
      duration: '8:45',
      views: '32K',
      thumbnail: '/api/placeholder/300/200',
      description: 'Maximize your small space with these clever design tricks and storage solutions.',
    },
    {
      id: 3,
      title: 'Kitchen Renovation on a Budget',
      duration: '15:20',
      views: '67K',
      thumbnail: '/api/placeholder/300/200',
      description: 'Complete kitchen transformation for under $5,000 using smart design choices.',
    },
  ]

  const instagramPosts = [
    {
      id: 1,
      image: '/api/placeholder/300/300',
      likes: '2.3K',
      comments: '89',
      caption: 'Before and after of this stunning bedroom transformation ✨ #HOMY #InteriorDesign',
    },
    {
      id: 2,
      image: '/api/placeholder/300/300',
      likes: '1.8K',
      comments: '67',
      caption: 'Color palette inspiration for your next project 🎨 #ColorInspiration #DesignTips',
    },
    {
      id: 3,
      image: '/api/placeholder/300/300',
      likes: '3.1K',
      comments: '124',
      caption: 'Small space, big style! These design tricks make any room feel larger 🏠 #SmallSpaceDesign',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get behind-the-scenes content, real-time transformations, and daily design inspiration 
            on our social media channels.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-3 rounded-full">
                <Youtube className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">YouTube Channel</h3>
                <p className="text-gray-600">Design tutorials, home tours, and transformation videos</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@TechieHome-x6g"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <p className="text-sm text-gray-500">Video Thumbnail</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">
                    {video.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-pink-100 p-3 rounded-full">
                <Instagram className="h-8 w-8 text-pink-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Instagram Feed</h3>
                <p className="text-gray-600">Daily design inspiration and behind-the-scenes content</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/techiehome007?utm_source=qr&igsh=MWpvMWRuY2pmeHc1Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Follow Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm text-gray-500">Instagram Post</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-4">
                      <button className="bg-white/90 text-gray-900 px-3 py-2 rounded-lg font-semibold flex items-center space-x-2">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="bg-white/90 text-gray-900 px-3 py-2 rounded-lg font-semibold flex items-center space-x-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Join Our Community
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Youtube className="h-8 w-8 text-red-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-gray-600">YouTube Subscribers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Instagram className="h-8 w-8 text-pink-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">25K+</div>
              <div className="text-gray-600">Instagram Followers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100K+</div>
              <div className="text-gray-600">Monthly Engagements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
