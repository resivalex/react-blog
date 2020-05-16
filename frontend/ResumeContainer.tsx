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
  const [locale, setLocale] = useState('ru')
  const [data, setData] = useState(null)

  if (data === null) {
    window
      .fetch('https://api.resivalex.com/resumes')
      .then((response) => {
        return response.json()
      })
      .then((resumes: ResumeTypeResponseItem[]) => {
        const data: ResumeType = _.find(resumes, (resume) => resume.locale === locale).lump_data
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
