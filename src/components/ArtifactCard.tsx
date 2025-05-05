// components/ArtifactCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ArtifactCardProps {
  id: string
  projectName: string
  artifactUrl: string
  screenshotUrl?: string
  // submitted: Date
}

export function ArtifactCard({
  projectName,
  artifactUrl,
  // screenshotUrl,
}: ArtifactCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* <div className="h-48 bg-secondary flex items-center justify-center">
        {screenshotUrl ? (
          <img 
            src={screenshotUrl} 
            alt={projectName} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-muted-foreground text-sm">No preview available</div>
        )}
      </div> */}
      <CardHeader>
        <CardTitle className="text-xl">{projectName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground truncate">
          <a 
            href={artifactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artifactUrl}
          </a>
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          <a 
            href={artifactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Artifact
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}