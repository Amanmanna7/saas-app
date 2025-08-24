import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic='Neural Network of the Brain'
          subject='science'
          duration={45}
          color="#fadedd"
        />
        <CompanionCard 
          id="456"
          name="Countsy the Number Cruncher"
          topic='Derivatives and Integrals'
          subject='math'
          duration={30}
          color="#d9f99d"
        />
        <CompanionCard 
          id="789"
          name="Verba the Vocabulary Builder"
          topic='English Literature'
          subject='language'
          duration={30}
          color="#ed9bf9"
        />
      </section>
      <section className='home-section'>
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page