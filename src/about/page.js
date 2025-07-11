// src/app/about/page.js
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg leading-relaxed">
        I'm a software developer with 5+ years of experience building scalable web applications.
        I specialize in .NET backend services, React frontends, and AWS cloud infrastructure.
        I love solving business problems through clean and maintainable code.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>.NET 8, C#, Web API</li>
        <li>React, Next.js</li>
        <li>SQL Server, DynamoDB</li>
        <li>AWS (Lambda, S3, API Gateway)</li>
        <li>CI/CD with GitHub Actions</li>
      </ul>
    </div>
  )
}
