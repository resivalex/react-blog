// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const Icon = styled.div`
  font-size: 20px;
`

const Spacer = styled.div`
  width: 8px;
`

type Props = {
  children: any,
  name: string
}

export default class GlyphIconWrapper extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <Icon className={`glyphicon glyphicon-${this.props.name}`} />
        <Spacer />
        <div>{this.props.children}</div>
      </Wrapper>
    )
  }
}
