import React, { Component, Fragment } from 'react'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import translateFunction from './translateFunction'

const phrases = {
  en: {
    present_time: 'Present',
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    november: 'November',
    october: 'October',
    december: 'December',
    year: 'year |||| years',
    month: 'month |||| months'
  },
  ru: {
    present_time: 'по настоящее время',
    january: 'Январь',
    february: 'Февраль',
    march: 'Март',
    april: 'Апрель',
    may: 'Май',
    june: 'Июнь',
    july: 'Июль',
    august: 'Август',
    september: 'Сентябрь',
    november: 'Ноябрь',
    october: 'Октябрь',
    december: 'Декабрь',
    year: 'год |||| года |||| лет',
    month: 'месяц |||| месяца |||| месяцев'
  }
}

function tMonth(index: number, locale: string): string {
  return translateFunction(
    phrases,
    locale
  )(
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

interface Props {
  locale: string
  from: string
  to: string
}

export default class Period extends Component<Props> {
  render() {
    const { locale, from, to } = this.props
    const t = translateFunction(phrases, locale)

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
              {durationYears > 0 &&
                `${durationYears} ${t('year', { smart_count: durationYears })} `}
              {duratoinMonths > 0 &&
                `${duratoinMonths} ${t('month', { smart_count: duratoinMonths })}`}
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
