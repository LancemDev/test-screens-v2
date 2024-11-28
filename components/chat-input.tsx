// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Mic, Paperclip, Laugh } from 'lucide-react'

export function ChatInput() {
  return (
    <div className="border-t border-zinc-800 p-7 mx-20">
      <div className="flex items-center gap-3 px-4 py-2 bg-black/40 rounded-full border border-zinc-800">
        <span className="text-zinc-400">
          <Laugh size={20} className="ml-10" />
        </span>
        <input
          className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-400 placeholder:text-zinc-600"
          placeholder="Send a Message"
        />
        <button className="text-zinc-400 hover:text-zinc-300">
          <Mic size={20} />
        </button>
        <button className="text-zinc-400 hover:text-zinc-300">
          <Paperclip size={20} />
        </button>
      </div>
    </div>
  )
}

