// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Header } from '@/components/Header'
import { ArtifactCard } from '@/components/ArtifactCard'

interface Artifact {
  id: string
  projectName: string
  artifactUrl: string
  screenshotUrl?: string
  // submitted: Date
}

export default function GalleryPage() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArtifacts() {
      try {
        const artifactsQuery = query(
          collection(db, 'artifacts')
        );
        
        const querySnapshot = await getDocs(artifactsQuery);
        
        const artifactList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Artifact[]
        
        setArtifacts(artifactList);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArtifacts();
  }, []);

  return (
    <>
      <Header />
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          Artifact Gallery
        </h1>
        
        {loading ? (
          <div className="text-center py-12">Loading artifacts...</div>
        ) : artifacts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No artifacts have been submitted yet. Be the first!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.id} {...artifact} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}