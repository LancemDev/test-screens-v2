"use client"

import React from 'react'
import { MainCalendar } from "@/components/ui/calendar/main-calendar"
import { MiniCalendar } from "@/components/ui/calendar/mini-calendar"
import { EventList } from "@/components/ui/calendar/event-list"
import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'

interface Event {
  id: string
  title: string
  date: Date
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [events, setEvents] = React.useState<Event[]>([])
  const [viewDate, setViewDate] = React.useState(new Date())

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleViewDateChange = (date: Date) => {
    setViewDate(date)
  }

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    setEvents(prevEvents => [...prevEvents, { ...newEvent, id: Date.now().toString() }])
  }

  // Generate dates for the current month view
  const monthStart = startOfMonth(viewDate)
  const monthEnd = endOfMonth(viewDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  return (
    <div className="flex gap-6 p-6 h-screen">
      <div className="w-80 space-y-6">
        <div className="bg-zinc-900/90 rounded-3xl">
          <MiniCalendar 
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            viewDate={viewDate}
            onViewDateChange={handleViewDateChange}
          />
        </div>
        <div className="bg-zinc-900/90 rounded-3xl p-6">
          <EventList 
            events={events}
            selectedDate={selectedDate}
          />
        </div>
      </div>
      <div className="flex-1">
        <MainCalendar 
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          events={events}
          onAddEvent={handleAddEvent}
          viewDate={viewDate}
          onViewDateChange={handleViewDateChange}
          monthDays={monthDays}
        />
      </div>
    </div>
  )
}

