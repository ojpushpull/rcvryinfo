export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to -white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            We do come back
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            <div className="space-x-4">
              <a
                href="/resources"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  
                </a>
            </div>
          </p>
        </div>
      </section>
    </main>
  )
}