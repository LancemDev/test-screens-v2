import Link from "next/link"
import { Calendar, BarChart2, MessageSquare, Share2, GitBranch } from 'lucide-react'
import { ChatEmployee } from "./chat-employee"

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-zinc-900 border-r border-zinc-800">
      <div className="p-4 border-b border-zinc-800">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-yellow-500 text-2xl">◆</span>
          <span className="font-bold text-xl text-white">Sauti</span>
        </Link>
      </div>
      <div className="text-lg font-bold ml-7 mt-5">
        <p>Chats</p>
      </div>
      <ChatEmployee />
      <nav className="p-4 space-y-2 ">
        <Link
          href="/calendar"
          className="flex items-center space-x-2 px-4 py-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
        >
          <Calendar className="h-5 w-5" />
          <span>Calendar</span>
        </Link>
        <Link
          href="/analytics"
          className="flex items-center space-x-2 px-4 py-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
        >
          <BarChart2 className="h-5 w-5" />
          <span>Analytics</span>
        </Link>
        <Link
          href="/campaigns"
          className="flex items-center space-x-2 px-4 py-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
        >
          <Share2 className="h-5 w-5" />
          <span>Campaigns</span>
        </Link>
        <Link
          href="/flows"
          className="flex items-center space-x-2 px-4 py-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
        >
          <GitBranch className="h-5 w-5" />
          <span>Flows</span>
        </Link>
      </nav>
    </div>
  )
}

