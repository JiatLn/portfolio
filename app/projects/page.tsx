import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Color Art',
      description: 'A rust crate for working with colors and color spaces. It is used to build color instances and provide color space for color conversion, such as RGB to HSL, CMYK, etc. Calculate the Euclidean distance between the colors, and transform the colors, such as multiply, color dilution and other operations. Extract the channel values of color transparency, brightness, lightness, etc.',
      link: 'https://github.com/JiatLn/color-art',
      image: '/color-art.png',
    },
    {
      name: 'Ceprei official website',
      description: 'This project is the official website of Ceprei, it developed with Nuxt.js and TypeScript. The website contains CMS for the news and business introduction modules, etc.',
      link: 'https://ceprei.org',
      video: '/video.mp4',
    },
    {
      name: 'Vue Fliplay',
      description: 'A Vue 3 component, to make your list with animation if binded data update.',
      link: 'https://github.com/JiatLn/vue-fliplay',
      image: '/example.gif',
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='uppercase text-3xl text-center my-4'>my latest projects</h1>
      <div className='flex flex-col'>
        {
          projects.map(project => (
            <div key={project.name} className='bg-gray-100 flex flex-col lg:flex-row items-center lg:even:flex-row-reverse w-full border'>
              <div className='flex-1'>
                {
                  project.video ?
                    <video src={project.video} className='xl:p-4 max-w-full' loop autoPlay />
                    :
                    <Image className='xl:p-4 flex-1 object-contain !relative' src={project.image!} alt='cover' fill />
                }
              </div>
              <div className='flex-1 flex flex-col items-center justify-center'>
                <div className='p-8'>
                  <h2 className='text-center cursor-pointer mb-4 text-3xl font-bold text-orange-400 hover:opacity-60'>
                    <a href={project.link} target='_blank'>{project.name}</a>
                  </h2>
                  <p className='text-lg'>{project.description}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
      <div className='my-4 flex items-center justify-center gap-6'>
        <Link href={'/'} >Back</Link>
        <a href='https://github.com/JiatLn?tab=repositories' target='_blank' className='bg-orange-400 hover:bg-orange-500 text-white rounded-full py-1 px-4 '>More</a>
      </div>
    </div>
  )
}

export default ProjectsPage
