import './globals.css'
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Alexander Kozic',
  description: 'The personal website of Alexander Kozic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <main className='relative overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
