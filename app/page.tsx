import { Sidebar } from "@/components/ui/sidebar"
import { ChatHeader } from "@/components/ui/chat-header"
import { ChatMessages } from "@/components/ui/chat-messages"
import { ChatInput } from "@/components/ui/chat-input"

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </main>
    </div>
  )
}

