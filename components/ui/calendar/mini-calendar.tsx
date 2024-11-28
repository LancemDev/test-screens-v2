"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type MiniCalendarProps = React.ComponentProps<typeof DayPicker>

export function MiniCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: MiniCalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-between pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-zinc-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-zinc-400",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-zinc-800/50 rounded-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
            : ""
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-yellow-500 text-black hover:bg-yellow-500 hover:text-black focus:bg-yellow-500 focus:text-black",
        day_today: "bg-zinc-800 text-white",
        day_outside: "text-zinc-500 opacity-50 dark:text-zinc-400",
        day_disabled: "text-zinc-500 opacity-50 dark:text-zinc-400",
        day_range_middle:
          "aria-selected:bg-zinc-800/50 aria-selected:text-zinc-200",
        day_hidden: "invisible",
        ...classNames,
      }}
      // components={{
      //   IconLeft: () => <ChevronLeft className="h-4 w-4" />,
      //   IconRight: () => <ChevronRight className="h-4 w-4" />,
      // }}
      {...props}
    />
  )
}

