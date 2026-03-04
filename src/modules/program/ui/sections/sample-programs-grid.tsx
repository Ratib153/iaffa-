"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DayItem {
  day: number
  title: string
  focus: string
}

export default function ScheduleGrid({ sampleSchedule }: { sampleSchedule: DayItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-20">
      {sampleSchedule.map((day, index) => (
        <div
          key={day.day}
          className={`group relative bg-slate-900/50 border border-slate-700/50 hover:border-slate-500/70 p-10 rounded-xl h-64 flex flex-col justify-between text-center transition-all duration-500 hover:shadow-xl hover:shadow-slate-800/50 ${day.day === 7 ? 'md:col-span-2' : ''}`}
          style={{ animationDelay: `${index * 75}ms` }}
        >
          {/* Day Number */}
          <h3 className="font-serif text-5xl md:text-4xl font-black text-[#c18f2c] mb-2 leading-none">
            {day.title}
          </h3>

          {/* Title & Focus */}
          <div>
            <p className="text-sm text-slate-500 font-light tracking-wide">
              {day.focus}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={`/program/day-${String(day.day)}`}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 font-medium text-sm transition-colors duration-300 hover:gap-3 group-hover:translate-y-1"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  )
}
