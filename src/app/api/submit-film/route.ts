import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

interface SubmissionData {
  filmTitle: string
  originalLanguage: string
  englishSubtitles: string
  countryOfProduction: string
  yearOfCompletion: string
  filmDuration: number
  category: string
  genres: string
  actors: Array<{ fullName: string; role: string; biography: string }>
  directors: Array<{ fullName: string; role: string; biography: string }>
  producers: Array<{ fullName: string; role: string; biography: string }>
  crew: Array<{ fullName: string; department: string; biography: string }>
  email: string
  rightsConfirmation: boolean
  contentCleared: boolean
  termsAgreement: boolean
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

async function appendToSheet(data: SubmissionData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    data.email,
    data.filmTitle,
    data.category,
    data.filmDuration,
    data.originalLanguage,
    data.englishSubtitles,
    data.countryOfProduction,
    data.yearOfCompletion,
    data.genres,
    data.actors.map(a => `${a.fullName} (${a.role})`).join('; '),
    data.directors.map(d => `${d.fullName} (${d.role})`).join('; '),
    data.producers.map(p => `${p.fullName} (${p.role})`).join('; '),
    data.crew.map(c => `${c.fullName} - ${c.department}`).join('; '),
    data.rightsConfirmation ? 'Yes' : 'No',
    data.contentCleared ? 'Yes' : 'No',
    data.termsAgreement ? 'Yes' : 'No',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A:Q',
    valueInputOption: 'RAW',
    requestBody: {
      values: [row],
    },
  })
}

function formatSubmissionHTML(data: SubmissionData): string {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .sender-info { background: #D4AF37; color: #050A18; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
          .sender-info h2 { margin: 0 0 10px 0; font-size: 20px; }
          .sender-info a { color: #050A18; font-weight: bold; text-decoration: underline; }
          .section { margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
          .section h2 { color: #D4AF37; font-size: 18px; margin-bottom: 15px; text-transform: uppercase; }
          .detail { margin-bottom: 10px; }
          .label { font-weight: bold; color: #050A18; }
          .actors, .directors, .producers, .crew { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="sender-info">
          <h2>📧 From Submitter</h2>
          <p style="margin: 0; font-size: 16px;">
            <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a><br/>
            <em>Click "Reply" to respond directly to the filmmaker</em>
          </p>
        </div>

        <h1>New Film Submission</h1>
        
        <div class="section">
          <h2>Film Details</h2>
          <div class="detail"><span class="label">Title:</span> ${data.filmTitle}</div>
          <div class="detail"><span class="label">Category:</span> ${data.category}</div>
          <div class="detail"><span class="label">Duration:</span> ${data.filmDuration} minutes</div>
          <div class="detail"><span class="label">Original Language:</span> ${data.originalLanguage}</div>
          <div class="detail"><span class="label">English Subtitles:</span> ${data.englishSubtitles || 'Not specified'}</div>
          <div class="detail"><span class="label">Country:</span> ${data.countryOfProduction}</div>
          <div class="detail"><span class="label">Year of Completion:</span> ${data.yearOfCompletion}</div>
          <div class="detail"><span class="label">Genres:</span> ${data.genres}</div>
        </div>

        <div class="section">
          <h2>Actors</h2>
          ${data.actors
            .map(
              (actor, i) => `
            <div class="actors">
              <strong>Actor ${i + 1}</strong><br/>
              Name: ${actor.fullName}<br/>
              Role: ${actor.role}<br/>
              Biography: ${actor.biography}
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <h2>Directors</h2>
          ${data.directors
            .map(
              (director, i) => `
            <div class="directors">
              <strong>Director ${i + 1}</strong><br/>
              Name: ${director.fullName}<br/>
              Role: ${director.role}<br/>
              Biography: ${director.biography}
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <h2>Producers</h2>
          ${data.producers
            .map(
              (producer, i) => `
            <div class="producers">
              <strong>Producer ${i + 1}</strong><br/>
              Name: ${producer.fullName}<br/>
              Role: ${producer.role}<br/>
              Biography: ${producer.biography}
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <h2>Crew</h2>
          ${data.crew
            .map(
              (member, i) => `
            <div class="crew">
              <strong>Crew Member ${i + 1}</strong><br/>
              Name: ${member.fullName}<br/>
              Department: ${member.department}<br/>
              Biography: ${member.biography}
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <h2>Submission Confirmations</h2>
          <div class="detail">Rights Confirmation: ✓ Confirmed</div>
          <div class="detail">Content Cleared: ✓ Confirmed</div>
          <div class="detail">Terms Agreement: ✓ Confirmed</div>
        </div>

        <div class="section">
          <h2>Contact</h2>
          <div class="detail"><span class="label">Email:</span> ${data.email}</div>
        </div>

        <p style="color: #999; font-size: 12px; margin-top: 40px;">This is an automated submission confirmation from the Malaysian Film Festival of Australia.</p>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data: SubmissionData = await request.json()

    // Validate required fields
    if (!data.filmTitle || !data.email || !data.filmDuration || !data.category) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Attempting to save to Google Sheet...')

    if (!SPREADSHEET_ID) {
      return NextResponse.json(
        { message: 'Google Sheet not configured' },
        { status: 500 }
      )
    }

    // Save to Google Sheet
    await appendToSheet(data)

    console.log('Successfully saved to Google Sheet')

    return NextResponse.json(
      { message: 'Submission received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { message: `Failed to submit: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
