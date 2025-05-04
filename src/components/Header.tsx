// components/Header.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex justify-between items-center py-6 mb-8">
      <div>
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Claude Artifacts
        </Link>
        <p className="text-sm text-muted-foreground">
          Showcase of amazing artifacts created with Claude
        </p>
      </div>
      <nav className="flex gap-4">
        <Button variant="ghost" asChild>
          <Link href="/gallery">Gallery</Link>
        </Button>
        <Button asChild>
          <Link href="/submit">Submit</Link>
        </Button>
      </nav>
    </header>
  )
}