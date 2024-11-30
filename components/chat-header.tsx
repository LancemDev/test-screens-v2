import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900">
      <div className="flex items-center space-x-4 ml-10">
        <Avatar>
          <AvatarImage src="/images/oscar-dark.png" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-yellow-300">Oscar</h2>
        </div>
      </div>
      <ToggleGroup type="single" defaultValue="co" className="border border-zinc-800 rounded-full p-1 max-w-[80%]">
        <ToggleGroupItem 
          value="auto" 
          className="px-4 py-1.5 rounded-full text-sm data-[state=on]:bg-yellow-300 data-[state=on]:text-black text-zinc-400"
        >
          Auto Pilot
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="co" 
          className="px-4 py-1.5 rounded-full text-sm data-[state=on]:bg-yellow-300 data-[state=on]:text-black text-zinc-400"
        >
          Co-Pilot
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

