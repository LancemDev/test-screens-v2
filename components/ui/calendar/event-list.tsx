import { format, isSameDay, startOfDay, endOfDay, addDays } from 'date-fns'

interface Event {
  id: string
  title: string
  date: Date
}

interface EventListProps {
  events: Event[]
  selectedDate: Date
}

export function EventList({ events, selectedDate }: EventListProps) {
  const today = startOfDay(selectedDate)
  const tomorrow = addDays(today, 1)
  const dayAfterTomorrow = addDays(today, 2)
  const dayAfterDayAfterTomorrow = addDays(today, 3)

  const groupedEvents = [
    { day: "Today", events: events.filter(event => isSameDay(event.date, today)) },
    { day: "Tomorrow", events: events.filter(event => isSameDay(event.date, tomorrow)) },
    { day: format(dayAfterTomorrow, 'EEEE'), events: events.filter(event => isSameDay(event.date, dayAfterTomorrow)) },
    { day: format(dayAfterDayAfterTomorrow, 'EEEE'), events: events.filter(event => isSameDay(event.date, dayAfterDayAfterTomorrow)) },
  ]

  return (
    <div className="space-y-4">
      {groupedEvents.map((group) => (
        <div key={group.day}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-zinc-800 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded" />
            </div>
            <h3 className="text-white text-sm">{group.day}</h3>
          </div>
          <div className="space-y-2 pl-6">
            {group.events.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-2 text-sm"
              >
                <span className="w-1.5 h-1.5 bg-sauti-yellow rounded-full" />
                <span className="text-zinc-400">{event.title}</span>
                <span className="text-zinc-600 ml-auto">{format(event.date, 'HH:mm')}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

