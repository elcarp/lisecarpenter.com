import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCat,
  faOm,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons'

const stack = [
  'Claude',
  'OpenAI',
  'Python',
  'TypeScript',
  'Next.js',
  'React',
  'LangGraph',
  'MCP',
  'pgvector',
  'Pinecone',
  'Postgres',
  'Vercel',
]

const Tech: FunctionComponent = () => {
  return (
    <div className='border-y border-line bg-surface/50'>
      <div className='mx-auto max-w-6xl px-5 py-12'>
        <p className='eyebrow pb-5 text-center'>Tools I build with</p>
        <ul className='flex flex-wrap justify-center gap-2'>
          {stack.map((tool) => (
            <li
              key={tool}
              className='rounded-full border border-line px-3 py-1 font-mono text-xs text-gray-300'>
              {tool}
            </li>
          ))}
        </ul>
        <p className='flex items-center justify-center gap-3 pt-6 text-xs text-gray-500'>
          Also powered by
          <FontAwesomeIcon icon={faPizzaSlice} className='h-3.5 w-3.5 text-aqua-blue' title='Pizza' />
          <FontAwesomeIcon icon={faCat} className='h-3.5 w-3.5 text-aqua-blue' title='Cats' />
          <FontAwesomeIcon icon={faBook} className='h-3.5 w-3.5 text-aqua-blue' title='Books' />
          <FontAwesomeIcon icon={faOm} className='h-3.5 w-3.5 text-aqua-blue' title='Yoga' />
        </p>
      </div>
    </div>
  )
}

export default Tech
