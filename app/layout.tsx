import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceFlow — Predict Your Freelance Cash Flow',
  description: 'Track invoice status, analyze client payment patterns, and predict your cash flow. Built for freelancers and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d268f4c-941f-4fdc-a959-e6bdde0d1d9a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
