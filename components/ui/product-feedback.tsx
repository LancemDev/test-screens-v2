import * as React from "react"
import Link from "next/link"

export function ProductFeedack() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="bg-sauti-yellow rounded-t-3xl rounded-b-none py-5 px-4 w-3/4 ml-0">
            <Link 
            href="/feedback" 
            className="block text-sm text-zinc-900 hover:text-white text-center"
            >
            Product feedback
            </Link>
        </div>
    </div>
  )
}