import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChatEmployee() {
  return (
    <div className="flex items-center justify-between p-4 mt-10">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/images/oscar-dark.png" width={1000} height={100} />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-yellow-500">Oscar</h2>
          <p className="text-sm text-yellow-500">The Retention Marketer</p>
        </div>
      </div>
    </div>
  )
}

