import './globals.css'

export const metadata = {
  title: 'Recovery Resources',
  description: 'Support and resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Crisis Banner */}
        <div className="bg-red-600 text-white shadow-lg">
          Crisis? Call 988 (Suicide Crisis Lifeline)
        </div>

        {/* Navigation */}
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
             <h1 className="text-cl font-bold">Recovery resources</h1>
             <div className="space-x-6">
               <a href="/" className="hover:text-blue-200">Home</a>
               <a href="/about" className="hover:text-blue">About</a>
               <a href="/resources" className="hover:text-blue">Resources</a>
             </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p> Testing some stuff </p>
            <p className="text-sm text-gray-400 mt-2">
              If you're in crisis reach out
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}