'use client'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'
import { SelectGroup } from '@radix-ui/react-select'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils'


const SubjectFilter = () => {

  const searchParams = useSearchParams();

  const query = searchParams.get('subject') || '';
  const pathName = usePathname();
  const router = useRouter();

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    if(subject && subject !== 'all') {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'subject',
        value: subject,
      });
      router.push(newUrl, {scroll: false});
    }
    else {
      if(pathName == '/companions') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['subject'],
        });
        router.push(newUrl, {scroll: false});
      }
    }
  }, [subject]);

  return (
    <div>
      <Select value={subject} onValueChange={setSubject}>
        <SelectTrigger className="w-[160px] capitalize border-black rounded-lg">
          <SelectValue placeholder='Select a subject' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Subjects</SelectLabel>
            <SelectItem value="all" key="all" className="capitalize">All Subjects</SelectItem>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject} className="capitalize">
                {subject}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SubjectFilter