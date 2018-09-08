// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Tag } from './Thema'

const Spacer = styled.div`
  width: 8px;
  display: inline-block;
`

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
`

type Props = {
  items: Array<string>
}

export default class Tags extends Component<Props> {
  render() {
    const { items } = this.props

    return _.map(items, (tag, index) => {
      return (
        <Wrapper key={index}>
          <Tag>{tag}</Tag>
          {index !== items.length - 1 && <Spacer />}
        </Wrapper>
      )
    })
  }
}
