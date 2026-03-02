"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DayItem {
  day: number
  title: string
  focus: string
  dayActivities: readonly string[]
  eveningActivities: readonly string[]
}

export default function ScheduleGrid({ sampleSchedule }: { sampleSchedule: DayItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sampleSchedule.map((day) => {
        const dayActivitiesToShow = day.dayActivities.slice(0, 2)
        const dayActivitiesMore = day.dayActivities.length > 2
        const eveningActivitiesToShow = day.eveningActivities.slice(0, 1)
        const eveningActivitiesMore = day.eveningActivities.length > 1

        return (
          <div
            key={day.day}
            className={`bg-gray-900 p-8 rounded-lg flex flex-col h-full ${day.day === 7 ? 'md:col-span-2' : ''}`}
          >
            {/* Title and Focus */}
            <h3 className="font-libre-baskerville text-xl font-bold text-yellow-500 mb-2 text-center">
              Day {day.day} – {day.title}
            </h3>
            <p className="text-yellow-600 text-sm mb-6 text-center">
              Focus: {day.focus}
            </p>

            {/* Day Activities */}
            <div className="mb-6 flex-1">
              <p className="text-gray-400 text-sm font-semibold mb-3">Day:</p>
              <ul className="space-y-2 mb-3">
                {dayActivitiesToShow.map((item: string) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {dayActivitiesMore && (
                <p className="text-gray-400 text-sm">+1 more activities</p>
              )}
            </div>

            {/* Evening Activities */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm font-semibold mb-3">Evening:</p>
              <ul className="space-y-2 mb-3">
                {eveningActivitiesToShow.map((item: string) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {eveningActivitiesMore && (
                <p className="text-gray-400 text-sm">+1 more activities</p>
              )}
            </div>

            {/* Learn More Link */}
            <Link
              href={`/program/day-${String(day.day)}`}
              className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2 mt-auto"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
