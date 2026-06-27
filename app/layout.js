import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: 'Sabari Balan Ganesan — Aerospace Project Lead',
  description:
    'Aerospace Project Lead and MS Engineering Management candidate at Northeastern University. Specializing in UAV flight test programs, process operations, and program management.',
  keywords: ['Sabari Balan Ganesan', 'Aerospace Project Lead', 'UAV Systems', 'Engineering Management', 'Project Management'],
  openGraph: {
    title: 'Sabari Balan Ganesan — Aerospace Project Lead',
    description: 'Aerospace Project Lead specializing in UAV systems, flight test campaigns, and engineering program management.',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
