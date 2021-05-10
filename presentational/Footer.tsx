import React from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'

const Footer = () => {
  return (
    <footer>
      <div className="absolute text-center bottom-0 right-0 p-8">
         <div className="bg-white p-2 shadow-lg rounded-lg">
        <LanguageSwitcher />
      </div>
      </div>
    </footer>
  )
}

export default Footer
