import Link from "next/link"
import { Calendar, BarChart2, Share2, GitBranch } from 'lucide-react'
import { ChatEmployee } from "./chat-employee"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-zinc-900 border-r border-yellow-500 rounded-r-3xl">
      <div className="p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-yellow-500 text-2xl">
          <img src="/images/sauti-logo.png" alt="Sauti Logo" width="100" height="200" />
        </span>
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
      <div className="flex justify-center items-center p-4">
        <div className="mt-20 ml-12">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/images/oscar-avatar.png" alt="Oscar" className="w-full h-full" />
          </Avatar>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="bg-yellow-500 rounded-t-3xl rounded-b-none py-5 px-4 w-3/4 ml-0">
          <Link 
            href="/feedback" 
            className="block text-sm text-zinc-900 hover:text-white text-center"
          >
            Product feedback
          </Link>
        </div>
      </div>
    </div>
  )
}

