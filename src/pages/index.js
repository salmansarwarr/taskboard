import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import TaskCard from '@/components/TaskCard'
import RecentlyVisited from '@/components/RecentlyVisited'
import Workspace from '@/components/Workspace'
import UrgentTasks from '@/components/UrgentTasks'
import NewChat from '@/components/NewChat'

export default function Home() {
  return (
    <main className="bg-[#f8f8ff] flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      
      <section className="w-full gap-4 flex flex-col flex-1">
        <Navbar />
        
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 m-1 lg:m-4">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <TaskCard />
            <RecentlyVisited />
            <Workspace />
          </div>

          <div className="flex flex-col gap-4 xl:mr-4">
            <UrgentTasks />
            <NewChat />
          </div>
        </section>
      </section>
    </main>
  )
}