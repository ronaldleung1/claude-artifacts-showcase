// app/submit/page.tsx
import { Header } from '@/components/Header'
import { SubmissionForm } from '@/components/SubmissionForm'

export default function SubmitPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-6 text-center">
          Submit Your Claude Artifact
        </h1>
        <p className="text-muted-foreground mb-8 text-center">
          Share your Claude-generated content with the community.
        </p>
        <SubmissionForm />
      </div>
    </>
  )
}