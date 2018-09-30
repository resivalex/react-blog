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
  Link,
  RadioGroup,
  RadioItem
} from './Thema'
import Period from './Period'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import Tags from './Tags'
import translateFuncForLocale from './translateFuncForLocale'
import DocumentTitle from 'react-document-title'

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Footer = styled.div`
  height: 100px;
`

type Props = {}

type State = {
  locale: 'ru' | 'en'
}

export default class Resume extends Component<Props, State> {
  state = { locale: 'ru' }

  render() {
    const { locale } = this.state
    const t = translateFuncForLocale(locale)

    const nascaCompany = (
      <GlyphIconWrapper name="map-marker">
        <Term
          title="Nasca Ltd."
          description={
            <Fragment>
              <StraightLink link="http://piratetrade.ru" />
              <HalfLine />
              <div>{t('exchange_trading_company')}</div>
            </Fragment>
          }
        />
      </GlyphIconWrapper>
    )

    return (
      <Wrapper>
        <DocumentTitle title={t('page_title')} />
        <Header locale={locale} />
        <Container>
          <RadioGroup>
            <RadioItem active={locale === 'ru'} onClick={() => this.setState({ locale: 'ru' })}>
              RUS
            </RadioItem>
            <RadioItem active={locale === 'en'} onClick={() => this.setState({ locale: 'en' })}>
              ENG
            </RadioItem>
          </RadioGroup>
          <SectionHeader>{t('about_me')}</SectionHeader>
          <Paragraph>
            <Line>{t('my_passion')}</Line>
            <Line>
              {t('study_period_hobbi')} [
              <Link href="http://acm.timus.ru/author.aspx?id=79813">1</Link>
              ], [<Link href="http://codeforces.com/profile/Reshetnikov_Ivan">2</Link>]
            </Line>
            <Line>{t('algorithm_knowledge')}</Line>
            <HalfLine />
            <Line>
              {t('github_profile')} <StraightLink link="https://github.com/resivalex" />
            </Line>
          </Paragraph>
          <SectionHeader>{t('lead_ror_developer')}</SectionHeader>
          <Paragraph>
            <Period locale={locale} from="2016.12" to="now" />
            <GlyphIconWrapper name="map-marker">
              <Term
                title="OneRetarget.com"
                description={
                  <Fragment>
                    <StraightLink link="https://oneretarget.com" />
                    <HalfLine />
                    <div>{t('ad_managing_service')}</div>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
            <ListHeader>{t('tasks')}</ListHeader>
            <ListItem>{t('discuss_solutions')}</ListItem>
            <ListItem>{t('create_ad_tools')}</ListItem>
            <ListItem>{t('sync_ads')}</ListItem>
            <ListItem>{t('implement_formats')}</ListItem>
            <ListItem>{t('deploy_system')}</ListItem>
            <ListHeader>{t('achievements')}</ListHeader>
            <ListItem>{t('unify_api')}</ListItem>
            <ListItem>{t('sync_metrica')}</ListItem>
            <ListItem>{t('detect_problems')}</ListItem>
            <ListItem>{t('implement_widgets')}</ListItem>
            <ListItem>{t('migrate_to_react')}</ListItem>
            <ListItem>{t('correct_styles')}</ListItem>
            <ListHeader>{t('technologies')}</ListHeader>
            <Tags
              items={[
                'Ruby on Rails 5',
                'PostgreSQL',
                'RSpec',
                'Cucumber',
                'Capybara',
                'Jenkins',
                'Docker',
                'Capistrano',
                'Trailblazer',
                'React.js',
                'ES6',
                'Redux',
                'Flow',
                'SASS',
                'BEM',
                'Webpack',
                'yarn',
                'styled-components',
                'delayed_job',
                'VK API',
                'myTarget API',
                'Facebook API',
                'AdWords API',
                'Metrica API',
                'Backup'
              ]}
            />
          </Paragraph>
          <SectionHeader>{t('ror_developer')}</SectionHeader>
          <Paragraph>
            <Period locale={locale} from="2016.04" to="2016.11" />
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
            <ListHeader>{t('tasks')}</ListHeader>
            <ListItem>
              {t('odin_project')} <StraightLink link="http://o-din.ru/" />
            </ListItem>
            <ListItem>
              {t('academy_project')} <StraightLink link="http://e-academie.ru/" />
            </ListItem>
            <ListHeader>{t('technologies')}</ListHeader>
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
          <SectionHeader>{t('self_education')}</SectionHeader>
          <Paragraph>
            <Period locale={locale} from="2016.02" to="2016.04" />
            <ListItem>
              {t('rewrite_diplom')}{' '}
              <StraightLink link="https://github.com/resivalex/student-progress-on-rails" />
            </ListItem>
            <ListItem>
              {t('trampoline_site')} <StraightLink link="https://github.com/resivalex/zaskok" />
            </ListItem>
            <ListHeader>{t('technologies')}</ListHeader>
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
          <SectionHeader>{t('software_developer')}</SectionHeader>
          <Paragraph>
            <Period locale={locale} from="2015.04" to="2016.01" />
            {nascaCompany}
            <ListItem>
              {t('website_development')} <StraightLink link="http://pskovskie.ru" />{' '}
              {t('from_scratch')}
            </ListItem>
            <ListItem>{t('develop_multi_component_app')}</ListItem>
            <ListItem>{t('implement_server_component')}</ListItem>
            <ListItem>{t('cpp_unit_tests')}</ListItem>
            <ListItem>{t('participate_qt_development')}</ListItem>
            <ListItem>{t('use_design_patterns')}</ListItem>
            <ListItem>{t('code_review')}</ListItem>
            <ListHeader>{t('technologies')}</ListHeader>
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
          <SectionHeader>{t('cpp_qt_developer')}</SectionHeader>
          <Paragraph>
            <Period locale={locale} from="2012.12" to="2013.09" />
            {nascaCompany}
            <ListHeader>{t('tasks')}</ListHeader>
            <ListItem>{t('improve_engine')}</ListItem>
            <ListItem>{t('log_analysis')}</ListItem>
            <ListItem>{t('log_transactions')}</ListItem>
            <ListItem>{t('emulate_exchange')}</ListItem>
            <ListItem>{t('email_sending')}</ListItem>
            <ListItem>{t('auto_download_logs')}</ListItem>
            <ListItem>{t('use_svn')}</ListItem>
            <ListHeader>{t('technologies')}</ListHeader>
            <Tags
              items={['C++', 'C++ Standard Library', 'Qt', 'JavaScript', 'jQuery', 'HTML', 'SVN']}
            />
          </Paragraph>
          <SectionHeader>{t('higher_education')}</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="send">
              <Term
                title={t('pskov_university')}
                description={
                  <Fragment>
                    <Line>2008 - 2013</Line>
                    <Line>{t('informatics_faculcy')}</Line>
                  </Fragment>
                }
              />
            </GlyphIconWrapper>
          </Paragraph>
          <SectionHeader>{t('languages')}</SectionHeader>
          <Paragraph>
            <GlyphIconWrapper name="flag">
              <Line>{t('russian_level')}</Line>
              <Line>{t('english_level')}</Line>
            </GlyphIconWrapper>
          </Paragraph>
          <SectionHeader>{t('contacts')}</SectionHeader>
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
