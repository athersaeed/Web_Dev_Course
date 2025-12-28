import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with ❤️ by Attu</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
