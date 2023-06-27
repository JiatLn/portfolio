import DescriptionMap from "@/components/DescriptionMap"
import SectionTitle from "@/components/SectionTitle"
import { DescItem } from "@/types"
import Link from "next/link"


export default function Home() {
  const links: DescItem[] = [
    {
      name: 'Email', content: 'iamcx33@163.com',
      url: 'mailto:iamcx33@163.com'
    },
    {
      name: 'Github', content: 'jiatln',
      url: 'https://github.com/jiatln'
    },
    {
      name: 'Personal Website', content: 'jiatln',
      url: 'https://jiatln.netlify.app'
    },
  ]

  const skills: DescItem[] = [
    {
      name: 'JavaScript', content: 'TypeScript, ES6+, Vue, React',
    },
    {
      name: 'SSR Framework', content: 'Nuxt.js, Next.js'
    },
    {
      name: 'Web', content: 'Sass, UnoCSS, TailwindCSS, Antd, Echarts',
    },
    {
      name: 'Rust', content: 'Cli tools',
    },
    {
      name: 'Others', content: 'Github, Data visualization',
    },
  ]

  const works: DescItem[] = [
    {
      name: 'Guangzhou Ceprei Certification Center Service Co., Ltd (2020.9-2023.5)',
      job: 'Front-end Web Developer',
      content: [
        'Maintained more than 10 projects and promoted restructuring work of 3 projects by using Vue.js.',
        'Solved the problem of search engine optimization through developing more than 3 CMS web platforms from scratch by using Nuxt.js.',
        'Improved development efficiency and reduced the secondary compilation cost from around 90 seconds to 10-20 seconds, by using webpack plugin HardSourceWebpackPlugin to cache module.',
        'Promoted the landing of the Vue3/Nuxt3 and TypeScript, making growth in the company\'s front-end technology.',
        'Conducted several in-house technical sharing sessions, including Nuxt.js, UnoCSS, TypeScript, etc.'
      ],
    },
    {
      name: 'Shenzhen Research Institute of Big Data (2019.5-2020.6)',
      job: 'Junior Software Engineer',
      content: ['Developed the front-end web platform with the functions of online data visualization and analysis functions.', 'Packaged and integrated visualization schemes by using visualization framework such as Echarts/AntV.', 'Developed Restful API to clean and analyze data, designed and developed the responsive Vue components to display data.'],
    },
  ]
  return (
    <main className='flex flex-col p-6 gap-4 mx-auto max-w-[900px]'>
      <h1 className='font-bold text-4xl'>Digital Résumé</h1>
      <h2 className='text-2xl'>Lin Jiatao - Front-end Web Developer</h2>
      <section>
        <DescriptionMap items={links} type="links" />
      </section>
      <section>
        <SectionTitle>Skills</SectionTitle>
        <DescriptionMap items={skills} type="skills" />
      </section>
      <section>
        <SectionTitle>Projects</SectionTitle>
        <p>
          <span>Checkout my latest </span>
          <Link href={'/projects'} className="text-orange-400">projects</Link>
        </p>
      </section>
      <section>
        <SectionTitle>Work Experience</SectionTitle>
        <DescriptionMap items={works} type="works" />
      </section>
      <section>
        <SectionTitle>Education</SectionTitle>
        <p>South China Agricultural University</p>
        <p className="text-gray-500">
          2014.9 - 2018.6 <span className="ml-2">Bachelor of Information and Computing Science</span>
        </p>
      </section>
    </main>
  )
}
