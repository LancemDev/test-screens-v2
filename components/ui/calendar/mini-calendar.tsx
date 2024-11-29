"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MiniCalendarProps {
  className?: string
  selectedDate: Date
  onDateSelect: (date: Date) => void
  viewDate: Date
  onViewDateChange: (date: Date) => void
}

export function MiniCalendar({ className, selectedDate, onDateSelect, viewDate, onViewDateChange }: MiniCalendarProps) {
  const monthStart = startOfMonth(viewDate)
  const monthEnd = endOfMonth(viewDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const goToPreviousMonth = () => {
    onViewDateChange(subMonths(viewDate, 1))
  }

  const goToNextMonth = () => {
    onViewDateChange(addMonths(viewDate, 1))
  }

  return (
    <div className={cn("p-4 text-sm", className)}>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={goToPreviousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-white font-medium">{format(viewDate, 'MMMM yyyy')}</h3>
        <Button variant="ghost" size="sm" onClick={goToNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 text-center mb-2">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <div key={`weekday-${index}`} className="text-zinc-400 text-xs">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {monthDays.map((day) => {
          const isSelected = isSameDay(day, selectedDate)
          const isCurrentMonth = isSameMonth(day, viewDate)
          return (
            <button
              key={day.toISOString()}
              onClick={() => onDateSelect(day)}
              className={cn(
                "text-xs py-1 w-6 h-6 mx-auto flex items-center justify-center rounded-full",
                isSelected ? "bg-yellow-500 text-black" : "text-zinc-400 hover:bg-zinc-800",
                !isCurrentMonth && "opacity-30"
              )}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>
    </div>
  )
}

