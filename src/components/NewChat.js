import Image from 'next/image'

const chats = [
  {
    name: 'Annete Black',
    message: 'Hey! Have you seen the latest updates on our project design?',
    time: '06:00 pm',
    avatar: '/images/download-_1_.webp'
  },
  {
    name: 'Courtney Henry',
    message: 'Hey! Have you seen the latest updates on our project design?',
    time: '11:00 pm',
    avatar: '/images/download-_2_.webp'
  },
  {
    name: 'Robert Fox',
    message: 'Hey! Have you seen the latest updates on our project design?',
    time: '12:00 pm',
    avatar: '/images/download.webp'
  },
  {
    name: 'Devon Lane',
    message: 'Hey! Have you seen the latest updates on our project design?',
    time: '01:00 am',
    avatar: '/images/pessi.jpg'
  }
]

export default function NewChat() {
  return (
    <div className="shadow-md p-4 bg-white rounded-xl">
      <h2 className="font-semibold text-xl">New Chat</h2>

      {chats.map((chat, index) => (
        <div key={index} className="flex gap-3 relative mt-5 pl-3 cursor-pointer hover:bg-gray-100 hover:transform hover:translate-x-1 transition-all duration-300 rounded-lg group">
          <div className="absolute left-0 top-0 h-full w-1 bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Image 
            src={chat.avatar} 
            alt={chat.name} 
            width={50} 
            height={50} 
            className="rounded-xl"
          />
          <div className="cursor-pointer">
            <h3 className="text-base font-semibold">{chat.name}</h3>
            <h4 className="text-xs font-light">{chat.message}</h4>
          </div>
          <span className="text-xs absolute top-0 right-4">{chat.time}</span>
        </div>
      ))}
    </div>
  )
}