export function EventList() {
    const events = [
      {
        day: "Today",
        items: [
          { title: "Lead Product Launch", time: "09:00" },
          { title: "Letter from the CEO", time: "09:00" },
        ],
      },
      {
        day: "Tomorrow",
        items: [
          { title: "Newsletter", time: "11:30" },
          { title: "Weekly Blog", time: "14:30" },
        ],
      },
      {
        day: "Wednesday",
        items: [
          { title: "Launch Campaign", time: "13:00" },
          { title: "Meet Our Digital Workers", time: "15:00" },
        ],
      },
      {
        day: "Thursday",
        items: [
          { title: "Investor Email", time: "11:30" },
        ],
      },
    ]
  
    return (
      <div className="space-y-6">
        {events.map((group) => (
          <div key={group.day}>
            <h3 className="text-white font-medium mb-2">{group.day}</h3>
            <div className="space-y-2">
              {group.items.map((event) => (
                <div
                  key={event.title}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-zinc-400">{event.title}</span>
                  <span className="text-zinc-600 ml-auto">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  