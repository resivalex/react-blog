// @flow
import React, { Component, Fragment } from 'react'
import Header from './Header'
import styled from 'styled-components'
import {
  Container,
  SectionHeader,
  StraightLink,
  Paragraph,
  ListHeader,
  ListItem,
  Line,
  HalfLine
} from './Thema'
import Period from './Period'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import Tags from './Tags'

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

type Props = {}

export default class Resume extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          <SectionHeader>About me</SectionHeader>
          <Paragraph>
            <Line>
              I like writing beautiful and understandable code, have interest to new technologies
            </Line>
            <Line>I used to do olympiad programming at university</Line>
            <ListItem>
              <StraightLink link="http://acm.timus.ru/author.aspx?id=79813" />
            </ListItem>
            <ListItem>
              <StraightLink link="http://codeforces.com/profile/Reshetnikov_Ivan" />
            </ListItem>
            <HalfLine />
            <HalfLine />
            <Line>I have a good sense of algorithm effectiveness and usage</Line>
            <Line>
              GitHub profile <StraightLink link="https://github.com/resivalex" />
            </Line>
          </Paragraph>

          <SectionHeader>Ruby on Rails developer</SectionHeader>
          <Paragraph>
            <Period from="2016.12" to="now" />
            <GlyphIconWrapper name="map-marker">
              <Term
                title="OneRetarget.com"
                description={
                  <Fragment>
                    <StraightLink link="https://oneretarget.com" />
                    <HalfLine />
                    <div>A service to manage ad platforms at one account</div>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
            <ListHeader>Tasks</ListHeader>
            <ListItem>Creating tool to analize and manage ads</ListItem>
            <ListItem>
              Syncing statistics, moderation statuses. Implementation new formats. Error handling
            </ListItem>
            <ListItem>Discusing implementation strategies. Code Review</ListItem>
            <ListItem>System deploy. Reserve dumps. System health status monitoring</ListItem>
            <ListHeader>Archivements</ListHeader>
            <ListItem>
              Adapt API in such way it's possible to use for external users and frontend
            </ListItem>
            <ListItem>Sync and display ad performance from Yandex.Metrica</ListItem>
            <ListItem>Add section for detection problem in the system</ListItem>
            <ListItem>Made interactive widgets: week schedule, mass copying, ad preview</ListItem>
            <ListItem>Migrate frontend from CoffeeScript and jQuery to ES6 and React</ListItem>
            <ListItem>Fix layout and use single style across user account</ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 5',
                'PostgreSQL',
                'Slim',
                'RSpec',
                'Cucumber',
                'Capybara',
                'Docker',
                'Capistrano',
                'Trailblazer',
                'Queue',
                'API VK',
                'myTarget',
                'Facebook',
                'AdWords',
                'Metrica',
                'React.js',
                'ES6',
                'SASS',
                'BEM',
                'Webpacker',
                'npm',
                'styled-components',
                'Redux',
                'Flow'
              ]}
            />
          </Paragraph>

          <SectionHeader>Ruby on Rails developer</SectionHeader>
          <Paragraph>
            <Period from="2016.04" to="2016.11" />
            <GlyphIconWrapper name="map-marker">
              <Term
                title="Lakehouse"
                description={
                  <Fragment>
                    <StraightLink link="http://www.lakehouse.ru" />
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
            <ListItem>Company projects support</ListItem>
            <ListItem>Developing company's projects</ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 4',
                'RSpec',
                'Capybara',
                'AngularJS',
                'CoffeeScript',
                'PostgreSQL'
              ]}
            />
          </Paragraph>

          <SectionHeader>Self-Education</SectionHeader>
          <Paragraph>
            <Period from="2016.02" to="2016.04" />
            <ListItem>
              Rewrite diplom project{' '}
              <StraightLink link="https://github.com/resivalex/student-progress-on-rails" />
            </ListItem>
            <ListItem>
              Develop site for batut center{' '}
              <StraightLink link="https://github.com/resivalex/zaskok" />
            </ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails',
                'RSpec',
                'CoffeeScript',
                'AngularJS',
                'PHP',
                'HTML',
                'CoffeeScript',
                'SASS',
                'MySQL',
                'D3.js',
                'SVG'
              ]}
            />
          </Paragraph>

          <SectionHeader>Software developer</SectionHeader>
          <Paragraph>
            <Period from="2015.04" to="2016.01" />
            <GlyphIconWrapper name="map-marker">
              <Term
                title="Nasca Ltd."
                description={
                  <Fragment>
                    <StraightLink link="http://piratetrade.ru" />
                    <HalfLine />
                    <div>Exchange trading company</div>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
            <ListItem>
              Develop <StraightLink link="http://pskovskie.ru" /> from scratch
            </ListItem>
            <ListItem>
              Develop multi-component net application in a five-member team by Scrum methodology
            </ListItem>
            <ListItem>Full implementing a valuable world-edge component</ListItem>
            <ListItem>Unit-tests with Catch framework</ListItem>
            <ListItem>Particularly project and implementing a client application on Qt</ListItem>
            <ListItem>Using design patterns</ListItem>
            <ListItem>System of version control SVN, Git</ListItem>
            <ListItem>Code-review</ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 4',
                'Ruby Slim',
                'JavaScript',
                'CSS',
                'SASS',
                'Bootstrap',
                'AJAX',
                'friendlyId',
                'dragonfly',
                'C++',
                'Boost Thread',
                'WebSocket',
                'JSON',
                'Stash',
                'JIRA',
                'Confluence',
                'SVN',
                'Git'
              ]}
            />
          </Paragraph>

          <SectionHeader>C++/Qt developer</SectionHeader>
          <Paragraph>
            <Period from="2012.12" to="2013.09" />
            <Line>Nasca Ltd. Pskov</Line>
            <ListHeader>Tasks</ListHeader>
            <ListItem>Improvements of trading engine</ListItem>
            <ListItem>Parse and analize exchange logs</ListItem>
            <ListItem>Add features to deal log program</ListItem>
            <ListItem>Develop program for emulation of exchange</ListItem>
            <ListItem>E-mail sending to users of special sites</ListItem>
            <ListItem>Add features to company's deal analize program</ListItem>
            <ListItem>Download exchange logs automatically</ListItem>
          </Paragraph>

          <SectionHeader>High school</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="send">
              <Line>Pskov State University</Line>
              <Line>2008 - 2013</Line>
              <Line>Faculty of Informatics, Informatic systems and technologies</Line>
            </GlyphIconWrapper>
          </Paragraph>

          <SectionHeader>Languages</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="flag">
              <Line>Russian — Native</Line>
              <Line>English — Intermediate</Line>
            </GlyphIconWrapper>
          </Paragraph>
        </Container>
      </Wrapper>
    )
  }
}
