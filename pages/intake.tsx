import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { jsPDF } from 'jspdf'

const siteTitle = 'Website Content Intake | Lise Carpenter'
const siteDescription =
  'Complete this questionnaire to help us gather everything needed to design and build your website efficiently.'

interface FormData {
  // Business Overview
  businessName: string
  tagline: string
  shortDescription: string
  longDescription: string
  industry: string
  yearsInOperation: string
  primaryLocations: string
  websiteGoals: string[]

  // Target Audience
  primaryAudience: string
  secondaryAudience: string
  customerProblems: string
  desiredAction: string
  geographicFocus: string

  // Brand & Messaging
  brandVoice: string
  brandAdjectives: string
  missionStatement: string
  values: string
  keyMessages: string

  // Pages
  selectedPages: string[]
  additionalPages: string

  // Services/Products
  servicesList: string
  servicesDescriptions: string
  pricingVisibility: string
  processDescription: string
  deliverables: string
  serviceFaqs: string

  // Visual Assets
  hasLogo: boolean
  hasBrandGuidelines: boolean
  brandColors: string
  brandFonts: string
  photoNotes: string
  videoNotes: string

  // Testimonials
  testimonials: string
  clientLogos: string
  caseStudies: string
  awards: string

  // Functional Requirements
  functionalRequirements: string[]
  integrations: string

  // SEO
  targetKeywords: string
  competitors: string
  locationSeo: string
  hasPrivacyPolicy: boolean
  cookieConsent: string

  // Inspiration
  websitesLiked: string
  websitesDisliked: string
  designPreferences: string

  // Logistics
  launchDate: string
  decisionMaker: string
  hostingPreference: string
  domainStatus: string
  maintenanceNeeded: string

  // Final
  additionalNotes: string
  name: string
  email: string
}

const initialFormData: FormData = {
  businessName: '',
  tagline: '',
  shortDescription: '',
  longDescription: '',
  industry: '',
  yearsInOperation: '',
  primaryLocations: '',
  websiteGoals: [],
  primaryAudience: '',
  secondaryAudience: '',
  customerProblems: '',
  desiredAction: '',
  geographicFocus: '',
  brandVoice: '',
  brandAdjectives: '',
  missionStatement: '',
  values: '',
  keyMessages: '',
  selectedPages: [],
  additionalPages: '',
  servicesList: '',
  servicesDescriptions: '',
  pricingVisibility: '',
  processDescription: '',
  deliverables: '',
  serviceFaqs: '',
  hasLogo: false,
  hasBrandGuidelines: false,
  brandColors: '',
  brandFonts: '',
  photoNotes: '',
  videoNotes: '',
  testimonials: '',
  clientLogos: '',
  caseStudies: '',
  awards: '',
  functionalRequirements: [],
  integrations: '',
  targetKeywords: '',
  competitors: '',
  locationSeo: '',
  hasPrivacyPolicy: false,
  cookieConsent: '',
  websitesLiked: '',
  websitesDisliked: '',
  designPreferences: '',
  launchDate: '',
  decisionMaker: '',
  hostingPreference: '',
  domainStatus: '',
  maintenanceNeeded: '',
  additionalNotes: '',
  name: '',
  email: '',
}

const websiteGoalOptions = [
  'Generate leads',
  'Sell products/services',
  'Accept bookings',
  'Build credibility',
  'Provide information',
  'Build community',
]

const pageOptions = [
  'Home',
  'About',
  'Services / Products',
  'Contact',
  'Blog / Resources',
  'Pricing',
  'FAQ',
  'Testimonials / Reviews',
  'Portfolio / Case Studies',
  'Team',
  'Careers',
  'Legal (Privacy Policy, Terms)',
]

const functionalOptions = [
  'Contact form',
  'Email newsletter signup',
  'Online booking / calendar',
  'E-commerce',
  'Payment integration',
  'Multilingual support',
  'Login / dashboard',
]

