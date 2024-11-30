import { Sidebar } from "@/components/sidebar"
import { ChatHeader } from "@/components/chat-header"
import { ChatMessages } from "@/components/chat-messages"
import { ChatInput } from "@/components/chat-input"

export default function Home() {
  return (
    <div className="flex h-screen absolute inset-0 bg-gradient-to-b from-black to-sauti-yellow shadow-lg bg-zinc-950">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col ">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </main>
    </div>
  )
}

