import Image from 'next/image'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        {/* Profile picture */}
        {/* <Image
          src="/images/profile.jpg" // Make sure this image exists in /public/images
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        /> */}
        {/* Your name */}
        <span className="text-xl font-semibold">Darshana</span>
      </div>

      {/* Social icons */}
      <div className="flex items-center space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          {/* <FaGithub className="text-2xl hover:text-gray-700" /> */}
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          {/* <FaLinkedin className="text-2xl hover:text-blue-700" /> */}
        </a>
      </div>
    </header>
  )
}
