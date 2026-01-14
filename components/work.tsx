import { FunctionComponent } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'British Women\'s Group',
    description: 'A complete website overhaul for this Bangkok community organization—now faster, easier to update, and saving over $200/year in hosting costs.',
    image: '/images/work/project-1.png',
    tags: ['NextJS', 'Tailwind', 'React'],
    link: 'https://bwgbangkok.org',
  },
  {
    title: 'Neilson Hays Library',
    description: 'Modernized the digital presence of Thailand\'s oldest English-language library with a lightning-fast frontend while preserving their existing content system.',
    image: '/images/work/project-2.png',
    tags: ['NextJS', 'Tailwind', 'Wordpress', 'React'],
    link: 'https://neilsonhayslibrary.org',
  },
  {
    title: 'ACT Counselors',
    description: 'A multilingual website for this counseling practice, with an intuitive CMS that lets staff easily manage content and translations without developer help.',
    image: '/images/work/project-3.png',
    tags: ['NextJS', 'Tailwind', 'Contentful'],
    link: 'https://actcounselors.org',
  },
]

const Work: FunctionComponent = () => {
  return (
    <div className='work-section bg-grey py-20'>
      <div className='max-w-6xl mx-auto px-5'>
        <h1 className='text-white text-center pb-4'>Work I'm proud of</h1>
        <p className='text-gray-400 text-center max-w-2xl mx-auto pb-12'>
          A selection of projects where I've helped businesses establish their
          online presence and grow their customer base.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300'>
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60'></div>
              </div>

              <div className='p-6'>
                <h3 className='text-white text-xl font-semibold mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-400 text-sm mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='text-xs px-3 py-1 rounded-full bg-aqua-blue/20 text-aqua-blue'>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-aqua-blue hover:text-white transition-colors text-sm'>
                    View project
                    <svg
                      className='w-4 h-4 ml-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work

