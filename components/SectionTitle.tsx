import React from 'react'

const SectionTitle = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <h3 className='font-semibold text-2xl mb-4'>{children}</h3>
  )
}

export default SectionTitle
