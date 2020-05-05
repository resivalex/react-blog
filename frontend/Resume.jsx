// @flow
import React, { Fragment } from 'react'
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
import translateFunction from './translateFunction'
import _ from 'lodash'

import DocumentTitle from 'react-document-title'

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Footer = styled.div`
  height: 100px;
`

type CompanyType = {|
  title: string,
  site: string,
  description: ?string
|}

export type ResumeType = Object

type Props = {|
  data: ResumeType,
  onChangeLocale: ('en' | 'ru') => void
|}

function Company(company: CompanyType) {
  return (
    <GlyphIconWrapper name="map-marker">
      <Term
        title={company.title}
        description={
          <Fragment>
            <StraightLink link={company.site} />
            {company.description && (
              <Fragment>
                <HalfLine />
                <div>{company.description}</div>
              </Fragment>
            )}
          </Fragment>
        }
      />
    </GlyphIconWrapper>
  )
}

function TextWithLinks(text) {
  const words = text.split(' ')
  const wordsAndSpaces = _.flatten(words.map((word) => [word, ' '])).slice(0, -1)
  console.log({ words, wordsAndSpaces })
  return _.map(wordsAndSpaces, (word, index: number) => {
    console.log(word)
    return word.indexOf('http') === 0 ? (
      <StraightLink key={index} link={word} />
    ) : (
      <span key={index}>{word}</span>
    )
  })
}

function ListItems(items: Array<string>) {
  return _.map(items, (item, index: number) => (
    <ListItem key={index}>{TextWithLinks(item)}</ListItem>
  ))
}

function Position(locale, t, period, title, company, tasks, achievements, tags) {
  return (
    <Fragment>
      <SectionHeader>{title}</SectionHeader>
      <Paragraph>
        <Period locale={locale} from={period.from} to={period.to} />
        {company && Company(company)}
        {tasks && (
          <Fragment>
            <ListHeader>{t('tasks')}</ListHeader>
            {ListItems(tasks)}
          </Fragment>
        )}
        {achievements && (
          <Fragment>
            <ListHeader>{t('achievements')}</ListHeader>
            {ListItems(achievements)}
          </Fragment>
        )}
        {tags && (
          <Fragment>
            <ListHeader>{t('technologies')}</ListHeader>
            <Tags items={tags} />
          </Fragment>
        )}
      </Paragraph>
    </Fragment>
  )
}

export default function Resume(props: Props) {
  const locale = props.data.locale
  const setLocale = props.onChangeLocale
  const data = props.data

  const t = translateFunction(props.data.translations, locale)

  return (
    <Wrapper>
      <DocumentTitle title={t('page_title')} />
      <Header locale={locale} />
      <Container>
        <RadioGroup>
          <RadioItem active={locale === 'ru'} onClick={() => setLocale('ru')}>
            RUS
          </RadioItem>
          <RadioItem active={locale === 'en'} onClick={() => setLocale('en')}>
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
          <Line>{TextWithLinks(t('github_profile') + ' ' + 'https://github.com/resivalex')}</Line>
        </Paragraph>
        {Position(
          locale,
          t,
          data.oneretargetPeriod,
          t('lead_ror_developer'),
          data.oneretarget,
          data.oneretargetTasks,
          data.oneretargetAchievements,
          data.oneretargetTags
        )}
        {Position(
          locale,
          t,
          data.lakehousePeriod,
          t('ror_developer'),
          data.lakehouse,
          data.lakehouseTasks,
          null,
          data.lakehouseTags
        )}
        {Position(
          locale,
          t,
          data.selfEducationPeriod,
          t('self_education'),
          null,
          data.selfEducationTasks,
          null,
          data.selfEducationTags
        )}
        {Position(
          locale,
          t,
          data.nascaPeriod2,
          t('software_developer'),
          data.nasca,
          data.nasca2Tasks,
          null,
          data.nascaTags2
        )}
        {Position(
          locale,
          t,
          data.nascaPeriod,
          t('cpp_qt_developer'),
          data.nasca,
          data.nascaTasks,
          null,
          data.nascaTags
        )}
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
