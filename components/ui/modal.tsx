"use client"

import * as React from "react"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div 
        className={cn(
          "bg-zinc-900 rounded-lg p-6 w-full max-w-md transform transition-all duration-300 ease-in-out",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}
