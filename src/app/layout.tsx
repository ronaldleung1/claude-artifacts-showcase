import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Claude Artifacts Showcase',
  description: 'A gallery of impressive artifacts created with Claude AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen antialiased"
      )}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}