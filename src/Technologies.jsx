// @flow
import React, { Component } from 'react'
import Tags from './Tags'

const skills = ['Ruby on Rails', 'Slim template engine', 'CoffeeScript', 'SASS']

type Props = {}

export default class Technologies extends Component<Props> {
  render() {
    return <Tags items={skills} />
  }
}
