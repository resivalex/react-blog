import React, { Component, Fragment } from 'react'
import ResumeContainer from './ResumeContainer'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  background:black;
`

interface Props {}

export default class Profile extends Component<Props> {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ResumeContainer />
      </Fragment>
    )
  }
}
