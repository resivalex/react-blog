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
import { LocaleType, PeriodType, ResumeType } from './types'

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Footer = styled.div`
  height: 100px;
`

interface CompanyType {
  title: string
  site: string
  description: string | null
}

interface Props {
  data: ResumeType | null
  locale: LocaleType
  onChangeLocale: Function
}

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
  return _.map(wordsAndSpaces, (word: string, index: number) => {
    return word.indexOf('http') === 0 ? (
      <StraightLink key={index} link={word} />
    ) : (
      <span key={index}>{word}</span>
    )
  })
}

function ListItems(items: string[]) {
  return _.map(items, (item, index: number) => (
    <ListItem key={index}>{TextWithLinks(item)}</ListItem>
  ))
}

function Position(locale, t, period: PeriodType, title, company, tasks, achievements, tags) {
  return (
    <Fragment key={title}>
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

const tr = { ru: { page_title: 'Резюме' }, en: { page_title: 'CV' } }

export default function Resume(props: Props) {
  const locale = props.locale
  const setLocale = props.onChangeLocale
  const data = props.data
  const data2 = data // convertToSecondType(data, locale)

  console.log(JSON.stringify(data2, null, 2))
  const t = translateFunction(data2 ? data2.translations : {}, locale)

  return (
    <Wrapper>
      <DocumentTitle title={tr[locale].page_title} />
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
        {data2 ? (
          <Fragment>
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
                {TextWithLinks(t('github_profile') + ' ' + 'https://github.com/resivalex')}
              </Line>
            </Paragraph>
            {_.map(data2.positions, (position) =>
              Position(
                locale,
                t,
                position.period,
                position.title,
                position.company,
                position.tasks,
                position.achievements,
                position.tags
              )
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
          </Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
      <Footer />
    </Wrapper>
  )
}