const Intake: NextPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentSection, setCurrentSection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sections = [
    'Your Info',
    'Business Overview',
    'Target Audience',
    'Brand & Messaging',
    'Pages & Content',
    'Services / Products',
    'Visual Assets',
    'Testimonials',
    'Functionality',
    'SEO & Compliance',
    'Inspiration',
    'Logistics',
    'Final Notes',
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleCheckboxArrayChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof FormData] as string[]
      if (currentArray.includes(value)) {
        return { ...prev, [name]: currentArray.filter((item) => item !== value) }
      } else {
        return { ...prev, [name]: [...currentArray, value] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // You can replace this with your actual form submission endpoint
    try {
      const response = await fetch(
        'https://public.herotofu.com/v1/8e2e9d80-36a8-11ef-b65d-f35c9518deb4',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const exportToPdf = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const maxWidth = pageWidth - margin * 2
    let yPos = 20

    const addTitle = (text: string) => {
      if (yPos > 270) {
        doc.addPage()
        yPos = 20
      }
      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(101, 204, 204) // aqua-blue
      doc.text(text, margin, yPos)
      yPos += 10
    }

    const addField = (label: string, value: string | string[] | boolean) => {
      if (yPos > 270) {
        doc.addPage()
        yPos = 20
      }
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(100, 100, 100)
      doc.text(label, margin, yPos)
      yPos += 5

      doc.setFont('helvetica', 'normal')
      doc.setTextColor(50, 50, 50)

      let displayValue = ''
      if (typeof value === 'boolean') {
        displayValue = value ? 'Yes' : 'No'
      } else if (Array.isArray(value)) {
        displayValue = value.length > 0 ? value.join(', ') : '—'
      } else {
        displayValue = value || '—'
      }

      const lines = doc.splitTextToSize(displayValue, maxWidth)
      lines.forEach((line: string) => {
        if (yPos > 280) {
          doc.addPage()
          yPos = 20
        }
        doc.text(line, margin, yPos)
        yPos += 5
      })
      yPos += 5
    }

    // Header
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(255, 255, 255)
    doc.setFillColor(34, 34, 34) // grey
    doc.rect(0, 0, pageWidth, 40, 'F')
    doc.setTextColor(255, 255, 255)
    doc.text('Website Content Intake', margin, 25)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, 33)
    yPos = 50

    // Your Info
    addTitle('Contact Information')
    addField('Name', formData.name)
    addField('Email', formData.email)
    yPos += 5

    // Business Overview
    addTitle('Business Overview')
    addField('Business Name', formData.businessName)
    addField('Tagline', formData.tagline)
    addField('Short Description', formData.shortDescription)
    addField('Long Description', formData.longDescription)
    addField('Industry', formData.industry)
    addField('Years in Operation', formData.yearsInOperation)
    addField('Primary Locations', formData.primaryLocations)
    addField('Website Goals', formData.websiteGoals)
    yPos += 5

    // Target Audience
    addTitle('Target Audience')
    addField('Primary Audience', formData.primaryAudience)
    addField('Secondary Audience', formData.secondaryAudience)
    addField('Customer Problems/Needs', formData.customerProblems)
    addField('Desired Action (CTA)', formData.desiredAction)
    addField('Geographic Focus', formData.geographicFocus)
    yPos += 5

    // Brand & Messaging
    addTitle('Brand & Messaging')
    addField('Brand Voice', formData.brandVoice)
    addField('Brand Adjectives', formData.brandAdjectives)
    addField('Mission Statement', formData.missionStatement)
    addField('Values', formData.values)
    addField('Key Messages', formData.keyMessages)
    yPos += 5

    // Pages
    addTitle('Pages & Content')
    addField('Selected Pages', formData.selectedPages)
    addField('Additional Pages', formData.additionalPages)
    yPos += 5

    // Services/Products
    addTitle('Services / Products')
    addField('Services List', formData.servicesList)
    addField('Descriptions', formData.servicesDescriptions)
    addField('Pricing Visibility', formData.pricingVisibility)
    addField('Process', formData.processDescription)
    addField('Deliverables', formData.deliverables)
    addField('FAQs', formData.serviceFaqs)
    yPos += 5

    // Visual Assets
    addTitle('Visual Assets')
    addField('Has Logo', formData.hasLogo)
    addField('Has Brand Guidelines', formData.hasBrandGuidelines)
    addField('Brand Colors', formData.brandColors)
    addField('Brand Fonts', formData.brandFonts)
    addField('Photo Notes', formData.photoNotes)
    addField('Video Notes', formData.videoNotes)
    yPos += 5

    // Testimonials
    addTitle('Testimonials & Social Proof')
    addField('Testimonials', formData.testimonials)
    addField('Client Logos', formData.clientLogos)
    addField('Case Studies', formData.caseStudies)
    addField('Awards/Certifications', formData.awards)
    yPos += 5

    // Functional Requirements
    addTitle('Functional Requirements')
    addField('Features Needed', formData.functionalRequirements)
    addField('Integrations', formData.integrations)
    yPos += 5

    // SEO
    addTitle('SEO & Compliance')
    addField('Target Keywords', formData.targetKeywords)
    addField('Competitors', formData.competitors)
    addField('Location SEO', formData.locationSeo)
    addField('Has Privacy Policy', formData.hasPrivacyPolicy)
    addField('Cookie Consent', formData.cookieConsent)
    yPos += 5

    // Inspiration
    addTitle('Inspiration & References')
    addField('Websites Liked', formData.websitesLiked)
    addField('Websites Disliked', formData.websitesDisliked)
    addField('Design Preferences', formData.designPreferences)
    yPos += 5

    // Logistics
    addTitle('Logistics')
    addField('Launch Date', formData.launchDate)
    addField('Decision Maker', formData.decisionMaker)
    addField('Hosting Preference', formData.hostingPreference)
    addField('Domain Status', formData.domainStatus)
    addField('Maintenance Needed', formData.maintenanceNeeded)
    yPos += 5

    // Final Notes
    addTitle('Additional Notes')
    addField('Notes', formData.additionalNotes)

    // Save
    const fileName = formData.businessName
      ? `intake-${formData.businessName.toLowerCase().replace(/\s+/g, '-')}.pdf`
      : 'website-intake-questionnaire.pdf'
    doc.save(fileName)
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const inputClasses =
    'w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 focus:border-aqua-blue focus:outline-none focus:ring-1 focus:ring-aqua-blue'
  const labelClasses = 'block text-white mb-2 font-medium'
  const checkboxLabelClasses = 'flex items-center gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors'

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>{siteTitle}</title>
          <meta name='description' content={siteDescription} />
        </Head>
        <div className='min-h-screen bg-grey flex items-center justify-center px-5'>
          <div className='text-center max-w-lg'>
            <div className='w-20 h-20 bg-aqua-blue/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg
                className='w-10 h-10 text-aqua-blue'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h1 className='text-white text-3xl font-bold mb-4'>Thank you!</h1>
            <p className='text-gray-400 mb-8'>
              Your questionnaire has been submitted successfully. I'll review everything
              and get back to you within 1-2 business days to confirm next steps and timelines.
            </p>
            <a
              href='/'
              className='inline-block bg-aqua-blue text-white px-6 py-3 rounded-lg hover:bg-transparent border border-aqua-blue hover:text-aqua-blue transition-colors'>
              Back to homepage
            </a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' content={siteDescription} />
        <link rel='icon' href='/lc-favicon.png' />
      </Head>

      <div className='min-h-screen bg-grey py-12 px-5'>
        <div className='max-w-3xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-white text-3xl md:text-4xl font-bold mb-4'>
              Website Content Intake
            </h1>
            <p className='text-gray-400 max-w-xl mx-auto'>
              This questionnaire helps gather everything needed to design and build your
              website efficiently. You don't need to have everything perfect—drafts are fine.
            </p>
          </div>

          {/* Progress Bar */}
          <div className='mb-8'>
            <div className='flex justify-between text-sm text-gray-500 mb-2'>
              <span>
                Section {currentSection + 1} of {sections.length}
              </span>
              <span>{sections[currentSection]}</span>
            </div>
            <div className='h-2 bg-zinc-800 rounded-full overflow-hidden'>
              <div
                className='h-full bg-aqua-blue transition-all duration-300'
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Section Navigation Pills */}
          <div className='flex flex-wrap gap-2 mb-8'>
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => setCurrentSection(index)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${index === currentSection
                  ? 'bg-aqua-blue text-white'
                  : index < currentSection
                    ? 'bg-aqua-blue/20 text-aqua-blue'
                    : 'bg-zinc-800 text-gray-500 hover:text-gray-300'
                  }`}>
                {section}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className='bg-zinc-900 rounded-xl p-6 md:p-8 mb-6'>
              {/* Section 0: Your Info */}
              {currentSection === 0 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Your Information</h2>
                  <div>
                    <label className={labelClasses}>Your Name *</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Section 1: Business Overview */}
              {currentSection === 1 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Business Overview</h2>
                  <div>
                    <label className={labelClasses}>Business Name (exact legal/brand name)</label>
                    <input
                      type='text'
                      name='businessName'
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Tagline or One-Line Description</label>
                    <input
                      type='text'
                      name='tagline'
                      value={formData.tagline}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., "Helping businesses grow online"'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Short Description (2-3 sentences)</label>
                    <textarea
                      name='shortDescription'
                      value={formData.shortDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Long Description / Story (1-2 paragraphs)</label>
                    <textarea
                      name='longDescription'
                      value={formData.longDescription}
                      onChange={handleInputChange}
                      rows={5}
                      className={inputClasses}
                    />
                  </div>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className={labelClasses}>Industry / Niche</label>
                      <input
                        type='text'
                        name='industry'
                        value={formData.industry}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Years in Operation</label>
                      <input
                        type='text'
                        name='yearsInOperation'
                        value={formData.yearsInOperation}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses}>Primary Location(s)</label>
                    <input
                      type='text'
                      name='primaryLocations'
                      value={formData.primaryLocations}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Website Goals (select all that apply)</label>
                    <div className='grid md:grid-cols-2 gap-3 mt-2'>
                      {websiteGoalOptions.map((goal) => (
                        <label key={goal} className={checkboxLabelClasses}>
                          <input
                            type='checkbox'
                            checked={formData.websiteGoals.includes(goal)}
                            onChange={() => handleCheckboxArrayChange('websiteGoals', goal)}
                            className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                          />
                          {goal}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 2: Target Audience */}
              {currentSection === 2 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Target Audience</h2>
                  <div>
                    <label className={labelClasses}>Primary Audience (who is this site for?)</label>
                    <textarea
                      name='primaryAudience'
                      value={formData.primaryAudience}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='Describe your ideal customer or visitor'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Secondary Audience (if any)</label>
                    <textarea
                      name='secondaryAudience'
                      value={formData.secondaryAudience}
                      onChange={handleInputChange}
                      rows={2}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Typical Customer Problems or Needs</label>
                    <textarea
                      name='customerProblems'
                      value={formData.customerProblems}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='What problems do your customers face that you solve?'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>What should visitors do on the site? (CTA)</label>
                    <input
                      type='text'
                      name='desiredAction'
                      value={formData.desiredAction}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Book a call, Buy a product, Sign up for newsletter'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Geographic Focus</label>
                    <select
                      name='geographicFocus'
                      value={formData.geographicFocus}
                      onChange={handleInputChange}
                      className={inputClasses}>
                      <option value=''>Select one...</option>
                      <option value='local'>Local</option>
                      <option value='regional'>Regional</option>
                      <option value='national'>National</option>
                      <option value='global'>Global</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Section 3: Brand & Messaging */}
              {currentSection === 3 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Brand & Messaging</h2>
                  <div>
                    <label className={labelClasses}>Brand Voice</label>
                    <input
                      type='text'
                      name='brandVoice'
                      value={formData.brandVoice}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Professional, friendly, bold, calm, playful'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>3-5 Brand Adjectives</label>
                    <input
                      type='text'
                      name='brandAdjectives'
                      value={formData.brandAdjectives}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Modern, trustworthy, innovative, approachable'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Mission Statement (if available)</label>
                    <textarea
                      name='missionStatement'
                      value={formData.missionStatement}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Values or Principles</label>
                    <textarea
                      name='values'
                      value={formData.values}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Key Messages You Want Visitors to Remember</label>
                    <textarea
                      name='keyMessages'
                      value={formData.keyMessages}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='What are the 2-3 most important things visitors should take away?'
                    />
                  </div>
                </div>
              )}

              {/* Section 4: Pages & Content */}
              {currentSection === 4 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Pages & Content</h2>
                  <div>
                    <label className={labelClasses}>Which pages do you need? (select all that apply)</label>
                    <div className='grid md:grid-cols-2 gap-3 mt-2'>
                      {pageOptions.map((page) => (
                        <label key={page} className={checkboxLabelClasses}>
                          <input
                            type='checkbox'
                            checked={formData.selectedPages.includes(page)}
                            onChange={() => handleCheckboxArrayChange('selectedPages', page)}
                            className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                          />
                          {page}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses}>Any additional pages not listed above?</label>
                    <textarea
                      name='additionalPages'
                      value={formData.additionalPages}
                      onChange={handleInputChange}
                      rows={2}
                      className={inputClasses}
                    />
                  </div>
                </div>
              )}

              {/* Section 5: Services/Products */}
              {currentSection === 5 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Services / Products</h2>
                  <p className='text-gray-400 text-sm mb-4'>Skip this section if not applicable.</p>
                  <div>
                    <label className={labelClasses}>List of Services/Products</label>
                    <textarea
                      name='servicesList'
                      value={formData.servicesList}
                      onChange={handleInputChange}
                      rows={4}
                      className={inputClasses}
                      placeholder='List each service or product on a new line'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Description for Each</label>
                    <textarea
                      name='servicesDescriptions'
                      value={formData.servicesDescriptions}
                      onChange={handleInputChange}
                      rows={5}
                      className={inputClasses}
                      placeholder='Provide brief descriptions for each service/product'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Pricing Visibility</label>
                    <select
                      name='pricingVisibility'
                      value={formData.pricingVisibility}
                      onChange={handleInputChange}
                      className={inputClasses}>
                      <option value=''>Select one...</option>
                      <option value='public'>Display prices publicly</option>
                      <option value='hidden'>Hide prices (contact for quote)</option>
                      <option value='partial'>Show some prices, hide others</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Process / How It Works</label>
                    <textarea
                      name='processDescription'
                      value={formData.processDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='Describe your process or how customers work with you'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Deliverables</label>
                    <textarea
                      name='deliverables'
                      value={formData.deliverables}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='What do customers receive?'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>FAQs per Service</label>
                    <textarea
                      name='serviceFaqs'
                      value={formData.serviceFaqs}
                      onChange={handleInputChange}
                      rows={4}
                      className={inputClasses}
                      placeholder='Common questions customers ask about your services'
                    />
                  </div>
                </div>
              )}

              {/* Section 6: Visual Assets */}
              {currentSection === 6 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Visual Assets</h2>
                  <div className='space-y-4'>
                    <label className={checkboxLabelClasses}>
                      <input
                        type='checkbox'
                        name='hasLogo'
                        checked={formData.hasLogo}
                        onChange={handleInputChange}
                        className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                      />
                      I have a logo (SVG/PNG preferred)
                    </label>
                    <label className={checkboxLabelClasses}>
                      <input
                        type='checkbox'
                        name='hasBrandGuidelines'
                        checked={formData.hasBrandGuidelines}
                        onChange={handleInputChange}
                        className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                      />
                      I have brand guidelines
                    </label>
                  </div>
                  <div>
                    <label className={labelClasses}>Brand Colors</label>
                    <input
                      type='text'
                      name='brandColors'
                      value={formData.brandColors}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Navy blue (#001f3f), Gold (#FFD700)'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Brand Fonts</label>
                    <input
                      type='text'
                      name='brandFonts'
                      value={formData.brandFonts}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Montserrat for headings, Open Sans for body'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Photos (team, office, product) - Notes</label>
                    <textarea
                      name='photoNotes'
                      value={formData.photoNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='Describe what photos you have or need. You can share files separately.'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Videos (promo, testimonials) - Notes</label>
                    <textarea
                      name='videoNotes'
                      value={formData.videoNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='Describe any videos you have or want to include'
                    />
                  </div>
                </div>
              )}

              {/* Section 7: Testimonials */}
              {currentSection === 7 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Testimonials & Social Proof</h2>
                  <div>
                    <label className={labelClasses}>Written Testimonials</label>
                    <textarea
                      name='testimonials'
                      value={formData.testimonials}
                      onChange={handleInputChange}
                      rows={5}
                      className={inputClasses}
                      placeholder='Paste any testimonials you have. Include client name/title if allowed.'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Logos of Past Clients/Partners</label>
                    <textarea
                      name='clientLogos'
                      value={formData.clientLogos}
                      onChange={handleInputChange}
                      rows={2}
                      className={inputClasses}
                      placeholder='List client/partner names whose logos we can display'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Case Studies</label>
                    <textarea
                      name='caseStudies'
                      value={formData.caseStudies}
                      onChange={handleInputChange}
                      rows={4}
                      className={inputClasses}
                      placeholder='Brief summaries of successful projects or client results'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Awards, Certifications, Press Mentions</label>
                    <textarea
                      name='awards'
                      value={formData.awards}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                    />
                  </div>
                </div>
              )}

              {/* Section 8: Functional Requirements */}
              {currentSection === 8 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Functional Requirements</h2>
                  <div>
                    <label className={labelClasses}>What features do you need? (select all that apply)</label>
                    <div className='grid md:grid-cols-2 gap-3 mt-2'>
                      {functionalOptions.map((feature) => (
                        <label key={feature} className={checkboxLabelClasses}>
                          <input
                            type='checkbox'
                            checked={formData.functionalRequirements.includes(feature)}
                            onChange={() =>
                              handleCheckboxArrayChange('functionalRequirements', feature)
                            }
                            className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                          />
                          {feature}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses}>Integrations (CRM, analytics, email tools, etc.)</label>
                    <textarea
                      name='integrations'
                      value={formData.integrations}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='e.g., Mailchimp, Google Analytics, HubSpot, Calendly'
                    />
                  </div>
                </div>
              )}

              {/* Section 9: SEO & Compliance */}
              {currentSection === 9 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>SEO & Compliance</h2>
                  <div>
                    <label className={labelClasses}>Target Keywords (if known)</label>
                    <textarea
                      name='targetKeywords'
                      value={formData.targetKeywords}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='What search terms should your site rank for?'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Competitors' Websites</label>
                    <textarea
                      name='competitors'
                      value={formData.competitors}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='URLs of competitor websites we should be aware of'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Location-Based SEO Needs</label>
                    <input
                      type='text'
                      name='locationSeo'
                      value={formData.locationSeo}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., "Rank for web designer in Bangkok"'
                    />
                  </div>
                  <div className='space-y-4'>
                    <label className={checkboxLabelClasses}>
                      <input
                        type='checkbox'
                        name='hasPrivacyPolicy'
                        checked={formData.hasPrivacyPolicy}
                        onChange={handleInputChange}
                        className='w-5 h-5 rounded bg-zinc-800 border-zinc-700 text-aqua-blue focus:ring-aqua-blue'
                      />
                      I have a Privacy Policy ready
                    </label>
                  </div>
                  <div>
                    <label className={labelClasses}>Cookie Consent Requirements</label>
                    <input
                      type='text'
                      name='cookieConsent'
                      value={formData.cookieConsent}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='Any specific GDPR or cookie compliance needs?'
                    />
                  </div>
                </div>
              )}

              {/* Section 10: Inspiration */}
              {currentSection === 10 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Inspiration & References</h2>
                  <div>
                    <label className={labelClasses}>Websites You Like (and why)</label>
                    <textarea
                      name='websitesLiked'
                      value={formData.websitesLiked}
                      onChange={handleInputChange}
                      rows={4}
                      className={inputClasses}
                      placeholder='Share URLs and what you like about each (design, layout, features, etc.)'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Websites You Dislike (and why)</label>
                    <textarea
                      name='websitesDisliked'
                      value={formData.websitesDisliked}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      placeholder='What should we avoid?'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Design Preferences</label>
                    <input
                      type='text'
                      name='designPreferences'
                      value={formData.designPreferences}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Light/dark theme, minimal, bold, colorful, corporate'
                    />
                  </div>
                </div>
              )}

              {/* Section 11: Logistics */}
              {currentSection === 11 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Logistics</h2>
                  <div>
                    <label className={labelClasses}>Desired Launch Date</label>
                    <input
                      type='text'
                      name='launchDate'
                      value={formData.launchDate}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., March 2026, ASAP, Flexible'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Internal Reviewer / Decision-Maker</label>
                    <input
                      type='text'
                      name='decisionMaker'
                      value={formData.decisionMaker}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='Who will be reviewing and approving the work?'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Hosting Preference (if any)</label>
                    <input
                      type='text'
                      name='hostingPreference'
                      value={formData.hostingPreference}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Vercel, Netlify, existing hosting, no preference'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Domain Name Status</label>
                    <input
                      type='text'
                      name='domainStatus'
                      value={formData.domainStatus}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder='e.g., Already own example.com, need to purchase, need help'
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Ongoing Maintenance Needed?</label>
                    <select
                      name='maintenanceNeeded'
                      value={formData.maintenanceNeeded}
                      onChange={handleInputChange}
                      className={inputClasses}>
                      <option value=''>Select one...</option>
                      <option value='yes'>Yes, I need ongoing support</option>
                      <option value='no'>No, just the initial build</option>
                      <option value='maybe'>Maybe, let's discuss</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Section 12: Final Notes */}
              {currentSection === 12 && (
                <div className='space-y-6'>
                  <h2 className='text-white text-2xl font-semibold mb-6'>Final Notes</h2>
                  <div>
                    <label className={labelClasses}>Anything else we should know?</label>
                    <textarea
                      name='additionalNotes'
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={6}
                      className={inputClasses}
                      placeholder='Share any other details, concerns, or questions you have'
                    />
                  </div>
                  <div className='bg-zinc-800 rounded-lg p-4 mt-6'>
                    <h3 className='text-white font-medium mb-3'>Before submitting, please note:</h3>
                    <ul className='text-gray-400 text-sm space-y-2'>
                      <li>• You can share files (logo, photos, documents) via email after submitting</li>
                      <li>• Drafts are fine—we can refine content together</li>
                      <li>• I'll review everything and respond within 1-2 business days</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className='flex justify-between'>
              <button
                type='button'
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded-lg transition-colors ${currentSection === 0
                  ? 'bg-zinc-800 text-gray-600 cursor-not-allowed'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}>
                ← Previous
              </button>

              {currentSection === sections.length - 1 ? (
                <div className='flex gap-3'>
                  <button
                    type='button'
                    onClick={exportToPdf}
                    className='px-6 py-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2'>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    Export PDF
                  </button>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='px-8 py-3 rounded-lg bg-aqua-blue text-white hover:bg-transparent border border-aqua-blue hover:text-aqua-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                    {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
                  </button>
                </div>
              ) : (
                <button
                  type='button'
                  onClick={nextSection}
                  className='px-6 py-3 rounded-lg bg-aqua-blue text-white hover:bg-transparent border border-aqua-blue hover:text-aqua-blue transition-colors'>
                  Next →
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Intake

