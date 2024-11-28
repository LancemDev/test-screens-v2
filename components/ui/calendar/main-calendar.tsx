"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Plus, Search } from 'lucide-react'

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function MainCalendar() {
  return (
    <div className="bg-zinc-900/90 rounded-3xl p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <h2 className="text-lg font-semibold text-white">September 2024</h2>
          </div>
          <Select defaultValue="month">
            <SelectTrigger className="w-[100px] bg-transparent border-yellow-500/20 text-yellow-500">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="day">Day</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
            <Plus className="h-4 w-4 mr-2" />
            Create
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-zinc-800/50">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="p-3 text-sm font-medium text-zinc-400 text-center"
          >
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square p-2 border-r border-b border-zinc-800/50 hover:bg-zinc-800/50"
          >
            <span className="text-sm text-zinc-400">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

