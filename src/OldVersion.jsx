// @flow
import React, { Component, Fragment } from 'react'
import Header from './Header'
import Skills from './Skills'
import Technologies from './Technologies'
import { Container, SectionHeader, Link } from './Thema'

const githubUrl = 'https://github.com/resivalex'

type Props = {}

export default class OldVersion extends Component<Props> {
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
