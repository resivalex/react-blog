// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`

const SectionHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 30px 0 20px;
`

const Link = styled.a`
  color: black;
  text-decoration: underline;
  &:hover {
    color: black;
  }
`

class Paragraph extends Component<{ children: any }> {
  render() {
    const Spacer = styled.div`
      width: 20px;
      min-width: 20px;
    `

    const Wrapper = styled.div`
      font-size: 18px;
      display: flex;
    `

    return (
      <Wrapper>
        <Spacer />
        <div>{this.props.children}</div>
      </Wrapper>
    )
  }
}

class StraightLink extends Component<Object> {
  render() {
    const { link } = this.props
    const props = _.omit(this.props, 'link')

    return (
      <Link {...props} href={link} target="_blank">
        {link}
      </Link>
    )
  }
}

const ListHeader = styled.div`
  font-weight: bold;
  padding: 16px 0 4px;
`

class ListItem extends Component<{ children: any }> {
  render() {
    const Wrapper = styled.div`
      padding-top: 6px;
    `
    const Hyphen = styled.span`
      padding: 0 10px;
    `
    return <Wrapper><Hyphen>—</Hyphen>{this.props.children}</Wrapper>
  }
}

const Line = styled.div`
  padding-bottom: 6px;
`

const HalfLine = styled.div`
  height: 6px;
`

export {
  Container,
  SectionHeader,
  Link,
  StraightLink,
  Paragraph,
  ListHeader,
  ListItem,
  Line,
  HalfLine
}
