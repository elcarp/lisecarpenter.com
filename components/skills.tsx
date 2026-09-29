import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faComments,
  faDatabase,
  faDiagramProject,
  faFlaskVial,
  faLayerGroup,
  faPlug,
} from '@fortawesome/free-solid-svg-icons'

interface Service {
  icon: IconDefinition
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: faComments,
    title: 'LLM-powered apps',
    description:
      'Chat assistants, copilots and AI features built into your product, with good prompts, structured outputs and a UX people actually use.',
  },
  {
    icon: faDatabase,
    title: 'RAG & knowledge systems',
    description:
      'Let AI answer from your documents, help center or database, with accurate retrieval and answers that cite their sources.',
  },
  {
    icon: faDiagramProject,
    title: 'AI agents & automation',
    description:
      'Agents that call your tools and APIs to handle multi-step work like triaging tickets, processing documents or drafting reports.',
  },
  {
    icon: faFlaskVial,
    title: 'Evals & reliability',
    description:
      'Test suites, guardrails and monitoring so you know when the AI is right and catch regressions before your customers do.',
  },
  {
    icon: faPlug,
    title: 'AI integration',
    description:
      'Add AI to what you already have. I work inside existing codebases and connect models to your CRM, CMS or internal tools.',
  },
  {
    icon: faLayerGroup,
    title: 'Full-stack delivery',
    description:
      'From prototype to production: frontend, backend, deployment and cost control, without handing off between several contractors.',
  },
]

const Skills: FunctionComponent = () => {
  return (
    <div className='mx-auto max-w-6xl px-5 py-24'>
      <p className='eyebrow pb-3'>Services</p>
      <h2 className='max-w-2xl text-white'>
        From &ldquo;could AI help here?&rdquo; to a shipped feature
      </h2>
      <div className='grid gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <div
            key={service.title}
            className='rounded-xl border border-line bg-surface p-6 transition-colors hover:border-aqua-blue/60'>
            <FontAwesomeIcon
              icon={service.icon}
              className='h-5 w-5 text-aqua-blue'
            />
            <h3 className='pt-4 text-white'>{service.title}</h3>
            <p className='pt-2 text-sm text-gray-400'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
