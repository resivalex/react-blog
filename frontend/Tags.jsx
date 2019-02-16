// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const Spacer = styled.div`
  width: 8px;
  display: inline-block;
`

const Wrapper = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 4px 0;
`

const TagWrapper = styled.div`
  white-space: nowrap;
  padding: 3px 0;
`

const Tag = styled.div`
  display: inline-block;
  border: solid 1px black;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 16px;
`

type Props = {
  items: Array<string>
}

export default class Tags extends Component<Props> {
  render() {
    const { items } = this.props

    return (
      <Wrapper>
        {_.map(items, (tag, index) => {
          return (
            <TagWrapper key={index}>
              <Tag>{tag}</Tag>
              {index !== items.length - 1 && <Spacer />}
            </TagWrapper>
          )
        })
        }
      </Wrapper>
    )
  }
}
