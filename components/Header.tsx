import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='mx-auto max-w-[900px] border-b px-6 py-4 font-semibold sm:font-bold'>
      <Link href={'/'} className='hidden sm:inline'>Jiatao Lin</Link>
      <Link href={'/'} className='sm:hidden'>LJT</Link>
    </header>
  )
}

export default Header
