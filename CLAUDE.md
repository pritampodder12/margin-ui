# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

### Tech Stack
- **React 19** with TypeScript 5
- **Vite 6** as build tool
- **Tailwind CSS 4** for styling
- **React Router 7** for navigation
- **@react-pdf/renderer 4** for PDF generation

### State Management Pattern
This app uses a **singleton store pattern** without Context/Redux. Key files:

- **`src/stores/index.ts`**: Resume data store with all CRUD operations
  - Singleton class `ResumeStore` with methods: `setData`, `updatePersonalInfo`, `updateSummary`, `addExperience`, `updateExperience`, `removeExperience`, `addEducation`, `updateEducation`, `removeEducation`, `updateSkills`, `setTemplate`, `reset`, `parseFromFile`
  - Exports `useResumeStore` hook for React integration
  - Exports `dummyParsedResume` for PDF import simulation

### Design System
The design system is built around **8px spacing scale** with:

- **Colors**: CSS custom properties in `src/styles/globals.css`
- **Typography**: `src/design-system/typography.ts` with Fraunces/Inter/JetBrains Mono
- **Components**: `src/design-system/components/` with CVA variants
- **UI components**: `src/components/ui/` using shadcn/ui patterns

### File Organization
```
src/
├── app/              # App entry points
├── components/       # Reusable components
│   ├── common/      # Logo, RevealOnScroll, ScoreRing
│   ├── dialogs/     # ImportDialog, SaveSuccessDialog
│   ├── ui/          # shadcn/ui components
│   ├── cards/       # ResumeCard, NewResumeCard
└── layouts/         # RootLayout components
├── hooks/           # Custom hooks (usePDFExport, etc.)
├── pages/           # Route pages (Landing, Dashboard, Editor, Templates)
├── pdf/             # PDF generation templates
→    ├── templates/  # LedgerPDF, NorthlinePDF, CompassPDF
├── stores/          # State management
├── design-system/   # Design tokens, typography, components
└── lib/             # Utils (cn for clsx + tailwind-merge)
```

## Key Commands

```bash
# Development
npm run dev              # Start dev server (runs on port starting at 3000)

# Build & Type Checking
npm run build            # Type check + vite build
npm run type-check       # TypeScript only

# Code Quality
npm run lint             # Run ESLint
```

## State Management

### Using the Resume Store
```typescript
import { useResumeStore } from '@/stores';

function MyComponent() {
  const data = useResumeStore();
  const resumeStore = resumeStore; // Singleton

  // Update data
  resumeStore.updatePersonalInfo({ fullName: 'John Doe' });

  // Add/Update/Remove sections
  resumeStore.addExperience();
  resumeStore.updateExperience(id, updates);
  resumeStore.removeExperience(id);
}
```

### PDF Templates
Templates are selected via `templateId` in resume data:
- `ledger`: Classic single-column (default)
- `northline`: Modern with red accent dots
- `compass`: Two-column with left sidebar

Templates are defined in `src/pdf/templates/`. The hook `usePDFExport` automatically selects the template based on `data.templateId`.

### Navigation
- Landing: `/`
- Dashboard: `/dashboard`
- Editor: `/editor`
- Templates: `/templates`

## Important Notes

- **Singleton store**: Don't use Context/Redux patterns - use the resumeStore singleton
- **PDF imports**: External font URLs cause `RangeError: Offset is outside the bounds of the DataView` - use built-in PDF fonts (Helvetica, Courier)
- **File extensions**: All TS files with JSX must be `.tsx` (e.g., `usePDFExport.tsx`, not `.ts`)
- **Routes**: React Router 7 uses path patterns in `src/app/router/Router.tsx`
