// components/SubmissionForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SubmissionForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    projectName: '',
    artifactUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form Data:', formData);

    // Validate email domain
    if (!formData.email.endsWith('@cornell.edu')) {
      alert('Only Cornell email addresses (@cornell.edu) are allowed');
      return;
    }
    
    // Validate artifact URL
    if (!formData.artifactUrl.includes('claude.ai/public/artifacts/')) {
      alert('URL must be a valid Claude artifact URL (claude.ai/public/artifacts/)');
      return;
    }
    
    // Validate project name
    if (!formData.projectName.trim()) {
      alert('Project name is required');
      return;
    }
    
    setIsSubmitting(true)
    
    try {
      // Add to Firestore
      await addDoc(collection(db, 'artifacts'), {
        ...formData,
        submitted: new Date()
      })
      
      router.push('/?success=true')
    } catch (error) {
      console.error('Error submitting artifact:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="email">Your Email (@cornell.edu)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          id="projectName"
          name="projectName"
          required
          value={formData.projectName}
          onChange={handleChange}
          placeholder="My Amazing Claude Project"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="artifactUrl">Artifact URL</Label>
        <Input
          id="artifactUrl"
          name="artifactUrl"
          type="url"
          required
          value={formData.artifactUrl}
          onChange={handleChange}
          placeholder="https://claude.ai/public/artifacts..."
        />
        <p className="text-sm text-muted-foreground">
          The URL to your Claude-generated artifact
        </p>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Artifact'}
      </Button>
    </form>
  )
}