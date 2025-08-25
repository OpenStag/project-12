import { Search } from 'lucide-react';

export default function CodeExpertsWebsite() {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      {/* Navigation */}
      <nav className="bg-slate-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500 transform rotate-45"></div>
            <span className="text-xl font-bold">Code Experts</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Join Team</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Solutions</a>
            <a href="#" className="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-700 transition-colors">Resources</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Tech Insights</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search Articles"
              className="w-full bg-slate-600 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          
          <div className="bg-slate-700 rounded-xl overflow-hidden hover:bg-slate-600 transition-colors cursor-pointer">
            <div className="flex flex-col lg:flex-row">
              {/* Featured Article Image */}
              <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-cyan-400 rounded-full opacity-80 flex items-center justify-center">
                    <div className="text-4xl">☁️</div>
                  </div>
                </div>
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
                <div className="absolute top-4 left-4 w-16 h-16 border border-cyan-400 rounded opacity-40"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border border-cyan-400 rounded opacity-30"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 border border-cyan-400 rounded opacity-25"></div>
              </div>
              
              {/* Featured Article Content */}
              <div className="lg:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4">The Feature of Cloud Computing</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Explore the latest trends in cloud technology and how they are transforming businesses.
                </p>
                <div className="text-sm text-slate-400">
                  By <span className="text-emerald-400">Alex Fernando</span> | 2 Years Ago
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors cursor-pointer">
              <h3 className="text-xl font-bold mb-3">CyberSecurity in the age of AI</h3>
              <p className="text-slate-300 leading-relaxed">
                Learn about new challenges and solutions in cybersecurity with the rise of artificial intelligence.
              </p>
            </div>

            {/* Article 2 with AI Robot Image */}
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 rounded-xl relative overflow-hidden">
                {/* AI Robot visualization */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-32 bg-slate-300 rounded-lg relative">
                    {/* Robot head */}
                    <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mt-2 relative">
                      <div className="absolute top-4 left-3 w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="absolute top-4 right-3 w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-slate-400 rounded"></div>
                    </div>
                    {/* Robot body */}
                    <div className="w-20 h-16 bg-slate-300 rounded mx-auto mt-1"></div>
                  </div>
                </div>
                
                {/* Digital globe/network visualization */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-20 h-20 border-2 border-cyan-400 rounded-full relative">
                    <div className="absolute inset-2 border border-cyan-300 rounded-full opacity-60"></div>
                    <div className="absolute inset-4 border border-cyan-200 rounded-full opacity-40"></div>
                    {/* Network nodes */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <div className="absolute top-4 right-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>

                {/* Security shield icon */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-10 border-2 border-emerald-400 rounded-t-full relative">
                    <div className="absolute inset-1 bg-emerald-400 opacity-20 rounded-t-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>

                {/* Circuit lines */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}