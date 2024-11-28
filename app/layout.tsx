import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
// import { Sidebar } from "@/components/ui/sidebar"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark", inter.className)}>
      <body className="bg-background min-h-screen">{children}</body>
    </html>
  )
}