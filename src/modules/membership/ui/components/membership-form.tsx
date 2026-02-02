"use client"

import React from "react"

import { useState } from "react"

const countries = [
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Morocco",
  "Oman",
  "Qatar",
  "Kuwait",
  "Other",
]

const interests = [
  "Documentary",
  "Short Film",
  "Feature Film",
  "Workshops",
  "Panels",
]

export function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    profession: "",
    company: "",
    website: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    interests: [] as string[],
    heardAbout: "",
    accessibility: "",
    newsletter: false,
    eventUpdates: false,
    termsAccepted: false,
    consentStorage: false,
  })

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      {/* Personal Information */}
      <div className="mb-10">
        <h3 className="font-serif text-xl font-semibold text-champagne mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-champagne/70 text-sm mb-2">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-champagne/70 text-sm mb-2">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-champagne/70 text-sm mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="+61 4xx xxx xxx"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-champagne/70 text-sm mb-2">
              Country <span className="text-primary">*</span>
            </label>
            <select
              id="country"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Select country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="city" className="block text-champagne/70 text-sm mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label htmlFor="profession" className="block text-champagne/70 text-sm mb-2">
              Profession / Role
            </label>
            <input
              type="text"
              id="profession"
              value={formData.profession}
              onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="e.g. Director, Producer"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-champagne/70 text-sm mb-2">
              Company / Institution
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-champagne/70 text-sm mb-2">
              Website / Portfolio / IMDb
            </label>
            <input
              type="url"
              id="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="https://"
            />
          </div>
        </div>
      </div>

      {/* Social Channels */}
      <div className="mb-10">
        <h3 className="font-serif text-xl font-semibold text-champagne mb-6">Social Channels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="instagram" className="block text-champagne/70 text-sm mb-2">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="@handle"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-champagne/70 text-sm mb-2">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="Profile link"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block text-champagne/70 text-sm mb-2">
              Twitter / X
            </label>
            <input
              type="text"
              id="twitter"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="@handle"
            />
          </div>
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="mb-10">
        <h3 className="font-serif text-xl font-semibold text-champagne mb-6">Areas of Interest</h3>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <label
              key={interest}
              className={`px-4 py-2 border cursor-pointer transition-colors ${
                formData.interests.includes(interest)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-primary/20 text-champagne/70 hover:border-primary/40"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
                className="sr-only"
              />
              {interest}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-10">
        <h3 className="font-serif text-xl font-semibold text-champagne mb-6">Additional Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="heardAbout" className="block text-champagne/70 text-sm mb-2">
              How did you hear about IAFFA?
            </label>
            <input
              type="text"
              id="heardAbout"
              value={formData.heardAbout}
              onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              placeholder="e.g. Social media, friend, news article"
            />
          </div>
          <div>
            <label htmlFor="accessibility" className="block text-champagne/70 text-sm mb-2">
              Accessibility / Special Requirements (Optional)
            </label>
            <textarea
              id="accessibility"
              rows={3}
              value={formData.accessibility}
              onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })}
              className="w-full bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Let us know if you have any accessibility needs"
            />
          </div>
        </div>
      </div>

      {/* Consent & Preferences */}
      <div className="mb-10">
        <h3 className="font-serif text-xl font-semibold text-champagne mb-6">Consent & Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
              className="mt-1 w-4 h-4 accent-primary"
            />
            <span className="text-champagne/70 text-sm">Subscribe to IAFFA newsletter</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.eventUpdates}
              onChange={(e) => setFormData({ ...formData, eventUpdates: e.target.checked })}
              className="mt-1 w-4 h-4 accent-primary"
            />
            <span className="text-champagne/70 text-sm">Receive event updates</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.termsAccepted}
              onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
              className="mt-1 w-4 h-4 accent-primary"
            />
            <span className="text-champagne/70 text-sm">
              Agree to IAFFA{" "}
              <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a> and{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>{" "}
              <span className="text-primary">*</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consentStorage}
              onChange={(e) => setFormData({ ...formData, consentStorage: e.target.checked })}
              className="mt-1 w-4 h-4 accent-primary"
            />
            <span className="text-champagne/70 text-sm">
              Consent to store information for membership purposes{" "}
              <span className="text-primary">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          className="flex-1 px-8 py-3 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
        >
          Join IAFFA
        </button>
      </div>
    </form>
  )
}
