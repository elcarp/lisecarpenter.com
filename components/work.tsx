import { FunctionComponent } from 'react'
import Image from 'next/image'

interface AiProject {
  title: string
  problem: string
  approach: string
  result: string
  tags: string[]
  link?: string
  // Drafts render in development only, so placeholders never ship
  draft?: boolean
}

interface WebProject {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

// TODO: replace these placeholders with real projects and remove `draft`
const aiProjects: AiProject[] = [
  {
    title: 'Support assistant grounded in company docs',
    problem:
      'A support team was answering the same product questions hundreds of times a week.',
    approach:
      'Built a RAG assistant over their help center and internal wiki, with source citations and a human handoff for low-confidence answers.',
    result: 'Placeholder: e.g. "40% of tickets resolved without an agent".',
    tags: ['Claude', 'RAG', 'pgvector', 'Next.js'],
    draft: true,
  },
  {
    title: 'Document processing agent',
    problem:
      'Operations staff manually re-keyed data from PDFs and emails into internal systems.',
    approach:
      'An agent that extracts structured data, validates it against business rules and writes to the CRM via tool calls, with a review queue for exceptions.',
    result: 'Placeholder: e.g. "Processing time cut from 2 days to 2 hours".',
    tags: ['Python', 'Agents', 'Structured outputs'],
    draft: true,
  },
  {
    title: 'Eval harness for an AI feature',
    problem:
      "A product team couldn't tell whether prompt changes made their AI feature better or worse.",
    approach:
      'Built a test set from real usage, LLM-graded and rule-based checks, and CI that blocks regressions before release.',
    result: 'Placeholder: e.g. "Shipped prompt updates weekly instead of monthly".',
    tags: ['Evals', 'TypeScript', 'CI'],
    draft: true,
  },
]

const webProjects: WebProject[] = [
  {
    title: "British Women's Group",
    description:
      'Website rebuild for a Bangkok community organization: faster, easier to update, and $200/year cheaper to host.',
    image: '/images/work/project-1.png',
    tags: ['Next.js', 'Tailwind'],
    link: 'https://bwgbangkok.org',
  },
  {
    title: 'Neilson Hays Library',
    description:
      "New fast frontend for Thailand's oldest English-language library, keeping their existing WordPress content.",
    image: '/images/work/project-2.png',
    tags: ['Next.js', 'Headless WordPress'],
    link: 'https://neilsonhayslibrary.org',
  },
  {
    title: 'ACT Counselors',
    description:
      'Multilingual site for a counseling practice, with a CMS staff use to manage content and translations.',
    image: '/images/work/project-3.png',
    tags: ['Next.js', 'Contentful'],
    link: 'https://actcounselors.org',
  },
]

const visibleAiProjects = aiProjects.filter(
  (project) => !project.draft || process.env.NODE_ENV !== 'production'
)

const Arrow = () => (
  <svg className='ml-1 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
  </svg>
)

const Tags = ({ tags }: { tags: string[] }) => (
  <div className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <span
        key={tag}
        className='rounded-full bg-aqua-blue/10 px-2.5 py-0.5 font-mono text-[11px] text-aqua-blue'>
        {tag}
      </span>
    ))}
  </div>
)

const Work: FunctionComponent = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 py-24'>
      {visibleAiProjects.length > 0 && (
        <>
          <p className='eyebrow pb-3'>Selected work</p>
          <h2 className='text-white'>AI projects</h2>
          <div className='grid gap-6 pt-12 lg:grid-cols-3'>
            {visibleAiProjects.map((project) => (
              <article
                key={project.title}
                className='flex flex-col rounded-xl border border-line bg-surface p-6'>
                {project.draft && (
                  <span className='mb-3 self-start rounded bg-yellow-400/15 px-2 py-0.5 font-mono text-[11px] text-yellow-300'>
                    Placeholder, hidden in production
                  </span>
                )}
                <h3 className='text-white'>{project.title}</h3>
                <dl className='space-y-3 pt-4 text-sm'>
                  {[
                    ['Problem', project.problem],
                    ['Approach', project.approach],
                    ['Result', project.result],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className='font-mono text-[11px] uppercase tracking-wider text-gray-500'>
                        {label}
                      </dt>
                      <dd className='text-gray-300'>{text}</dd>
                    </div>
                  ))}
                </dl>
                <div className='mt-auto pt-6'>
                  <Tags tags={project.tags} />
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center pt-4 text-sm'>
                      View project
                      <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      <h3 className={`text-white ${visibleAiProjects.length > 0 ? 'pt-20' : ''}`}>
        Earlier work: web development
      </h3>
      <p className='pt-1 text-sm text-gray-400'>
        Before focusing on AI, I built production websites for organizations in
        Southeast Asia.
      </p>
      <div className='grid gap-6 pt-8 md:grid-cols-3'>
        {webProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group overflow-hidden rounded-xl border border-line bg-surface hover:border-aqua-blue/60 hover:no-underline'>
            <div className='relative h-32 overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes='(min-width: 768px) 33vw, 100vw'
                className='object-cover opacity-80 transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='space-y-3 p-5'>
              <p className='text-sm font-medium text-white'>{project.title}</p>
              <p className='text-xs text-gray-400'>{project.description}</p>
              <Tags tags={project.tags} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Work
