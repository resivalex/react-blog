// @flow
import React, { Component } from 'react'
import ResumeContainer from './ResumeContainer'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}
  background:black;
`

type Props = {}

export default class Profile extends Component<Props> {
  render() {
    return <ResumeContainer />
  }
}
