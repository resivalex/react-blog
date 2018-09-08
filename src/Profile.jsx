// @flow
import React, { Component, Fragment } from 'react'
import Header from './Header'
import Skills from './Skills'
import Technologies from './Technologies'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { SectionHeader, Link } from './Thema'

injectGlobal`
  ${reset}
`

const Container = styled.div`
  padding: 20px;
`

const githubUrl = 'https://github.com/resivalex'

type Props = {}

export default class Profile extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionHeader>Known technologies</SectionHeader>
          <Technologies />
          <SectionHeader>Skills</SectionHeader>
          <Skills />
          <SectionHeader>Links</SectionHeader>
          <Link href={githubUrl}>{githubUrl}</Link>
        </Container>
      </Fragment>
    )
  }
}
