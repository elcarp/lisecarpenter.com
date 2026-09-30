import { FunctionComponent } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero: FunctionComponent = () => {
  return (
    <div className='hero-grid border-b border-line'>
      <div className='mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:py-32 lg:grid-cols-2'>
        <div>
          <p className='eyebrow pb-4'>AI Engineer · Hong Kong &amp; Bangkok</p>
          <h1 className='text-white md:text-6xl'>
            I build AI features that work in production.
          </h1>
          <p className='max-w-xl pt-6 text-lg text-gray-300'>
            I help teams turn AI ideas into reliable products: assistants
            grounded in your own data, agents that automate real workflows, and
            evals that tell you whether any of it works.
          </p>
          <div className='h-8 pt-4 font-mono text-sm text-aqua-blue'>
            <span className='text-gray-500'>$ building </span>
            <TypeAnimation
              sequence={[
                'LLM-powered apps',
                2000,
                'RAG over your documents',
                2000,
                'AI agents & automations',
                2000,
                'evals & guardrails',
                2000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className='flex flex-wrap gap-3 pt-8'>
            <a href='#contact' className='btn-primary'>
              Book a free intro call
            </a>
            <a href='#work' className='btn-secondary'>
              See my work
            </a>
          </div>
        </div>

        {/* Illustrative agent trace, purely decorative */}
        <div
          aria-hidden='true'
          className='hidden rounded-xl border border-line bg-surface/90 font-mono text-xs leading-relaxed shadow-2xl shadow-aqua-blue/5 lg:block'>
          <div className='flex gap-1.5 border-b border-line px-4 py-3'>
            <span className='h-2.5 w-2.5 rounded-full bg-line' />
            <span className='h-2.5 w-2.5 rounded-full bg-line' />
            <span className='h-2.5 w-2.5 rounded-full bg-line' />
          </div>
          <div className='space-y-2 p-5 text-gray-400'>
            <p>
              <span className='text-aqua-blue'>user</span> What&apos;s our
              refund policy for annual plans?
            </p>
            <p>
              <span className='text-purple-300'>→ tool</span>{' '}
              search_docs(&quot;refund annual plan&quot;)
            </p>
            <p className='pl-4 text-gray-500'>3 passages · 142ms</p>
            <p>
              <span className='text-purple-300'>→ tool</span>{' '}
              get_account(plan=&quot;annual&quot;)
            </p>
            <p>
              <span className='text-aqua-blue'>assistant</span> Annual plans can
              be refunded pro-rata within 30 days…{' '}
              <span className='text-gray-500'>[policy.md §4]</span>
            </p>
            <p className='border-t border-line pt-3 text-green-400'>
              ✓ eval: grounded · cited · 0.94
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
