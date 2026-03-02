# AIFFA - Arab International Film Festival of Australia

## Baseline UI Verified

### Project Structure
- **Framework**: Next.js 16.0.10 with App Router
- **Directory Structure**: Uses `app/` directory at root level (no `src/` directory)
- **Build Status**: ✅ Builds successfully with no errors
- **Runtime Status**: ✅ Dev server runs without errors

### Routes Verified

#### `/` (Home Page)
- Renders: Hero section, Featured Films section, Program Highlights section, Prize Categories section, Experience Cinema section, Be Part section
- Components: Navigation, Footer, HeroSection, FeaturedFilmsSection, ProgramHighlightsSection, PrizeCategoriesSection, ExperienceCinemaSection, BePartSection

#### `/about`
- Renders: About page with hero section, Vision & Mission cards, Why Arab Cinema section, Festival History timeline, Leadership Team grid, Final CTA section
- Components: Navigation, Footer

#### `/contact`
- Renders: Contact page with hero section, Contact form, Contact information cards, Social media links, Department contacts grid
- Components: Navigation, Footer
- Note: Client component with form state management

#### `/membership`
- Renders: Membership page with hero section, Benefits grid (6 benefits), Membership form section, Support section
- Components: Navigation, Footer, MembershipForm

#### `/news`
- Renders: News page with hero section, Festival Announcements grid, Filmmaker Interviews grid, Arab Cinema Articles list, Festival Recaps & Cultural Stories, Ceremony Photos & Videos gallery, Newsletter signup
- Components: Navigation, Footer

#### `/oman-partnership`
- Renders: Oman Partnership page with hero section, Partnership overview, Shared Vision section, Mentorship & Masterclasses section, Oman Spotlight cards, Cultural & Industry Exchange section
- Components: Navigation, Footer

#### `/prizes`
- Renders: Prizes page with hero section, Overview stats, Prize Categories grid (6 categories), Jury Panel, Winners Archive (2024 & 2023), Ceremony Photos & Videos gallery
- Components: Navigation, Footer

#### `/program`
- Renders: Program page with hero section, Program Detail Cards (Workshops, Mentorship, Talent Exchange, Curated Film Screenings), Sample Schedule with events, Festival Venues section
- Components: Navigation, Footer

#### `/submissions`
- Renders: Submissions page with hero section, Call for Submissions section, Eligibility Requirements grid, Important Dates timeline, Selection Process steps, Filmmaker FAQs, Final CTA section
- Components: Navigation, Footer, SubmissionsFAQ

### Build Output
All routes are statically generated (○ Static) and prerendered successfully:
- 11 routes total (including `/_not-found`)
- All pages compile without TypeScript errors (types validation skipped in config)
- No runtime errors detected during build

### Notes
- Project uses npm for package management (dependencies installed successfully)
- Uses Next.js App Router architecture
- All pages include Navigation and Footer components
- Images are served from `/public/images/` directory
- Uses Tailwind CSS for styling with custom theme colors (champagne, primary, eerie-black, etc.)

## Architecture Refactor Complete

### Refactoring Summary
The project has been successfully refactored to introduce a `src/` directory structure and modular architecture as required.

### Changes Made

#### 1. Source Directory Structure
- **Created `src/` directory** at project root
- **Moved `app/` to `src/app/`** - Next.js App Router now located in `src/app/`
- **Moved `components/` to `src/components/`** - All shared components
- **Moved `hooks/` to `src/hooks/`** - Custom React hooks
- **Moved `lib/` to `src/lib/`** - Utility functions
- **Updated `tsconfig.json`** - Path aliases now point to `./src/*`

#### 2. Modules Architecture
Created modular structure for each route with the following pattern:
```
src/modules/
  {module-name}/
    ui/
      pages/      # Page components
      sections/   # Section components (empty, ready for future use)
      components/ # Module-specific components (empty, ready for future use)
```

Modules created:
- `home` - Home page module
- `about` - About page module
- `contact` - Contact page module
- `membership` - Membership page module
- `news` - News page module
- `oman-partnership` - Oman Partnership page module
- `prizes` - Prizes page module
- `program` - Program page module
- `submissions` - Submissions page module

#### 3. Routing Isolation
- **Route files (`src/app/*/page.tsx`)** now contain only:
  - Metadata exports (for SEO)
  - Import and re-export of module page components
  - No UI JSX in route files

Example:
```tsx
import HomePage from "@/modules/home/ui/pages/home-page"

export default function Page() {
  return <HomePage />
}
```

#### 4. UI Isolation
- **All page UI logic** moved to `src/modules/{module}/ui/pages/{module}-page.tsx`
- **Exact JSX preserved** - No changes to classNames, structure, or components
- **All imports updated** to use `@/` absolute imports
- **Public image paths unchanged** - All `/images/` references remain valid

#### 5. Build Verification
- ✅ **Build successful** - `npm run build` completes without errors
- ✅ **All routes compile** - 11 routes (including `/_not-found`) generated successfully
- ✅ **No runtime errors** - All pages render correctly
- ✅ **TypeScript paths working** - All `@/` imports resolve correctly

### Architecture Benefits
- **Separation of concerns** - Routing logic separated from UI logic
- **Modular organization** - Each feature/route has its own module
- **Scalability** - Easy to add sections and components to modules
- **Maintainability** - Clear structure makes code easier to navigate
- **No UI changes** - All styling and components remain exactly as before

## Hero Video HLS Conversion (macOS/Linux)

Use the helper script to convert hero MP4 files into adaptive HLS outputs.

### Script Location
- `public/videos/convert-hero-to-hls.sh`

### Prerequisite
- FFmpeg installed and available in `PATH`
  - macOS: `brew install ffmpeg`

### Usage

Run from the folder that contains the source hero MP4 files.

```bash
cd public/videos
./convert-hero-to-hls.sh
```

Single file mode:

```bash
./convert-hero-to-hls.sh 1
./convert-hero-to-hls.sh 2
./convert-hero-to-hls.sh 3
```

### What it does
- Converts each input into HLS renditions:
  - 1080p (`5000k`, `1920x1080`)
  - 720p (`2800k`, `1280x720`)
  - 480p (`1400k`, `854x480`)
- Uses `libx264` video + `aac` audio
- HLS settings: `hls_time 6`, VOD playlists, `+faststart`
- Creates output directory per file: `hero-X-hls/`
- Generates variant playlists and master playlist:
  - `hero-X-hls/hero-X-1080p.m3u8`
  - `hero-X-hls/hero-X-720p.m3u8`
  - `hero-X-hls/hero-X-480p.m3u8`
  - `hero-X-hls/hero-X.m3u8` (master)

### Output Location Example
- If run inside `public/videos/Home/`, outputs are ready in:
  - `public/videos/Home/hero-1-hls/`
  - `public/videos/Home/hero-2-hls/`
  - `public/videos/Home/hero-3-hls/`

### Error Handling
- Exits with error if:
  - FFmpeg is not installed
  - target input file is missing
  - no matching `hero-*.mp4` files are found in batch mode

