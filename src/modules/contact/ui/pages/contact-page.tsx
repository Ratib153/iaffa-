"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube, Linkedin, AlertCircle, CheckCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { phonePrefixes } from "@/lib/phone-prefixes"

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     subtitle: "General Inquiries",
//     value: " info@aiffa.com.au",
//     href: "mailto: info@aiffa.com.au",
//   },
//   {
//     icon: MapPin,
//     title: "Office Address",
//     subtitle: "Visit Us",
//     value: "36 Chapel Street, Windsor,VIC 3181 Australia",
//     href: null,
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     subtitle: "Office Hours",
//     value: "+61phone",
//     href: "tel:+61phone",
//   },
// ]

const departmentContacts = [
  { title: "Film Submissions", email: "submissions@aiffa.com.au" },
  { title: "Sponsorship & Partnerships", email: "partners@aiffa.com.au" },
  { title: "Media & Press", email: "press@aiffa.com.au" },
  { title: "Volunteers", email: "volunteers@aiffa.com.au" },
  { title: "Tickets & Box Office", email: "tickets@aiffa.com.au" },
  { title: "General Inquiries", email: "info@aiffa.com.au" },
]

const subjectOptions = [
  "General Inquiry",
  "Film Submissions",
  "Sponsorship & Partnerships",
  "Media & Press",
  "Volunteering",
  "Tickets & Box Office",
  "Other",
]



export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phonePrefix: "+61",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  })
  const [customSubject, setCustomSubject] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const isOtherPrefix = formData.phonePrefix === "+other"
      const phone = formData.phoneNumber.trim()
        ? isOtherPrefix
          ? formData.phoneNumber.replace(/\s/g, "")
          : `${formData.phonePrefix}${formData.phoneNumber.replace(/\D/g, "")}`
        : ""
      const finalSubject = formData.subject === "Other" ? customSubject : formData.subject
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: finalSubject,
          phone,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' })
        setFormData({ fullName: "", email: "", phonePrefix: "+61", phoneNumber: "", subject: "General Inquiry", message: "" })
        setCustomSubject("")
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gala-event.jpg"
            alt="Theater audience"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with the International Arab Film Festival of Australia
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-yellow-500">
              Send Us a Message
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8">
            {message && (
              <div className={`mb-6 p-4 border rounded-lg flex gap-3 ${message.type === 'success'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
                }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>
                  {message.text}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-yellow-500 text-sm mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  disabled={loading}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white/10 border border-champagne/20 px-4 py-3 text-champagne placeholder-champagne/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-yellow-500 text-sm mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={loading}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-champagne/20 px-4 py-3 text-champagne placeholder-champagne/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-yellow-500 text-sm mb-2">
                  Phone
                </label>
                <div className="flex gap-2">
                  <Select
                    value={formData.phonePrefix}
                    onValueChange={(v) => setFormData({ ...formData, phonePrefix: v })}
                    disabled={loading}
                  >
                    <SelectTrigger
                      id="phonePrefix"
                      aria-label="Country code"
                      className="w-24 shrink-0 bg-white/10 border border-champagne/20 px-3 py-3 text-champagne focus:border-primary focus:ring-primary/20 disabled:opacity-50 [&>svg]:ml-0"
                    >
                      {/* Chỉ hiển thị mã khi đã chọn */}
                      <span className="truncate">{formData.phonePrefix}</span>
                    </SelectTrigger>
                    <SelectContent>
                      {phonePrefixes.map((p) => (
                        <SelectItem key={p.value} value={p.value}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="tel"
                    id="phone"
                    disabled={loading}
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const raw = e.target.value
                      const isOther = formData.phonePrefix === "+other"
                      const filtered = isOther ? raw.replace(/[^\d+\s]/g, "").slice(0, 20) : raw.replace(/\D/g, "").slice(0, 15)
                      setFormData({ ...formData, phoneNumber: filtered })
                    }}
                    className="flex-1 min-w-0 bg-white/10 border border-champagne/20 px-4 py-3 text-champagne placeholder-champagne/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="412 345 678"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-yellow-500 text-sm mb-2">
                Subject <span className="text-primary">*</span>
              </label>
              <select
                id="subject"
                required
                disabled={loading}
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value })
                  if (e.target.value !== "Other") {
                    setCustomSubject("")
                  }
                }}
                className="w-full bg-white/10 border border-champagne/20 px-4 py-3 text-champagne focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
              >
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {formData.subject === "Other" && (
                <div className="mt-3">
                  <input
                    type="text"
                    id="customSubject"
                    required
                    disabled={loading}
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    className="w-full bg-white/10 border border-champagne/20 px-4 py-3 text-champagne placeholder-champagne/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="Please specify your subject"
                  />
                </div>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-yellow-500 text-sm mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                required
                disabled={loading}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-champagne/20 px-4 py-3 text-champagne placeholder-champagne/50 focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-eerie-black border border-primary text-primary font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne">
              Contact Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-primary/20 p-8 text-center transition-colors hover:border-primary/40"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-champagne mb-1">
                  {item.title}
                </h3>
                <p className="text-champagne/60 text-sm mb-3">{item.subtitle}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary hover:text-primary/80 text-sm break-all transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-champagne/80 text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Follow Us */}
      <section className="py-16 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-yellow-500 mb-6">
            Follow Us
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=61588401630735"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/arabfilmfestivalofaustralia?igsh=MWZncHdtYndocmlkaQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
                href="https://www.linkedin.com/company/arab-international-film-festival-of-australia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
            </a>


            <a
              href="https://www.youtube.com/channel/UCO2xJ6Cw1-5o1iolIJtO4yQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>


          </div>
          <p className="text-champagne/85 text-sm">
            Stay connected with us on social media for the latest festival updates, behind-the-scenes content, and Arab cinema news.
          </p>
        </div>
      </section>

    </main>
  )
}

