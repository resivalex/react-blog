// @flow
import React, { Component } from 'react'
import Tags from './Tags'

const skills = [
  'JavaScript',
  'Haskell',
  'TypeScript',
  'Angular',
  'SQL',
  'Stash',
  'JIRA',
  'Confluence',
  'SVN',
  'Git',
  'C++',
  'Boost',
  'Thread',
  'WebSocket',
  'JSON',
  'GitHub',
  'Bitbucket',
  'Web API'
]

type Props = {}

export default class Skills extends Component<Props> {
  render() {
    return <Tags items={skills} />
  }
}
