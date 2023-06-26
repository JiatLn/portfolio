import { DescItem } from '@/types'
import React from 'react'

const DescriptionItems = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-col list-inside list-disc'>
      {
        items.map((item, index) => (
          <li key={index} className='leading-8'>
            {item}
          </li>
        ))
      }
    </ul>
  )
}

const DescriptionMap = ({ items, type }: { items: DescItem[], type: string }) => {
  return (
    <div className={`${type === 'works' ? 'flex flex-col gap-4' : ''}`}>
      {
        items.map(item => (
          <div key={item.name} className={`flex gap-2 ${type === 'works' ? 'flex-col items-start' : 'items-center'}`}>
            <div className='font-semibold'>
              {item.name}
            </div>
            {
              type === 'works' &&
              <div className='italic'>
                {item.job}
              </div>
            }
            {
              type === 'links'
                ? <a href={item.url} target='_blank' className='text-orange-400'>
                  {item.content}
                </a>
                : (
                  Array.isArray(item.content) ? <DescriptionItems items={item.content} />
                    : <div className='text-stone-900'>
                      {item.content}
                    </div>
                )
            }

          </div>
        ))
      }
    </div>
  )
}

export default DescriptionMap
