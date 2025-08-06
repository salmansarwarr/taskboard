import { Search, Sparkles, Bell, Plus } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between lg:justify-around p-2 lg:p-4 bg-white rounded-xl h-14 lg:h-16 mt-4 shadow-md gap-2 ml-12 lg:ml-0">
      {/* Search Bar */}
      <div className="flex-1 lg:w-3/4 p-2 border border-gray-300 rounded flex items-center gap-2 max-w-md lg:max-w-none">
        <Search className="w-4 h-4 lg:w-6 lg:h-6 opacity-50 flex-shrink-0" />
        <input 
          type="text" 
          placeholder="Search Task" 
          className="border-none w-full h-full outline-none text-sm lg:text-base"
        />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Create Task Button - Hide text on mobile */}
        <button className="flex items-center border-none bg-black text-white font-semibold p-2 lg:p-3 rounded gap-1 lg:gap-2">
          <Plus className="w-4 h-4 lg:hidden" />
          <Sparkles className="hidden lg:block w-6 h-6" />
          <span className="hidden lg:block">Create New Task</span>
        </button>
        
        {/* Notification Bell */}
        <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
        
        {/* Profile Picture */}
        <Image 
          src="/images/download.webp" 
          alt="Profile" 
          width={35} 
          height={35}
          className="lg:w-[50px] lg:h-[50px] rounded-lg"
        />
      </div>
    </nav>
  )
}