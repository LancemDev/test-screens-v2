import { MainCalendar } from "@/components/ui/calendar/main-calendar"
import { MiniCalendar } from "@/components/ui/calendar/mini-calendar"
import { EventList } from "@/components/ui/calendar/event-list"

export default function CalendarPage() {
  return (
    <div className="flex gap-6 p-6 h-screen">
      <div className="w-80 space-y-6">
        <div className="bg-zinc-900/90 rounded-3xl p-6">
          <MiniCalendar />
        </div>
        <div className="bg-zinc-900/90 rounded-3xl p-6">
          <EventList />
        </div>
      </div>
      <div className="flex-1">
        <MainCalendar />
      </div>
    </div>
  )
}

