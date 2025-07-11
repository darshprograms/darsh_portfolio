// src/components/MainSection.js
export default function MainSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
      <p className="text-lg md:text-xl mb-6">
        A passionate Full Stack Developer with experience in .NET, React, and AWS
      </p>
      <a
        href="/resume.pdf"
        download
        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
      >
        Download Resume
      </a>
    </section>
  )
}
