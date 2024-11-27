import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Paperclip } from 'lucide-react'

export function ChatInput() {
  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="flex items-center space-x-2">
        <Input
          className="flex-1 bg-zinc-900 border-zinc-800"
          placeholder="Send a Message"
        />
        <Button size="icon" variant="ghost">
          <Mic className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Paperclip className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

