import * as React from "react"
import { Transition } from "@headlessui/react"
import { X } from 'lucide-react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <Transition
      show={isVisible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2">
          <X size={16} />
        </button>
      </div>
    </Transition>
  )
}
