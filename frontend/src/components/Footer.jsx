import React from 'react'

const Footer = () => {
  return (
    <footer className='border-tgray-200 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-6'>
                <h2 className='text-xl font-bold'>Job Hunt</h2>
                <p className='text-sm'>@ 2024 Your Company. All rights reserved</p>
            </div>

            <div className='flex space-x-4 mt-4 md:mt-0'>
                <a href="https://facebook.com" className='hover:text-gray-400' aria-label="Facebook">
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M22.676 0M1.324C.593 0 O</svg>
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
