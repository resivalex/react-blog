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

class StraightLink extends Component<{ link: string }> {
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
    return (
      <Wrapper>
        <Hyphen>—</Hyphen>
        {this.props.children}
      </Wrapper>
    )
  }
}

const Line = styled.div`
  padding-bottom: 6px;
`

const HalfLine = styled.div`
  height: 6px;
`

const RadioGroup = styled.div`
  display: inline-flex;
`

const div: any = styled.div
const RadioItem = div`
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
    border-color: black;
    border: solid 1px black;
  padding: 5px;
  &:not(:last-of-type) {
    border-right: solid 1px black;
  }
  &:last-of-type {
    border-radius: 0 15px 15px 0;
    padding-right: 10px;
  }
  &:first-of-type {
    border-radius: 15px 0 0 15px;
    padding-left: 10px;
  }
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
  HalfLine,
  RadioGroup,
  RadioItem
}
