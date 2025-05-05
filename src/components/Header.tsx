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
          Showcase of artifacts created with <a className="text-foreground underline" href="https://www.anthropic.com/for/cornell-students">Claude</a>
        </p>
      </div>
      <nav className="flex gap-4">
        <Button variant="ghost" asChild>
          <Link href="/">Gallery</Link>
        </Button>
        <Button asChild>
          <Link href="/submit">Submit</Link>
        </Button>
      </nav>
    </header>
  )
}