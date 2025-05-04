// app/page.tsx
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Header />
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          Claude Artifacts Showcase
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
          Discover and share amazing artifacts created with Claude AI.
          From creative writing to data visualizations, see what's possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/submit">
              Submit Your Artifact
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              Browse Gallery
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}