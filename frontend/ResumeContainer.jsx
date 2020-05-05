// @flow
import React, { useState } from 'react'
import Resume from './Resume'
import _ from 'lodash'

export default function ResumeContainer() {
  const [locale, setLocale] = useState('ru')
  const [data, setData] = useState(null)

  if (data === null) {
    window
      .fetch('https://api.resivalex.com/resumes')
      .then((response) => {
        return response.json()
      })
      .then((resumes) => {
        const data = _.find(resumes, (resume) => resume.locale === locale).lump_data
        setData(data)
      })
  }

  return data ? (
    <Resume
      data={data}
      onChangeLocale={(locale) => {
        setLocale(locale)
        setData(null)
      }}
    />
  ) : (
    'Loading...'
  )
}
