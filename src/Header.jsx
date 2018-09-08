// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderBlock = styled.div`
  background-color: black;
  padding: 20px;
  margin: 0;
`

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  display: inline-block;
`

const Spacer = styled.div`
  display: inline-block;
  width: 10px;
`

const Title = styled.div`
  color: white;
  font-size: 36px;
  font-weight: bold;
  display: inline-block;
`

type Props = {}

export default class Header extends Component<Props> {
  render() {
    return (
      <HeaderBlock>
        <Circle />
        <Spacer />
        <Title>Ivan Reshetnikov</Title>
      </HeaderBlock>
    )
  }
}
