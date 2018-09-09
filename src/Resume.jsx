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
  HalfLine,
  Link
} from './Thema'
import Period from './Period'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import Tags from './Tags'

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Footer = styled.div`
  height: 100px;
`

type Props = {}

export default class Resume extends Component<Props> {
  render() {
    const nascaCompany = (
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
    )

    return (
      <Wrapper>
        <Header />
        <Container>
          <SectionHeader>About me</SectionHeader>
          <Paragraph>
            <Line>I like writing beautiful and clear code, am interested in new technologies</Line>
            <Line>
              I was engaged in olympiad programming at the university [
              <Link href="http://acm.timus.ru/author.aspx?id=79813">1</Link>
              ], [<Link href="http://codeforces.com/profile/Reshetnikov_Ivan">2</Link>]
            </Line>
            <Line>So, I have a good idea of the effectiveness and use of algorithms</Line>
            <HalfLine />
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
                    <div>A service to manage several ad platforms at one account</div>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
            <ListHeader>Tasks</ListHeader>
            <ListItem>Creating tools to analize and manage ads</ListItem>
            <ListItem>Synchronization of statistics, state of moderation</ListItem>
            <ListItem>Implementing of new formats. Error handling</ListItem>
            <ListItem>Discussion of implementation strategies. Code review</ListItem>
            <ListItem>Deployment of the system. Backups. System state monitoring</ListItem>
            <ListHeader>Archivements</ListHeader>
            <ListItem>
              Modifying the API in such a way it can be used for external users and the frontend
            </ListItem>
            <ListItem>
              Synchronization and display of advertising performance from Yandex.Metrica data
            </ListItem>
            <ListItem>Adding a partition for problem detection in the system</ListItem>
            <ListItem>
              Implementation of interactive widgets: weekly schedule, bulk copying, ad preview
            </ListItem>
            <ListItem>Frontend migration from CoffeeScript and jQuery to ES6 and React</ListItem>
            <ListItem>
              Correction of the layout and use of the single style within the entire user account
            </ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 5',
                'PostgreSQL',
                'Slim',
                'RSpec',
                'Cucumber',
                'Capybara',
                'Jenkins',
                'Docker',
                'Capistrano',
                'Trailblazer',
                'delayed_job',
                'VK API',
                'myTarget API',
                'Facebook API',
                'AdWords API',
                'Metrica API',
                'React.js',
                'ES6',
                'SASS',
                'BEM',
                'Webpack',
                'yarn',
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
            <ListItem>Company's projects development</ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 4',
                'RSpec',
                'Linux',
                'Capistrano',
                'Capybara',
                'AngularJS',
                'CoffeeScript',
                'PostgreSQL'
              ]}
            />
          </Paragraph>

          <SectionHeader>Self-education</SectionHeader>
          <Paragraph>
            <Period from="2016.02" to="2016.04" />
            <ListItem>
              Graduation work rewriting{' '}
              <StraightLink link="https://github.com/resivalex/student-progress-on-rails" />
            </ListItem>
            <ListItem>
              Trampoline center website development{' '}
              <StraightLink link="https://github.com/resivalex/zaskok" />
            </ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={[
                'Ruby on Rails',
                'RSpec',
                'Linux',
                'Capistrano',
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
            {nascaCompany}
            <ListItem>
              Website development <StraightLink link="http://pskovskie.ru" /> from scratch
            </ListItem>
            <ListItem>
              Development of a multi-component network application in a team of five members using
              the Scrum methodology
            </ListItem>
            <ListItem>
              Full implementation of an important component interacting with the exchange
            </ListItem>
            <ListItem>Unit-testing with Catch framework</ListItem>
            <ListItem>Partially designing and implementing a client application on Qt</ListItem>
            <ListItem>Using design patterns</ListItem>
            <ListItem>Code review</ListItem>
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
                'Git'
              ]}
            />
          </Paragraph>

          <SectionHeader>C++/Qt developer</SectionHeader>
          <Paragraph>
            <Period from="2012.12" to="2013.09" />
            {nascaCompany}
            <ListHeader>Tasks</ListHeader>
            <ListItem>Improvements of the trading engine</ListItem>
            <ListItem>Exchange log parsing and analysis</ListItem>
            <ListItem>Features implementing for a transaction logging software</ListItem>
            <ListItem>Development of a program for emulation an exchange</ListItem>
            <ListItem>Sending email to users of specialized sites</ListItem>
            <ListItem>Automatic exchange log downloading</ListItem>
            <ListItem>Using system of version control</ListItem>
            <ListHeader>Technologies</ListHeader>
            <Tags
              items={['C++', 'C++ Standard Library', 'Qt', 'JavaScript', 'jQuery', 'HTML', 'SVN']}
            />
          </Paragraph>

          <SectionHeader>Higher education</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="send">
              <Term
                title="Pskov State University"
                description={
                  <Fragment>
                    <Line>2008 - 2013</Line>
                    <Line>Faculty of Informatics</Line>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
          </Paragraph>

          <SectionHeader>Languages</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="flag">
              <Line>Russian — Native</Line>
              <Line>English — Intermediate</Line>
            </GlyphIconWrapper>
          </Paragraph>

          <SectionHeader>Contacts</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="envelope">
              <Link href="mailto:resivalex@gmail.com">resivalex@gmail.com</Link>
            </GlyphIconWrapper>
          </Paragraph>
        </Container>
        <Footer />
      </Wrapper>
    )
  }
}
