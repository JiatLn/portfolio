import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t p-4 text-stone-400'>
      <div className='flex items-center justify-center gap-4'>
        <a href='/Lin Jiatao CV.pdf' target='_blank' className='hover:text-stone-800 cursor-pointer'>PDF resume</a>
        <span>|</span>
        <Link href={'/projects'} className='hover:text-stone-800 cursor-pointer'>Projects</Link>
        <span>|</span>
        <a href='https:github.com/jiatln' target='_blank' className='hover:text-stone-800 cursor-pointer'>Github</a>
      </div>
      <div className='flex items-center justify-center gap-4 mt-4'>
        &copy; 2023 JiatLn
      </div>
    </footer>
  )
}

export default Footer
