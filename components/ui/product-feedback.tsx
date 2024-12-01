import * as React from "react"
import Link from "next/link"

export function ProductFeedack() {
  return (
    <div className="absolute bottom-0 left-0 p-4 py-3">
      <div className="bg-sauti-yellow rounded-t-3xl rounded-b-none py-6 px-4 w-full">
        <Link 
          href="/feedback" 
          className="block text-sm text-zinc-900 hover:text-white text-center whitespace-nowrap"
        >
          Product feedback
        </Link>
      </div>
    </div>
  )
}