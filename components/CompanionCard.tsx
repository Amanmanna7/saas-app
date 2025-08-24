import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CompanionCardProps {
  id: string
  name: string
  topic: string
  subject: string
  duration: number
  color: string
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
  return (
    <article
      className="companion-card"
      style={{ backgroundColor: color }}
    >
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark'>
            <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
        </button>
      </div>
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p className='text-sm text-gray-500'>{topic}</p>
      <div className='flex items-center gap-3'>
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className='text-sm text-gray-500'>{duration} mins</p>
      </div>
      <Link href={`/companions/${id}`} className='w-full'>
        <button className='btn-primary w-full justify-center'>
            Launch Lesson
        </button>
      </Link>
    </article>
  )
}

export default CompanionCard