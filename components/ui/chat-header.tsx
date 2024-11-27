import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-zinc-800">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-white">Oscar</h2>
          <p className="text-sm text-zinc-400">The Retention Marketer</p>
        </div>
      </div>
      <ToggleGroup type="single" defaultValue="auto">
        <ToggleGroupItem value="auto" className="text-sm">
          Auto Pilot
        </ToggleGroupItem>
        <ToggleGroupItem value="co" className="bg-yellow-500 text-black text-sm">
          Co-Pilot
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

