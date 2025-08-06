import { Coins, Archive, CalendarDays, Clock } from 'lucide-react'

const taskData = [
  {
    icon: Coins,
    title: 'Priority Task',
    count: '23/34 Task',
    bgColor: 'bg-green-100',
    iconBg: 'bg-green-500'
  },
  {
    icon: Archive,
    title: 'Upcoming Task',
    count: '3/34 Task',
    bgColor: 'bg-blue-100',
    iconBg: 'bg-blue-500'
  },
  {
    icon: CalendarDays,
    title: 'Overdue Task',
    count: '10/34 Task',
    bgColor: 'bg-purple-100',
    iconBg: 'bg-purple-500'
  },
  {
    icon: Clock,
    title: 'Pending Task',
    count: '2/34 Task',
    bgColor: 'bg-orange-100',
    iconBg: 'bg-orange-500'
  }
]

export default function TaskCard() {
  return (
    <div className="shadow-md p-3 lg:p-4 bg-white rounded-xl">
      <h2 className="font-semibold text-lg lg:text-xl">My Task</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 lg:gap-4">
        {taskData.map((task, index) => (
          <div 
            key={index}
            className={`p-3 lg:p-4 ${task.bgColor} lg:w-52 rounded-xl relative cursor-pointer hover:scale-105 transition-transform duration-300`}
          >
            <task.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${task.iconBg} text-white p-2 rounded-full`} />
            <h3 className="text-sm lg:text-base opacity-75 font-normal mt-2">{task.title}</h3>
            <h2 className="text-base lg:text-lg font-semibold">{task.count}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}