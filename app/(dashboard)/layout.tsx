// import { Sidebar } from "@/components/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex bg-black">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <header className="flex justify-between items-center p-4 border-b border-zinc-800">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/oscar-avatar.jpg" alt="Oscar" />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
            <span className="text-white font-semibold">Oscar</span>
          </div>
        </header> */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
        {/* <footer className="flex justify-between items-center p-4 border-t border-zinc-800">
          <a href="#" className="text-yellow-500 hover:underline">Product feedback</a>
          <Avatar>
            <AvatarImage src="/user-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </footer> */}
      </div>
    </div>
  )
}

