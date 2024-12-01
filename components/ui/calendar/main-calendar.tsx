"use client"

import * as React from "react"
import { ChevronDown, Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { format, isSameMonth, isSameDay, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns'
import { Modal } from "@/components/ui/modal"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Toast } from "@/components/ui/success-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface Event {
  id: string
  title: string
  date: Date
}

interface MainCalendarProps {
  selectedDate: Date
  onDateSelect: (date: Date) => void
  events: Event[]
  onAddEvent: (event: Omit<Event, 'id'>) => void
  viewDate: Date
  onViewDateChange: (date: Date) => void
  monthDays: Date[]
}

export function MainCalendar({ selectedDate, onDateSelect, events, onAddEvent, viewDate, onViewDateChange }: MainCalendarProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [newEventTitle, setNewEventTitle] = React.useState("")
  const [showToast, setShowToast] = React.useState(false)

  const handleAddEvent = () => {
    if (newEventTitle.trim()) {
      onAddEvent({ title: newEventTitle, date: selectedDate })
      setNewEventTitle("")
      setIsModalOpen(false)
      setShowToast(true)
    }
  }

  const goToPreviousMonth = () => {
    onViewDateChange(subMonths(viewDate, 1))
  }

  const goToNextMonth = () => {
    onViewDateChange(addMonths(viewDate, 1))
  }

  const monthStart = startOfMonth(viewDate)
  const monthEnd = endOfMonth(viewDate)
  const startDate = monthStart
  const endDate = monthEnd

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const startingDayIndex = getDay(startDate)

  return (
    <div className="bg-zinc-900/90 rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4 text-zinc-300" />
          </Button>
          <Button variant="ghost" size="sm" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4 text-zinc-300" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <h2 className="text-lg text-white">{format(viewDate, 'MMMM yyyy')}</h2>
            <Select
              value={format(viewDate, 'MMMM')}
              onValueChange={(value) => {
                const newDate = new Date(viewDate.getFullYear(), MONTHS.indexOf(value), 1)
                onViewDateChange(newDate)
              }}
            >
              <SelectTrigger className="w-[180px] text-zinc-300 rounded-full">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => new Date(0, i)).map((date) => (
                  <SelectItem key={date.getMonth()} value={format(date, 'MMMM')} className="text-zinc-300 hover:bg-yellow-600">
                    {format(date, 'MMMM')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4 text-white" />
          </Button>
          <Button className="bg-sauti-yellow text-black hover:bg-yellow-600 rounded-full" onClick={() => setIsModalOpen(true)}>
            Create
            <Plus className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="p-3 text-sm text-zinc-300 text-center border-r border-b border-yellow-500/20"
          >
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square p-2 border-r border-b border-yellow-500/20" />
        ))}
        {days.map((day) => {
          const dayEvents = events.filter(event => isSameDay(event.date, day))
          return (
            <div
              key={day.toISOString()}
              className="aspect-square p-2 border-r border-b border-yellow-500/20 hover:bg-zinc-800/50"
              onClick={() => onDateSelect(day)}
            >
              <span className={cn(
                "text-sm",
                isSameMonth(day, viewDate) ? "text-zinc-400" : "text-zinc-600",
                isSameDay(day, selectedDate) && "text-sauti-yellow font-bold"
              )}>
                {format(day, 'd')}
              </span>
              {dayEvents.map(event => (
                <div key={event.id} className="mt-1 text-xs text-sauti-yellow truncate">{event.title}</div>
              ))}
            </div>
          )
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-white">Add New Event</h2>
        <Input
          type="text"
          placeholder="Event Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
          className="mb-4 rounded-full text-zinc-300"
        />
        <Button onClick={handleAddEvent} className="w-full bg-sauti-yellow text-black hover:bg-yellow-600 rounded-full">
          Add Event
        </Button>
      </Modal>
      <Toast
        message="Event added successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}

