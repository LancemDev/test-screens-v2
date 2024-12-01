import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CalendarHeader() {
  return (
    <div className="bg-black border-b border-sauti-yellow/20 p-4">
      <div className="flex items-center gap-3 ml-7 mt-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/images/oscar-avatar.png?height=40&width=40" alt="Oscar" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <span className="text-sauti-yellow font-medium">Oscar</span>
      </div>
    </div>
  )
}

