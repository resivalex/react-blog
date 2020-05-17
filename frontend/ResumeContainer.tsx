import React, { useState } from 'react'
import Resume from './Resume'
import _ from 'lodash'
import { LocaleType, ResumeType } from './types'

interface ResumeTypeResponseItem {
  id: number
  locale: LocaleType
  lump_data: ResumeType
}

export default function ResumeContainer() {
  const [locale, setLocale] = useState(
    window.location.pathname === '/en' || window.location.pathname === '/en/' ? 'en' : 'ru'
  )
  const [data, setData] = useState<ResumeType | null>(null)

  if (data === null) {
    window
      .fetch('https://api.resivalex.com/resumes')
      .then((response) => {
        return response.json()
      })
      .then((resumes: ResumeTypeResponseItem[]) => {
        const resume: ResumeTypeResponseItem | undefined = _.find(
          resumes,
          (resume) => resume.locale === locale
        )
        const data: ResumeType | null = resume ? resume.lump_data : null
        setData(data)
      })
  }

  return (
    <Resume
      data={data}
      locale={locale === 'ru' ? 'ru' : 'en'}
      onChangeLocale={(locale) => {
        setLocale(locale)
        setData(null)
      }}
    />
  )
}
