// @flow
import React, { Component, Fragment } from 'react'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import translateFuncForLocale from './translateFuncForLocale'

function tMonth(index: number, locale: string): string {
  return translateFuncForLocale(locale)(
    [
      '0 index. start from 1',
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'november',
      'october',
      'december'
    ][index] || 'wrong index'
  )
}

type Props = {
  locale: string,
  from: string,
  to: string
}

export default class Period extends Component<Props> {
  render() {
    const { locale, from, to } = this.props
    const t = translateFuncForLocale(locale)

    const fromYear = parseInt(from.split('.')[0])
    const fromMonth = parseInt(from.split('.')[1])
    const toYear = to === 'now' ? new Date().getFullYear() : parseInt(to.split('.')[0])
    const toMonth = to === 'now' ? new Date().getMonth() + 1 : parseInt(to.split('.')[1])
    const duration = (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1
    const durationYears = (duration - (duration % 12)) / 12
    const duratoinMonths = duration % 12

    return (
      <GlyphIconWrapper name="time">
        <Term
          title={
            <Fragment>
              {durationYears > 0 && `${durationYears} ${t('year', { smart_count: durationYears })} `}
              {duratoinMonths > 0 && `${duratoinMonths} ${t('month', { smart_count: duratoinMonths })}`}
            </Fragment>
          }
          description={
            <Fragment>
              {tMonth(fromMonth, locale)} {fromYear} -{' '}
              {to === 'now' ? t('present_time') : `${tMonth(toMonth, locale)} ${toYear}`}
            </Fragment>
          }
        />
      </GlyphIconWrapper>
    )
  }
}
