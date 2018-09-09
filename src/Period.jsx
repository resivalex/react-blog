// @flow
import React, { Component, Fragment } from 'react'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'

function tMonth(index: number): string {
  return (
    [
      '0 index. start from 1',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'October',
      'November'
    ][index] || 'wrong index'
  )
}

type Props = {
  from: string,
  to: string
}

export default class Period extends Component<Props> {
  render() {
    const { from, to } = this.props

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
              {durationYears > 0 && `${durationYears} year${durationYears > 1 ? 's' : ''} `}
              {duratoinMonths > 0 && `${duratoinMonths} month${duratoinMonths > 1 ? 's' : ''}`}
            </Fragment>
          }
          description={
            <Fragment>
              {tMonth(fromMonth)} {fromYear} -{' '}
              {to === 'now' ? 'Now' : `${tMonth(toMonth)} ${toYear}`}
            </Fragment>
          }
        />
      </GlyphIconWrapper>
    )
  }
}
