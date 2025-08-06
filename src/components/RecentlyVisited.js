import { Heart } from 'lucide-react'
import Image from 'next/image'

const recentProjects = [
  {
    title: 'Website Design',
    description: 'Discover a seamless blend of creativity and efficiency',
    category: 'Design Project',
    categoryColor: 'bg-gray-200 text-gray-600'
  },
  {
    title: 'SEO Project 2024',
    description: 'Discover a seamless blend of creativity and efficiency',
    category: 'Business Project',
    categoryColor: 'bg-green-200 text-green-600'
  },
  {
    title: 'Plan in 2024',
    description: 'Discover a seamless blend of creativity and efficiency',
    category: 'Personal Project',
    categoryColor: 'bg-pink-200 text-red-600'
  }
]

export default function RecentlyVisited() {
  return (
    <div className="shadow-md p-3 lg:p-4 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg lg:text-xl">Recently Visit</h2>
        <span className="text-gray-500 cursor-pointer text-sm lg:text-base">See Board</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-4">
        {recentProjects.map((project, index) => (
          <div key={index} className="flex flex-col p-3 lg:p-4 border border-gray-300 rounded-xl gap-1 relative cursor-pointer hover:scale-105 transition-transform duration-300">
            <Heart className="absolute top-2 right-2 w-5 h-5 lg:w-6 lg:h-6 bg-gray-400/50 rounded-full text-white p-1" />
            <Image 
              src="/images/sample.webp" 
              alt="Project" 
              width={240} 
              height={160} 
              className="rounded w-full h-32 lg:h-40 object-cover"
            />
            <span className={`w-fit px-2 py-1 rounded text-xs ${project.categoryColor} mt-2`}>
              {project.category}
            </span>
            <h3 className="font-medium text-sm lg:text-base">{project.title}</h3>
            <span className="text-xs opacity-60">{project.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}