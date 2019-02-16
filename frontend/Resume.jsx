// @flow
import React, { Component, Fragment, useState } from 'react'
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

import DocumentTitle from 'react-document-title'

export const translations = {
  en: {
    page_title: 'Resume',
    about_me: 'About me',
    exchange_trading_company: 'Exchange trading company',
    my_passion: 'I like writing beautiful and clear code, am interested in new technologies',
    study_period_hobbi: 'I was engaged in olympiad programming at the university',
    algorithm_knowledge: 'So, I have a good idea of the effectiveness and use of algorithms',
    github_profile: 'GitHub profile',
    ror_developer: 'Ruby on Rails developer',
    lead_ror_developer: 'Lead Ruby on Rails developer',
    ad_managing_service: 'A service to manage several ad platforms at one account',
    tasks: 'Tasks',
    achievements: 'Achievements',
    technologies: 'Technologies',
    create_ad_tools: 'Creating tools to analyze and manage ads',
    sync_ads: 'Synchronization of statistics, state of moderation',
    implement_formats: 'Implementing of new formats. Error handling',
    discuss_solutions:
      'Chosing the technical development strategy and tools, suggestion/discussion of implementation ways. Code review',
    deploy_system: 'Deployment of the system. Backups. System state monitoring',
    unify_api: 'Modifying the API in such a way it can be used for external users and the frontend',
    sync_metrica: 'Synchronization and display of advertising performance from Yandex.Metrica data',
    detect_problems: 'Adding a section for problem detection in the system',
    implement_widgets:
      'Implementation of interactive widgets: weekly schedule, bulk copying, ad preview',
    migrate_to_react: 'Frontend migration from CoffeeScript and jQuery to ES6 and React',
    correct_styles:
      'Correction of the layout and use of the single style within the entire user account',
    odin_project: 'Real estate project support and development',
    academy_project: 'Beauty specialists qualification project support and development',
    self_education: 'Self-education',
    rewrite_diplom: 'Graduation work rewriting',
    trampoline_site: 'Trampoline center website development',
    software_developer: 'Software developer',
    website_development: 'Website development',
    from_scratch: 'from scratch',
    develop_multi_component_app:
      'Development of a multi-component network application in a team of five members using\n' +
      ' the Scrum methodology',
    implement_server_component:
      'Full implementation of an important component interacting with the exchange',
    cpp_unit_tests: 'Unit-testing with Catch framework',
    participate_qt_development: 'Partially designing and implementing a client application on Qt',
    use_design_patterns: 'Using design patterns',
    code_review: 'Code review',
    cpp_qt_developer: 'C++/Qt developer',
    improve_engine: 'Improvements of the trading engine',
    log_analysis: 'Exchange log parsing and analysis',
    log_transactions: 'Features implementing for a transaction logging software',
    emulate_exchange: 'Development of a program for emulation an exchange',
    email_sending: 'Sending email to users of specialized sites',
    auto_download_logs: 'Automatic exchange log downloading',
    use_svn: 'Using system of version control',
    higher_education: 'Higher education',
    informatics_faculcy: 'Faculty of Informatics',
    languages: 'Languages',
    russian_level: 'Russian — Native',
    english_level: 'English — Intermediate',
    contacts: 'Contacts',
    pskov_university: 'Pskov State University'
  },
  ru: {
    page_title: 'Резюме',
    about_me: 'Обо мне',
    exchange_trading_company: 'Торговля на бирже',
    my_passion: 'Люблю писать красивый и понятный код. Интересуюсь новыми технологиями',
    study_period_hobbi: 'Увлекался олимпиадным программированием в университете',
    algorithm_knowledge: 'Имею хорошее представление об эффективности алгоритмов',
    github_profile: 'GitHub профиль',
    ror_developer: 'Ruby on Rails разработчик',
    lead_ror_developer: 'Ведущий Ruby on Rails разработчик',
    ad_managing_service: 'Сервис для управления рекламой из одного кабинета',
    tasks: 'Задачи',
    achievements: 'Достижения',
    technologies: 'Технологии',
    create_ad_tools: 'Создание инструментов для анализа и управления рекламой',
    sync_ads: 'Синхронизация статистики, статусов модерации',
    implement_formats: 'Реализация новых форматов. Обработка ошибок',
    discuss_solutions:
      'Выбор направления и инструментов для разрития технической части проекта, предложение/обсуждение вариантов реализации, ревью кода',
    deploy_system: 'Деплой системы. Резервное копирование. Мониторинг ошибок',
    unify_api: 'Унификация API для использования на фронтенде и внешними пользователями',
    sync_metrica: 'Синхронизация и вывод показателей эффективности рекламы из Яндекс.Метрики',
    detect_problems: 'Добавление раздела админки для обнаружения проблемных ситуаций',
    implement_widgets:
      'Реализация интерактивных виджетов: недельное расписание показов, массовое копирование, превью баннеров',
    migrate_to_react: 'Миграция фронтенда с CoffeeScript и jQuery на ES6 и React',
    correct_styles: 'Приведение стилей в кабинете пользователя к аккуратному единообразному виду',
    odin_project:
      'Поддержка и разработка сайта для оперативного управления обслуживающими процессами в крупных зданиях, сдающих помещения в аренду',
    academy_project: 'Поддержка и разработка CRM для повышения квалификации стилистов',
    self_education: 'Самообразование',
    rewrite_diplom: 'Переписывание дипломного проекта',
    trampoline_site: 'Разработка веб-сайта для батутного центра',
    software_developer: 'Разработчик ПО',
    website_development: 'Разработка веб-сайта',
    from_scratch: 'с нуля',
    develop_multi_component_app:
      'Разработка многокомпонентного сетевого приложения в команде из пяти разработчиков по методологии Scrum',
    implement_server_component:
      'Полная реализация важного компонента, взаимодействующего непосредственно с биржей',
    cpp_unit_tests: 'Юнит-тестирование с использованием Catch фреймворка',
    participate_qt_development:
      'Частичное проектирование и реализация клиентского приложения на Qt',
    use_design_patterns: 'Использование шаблонов проектирования',
    code_review: 'Ревью кода',
    cpp_qt_developer: 'C++/Qt разработчик',
    improve_engine: 'Улучшение торгового движка',
    log_analysis: 'Парсинг и анализ биржевого лога',
    log_transactions: 'Доработки для электронного журнала сделок',
    emulate_exchange: 'Разработка программы для эмуляции биржи',
    email_sending: 'Рассылка электронных писем пользователям определённых сайтов',
    auto_download_logs: 'Автозагрузка логов биржи',
    use_svn: 'Использование системы контроля версий',
    higher_education: 'Высшее образование',
    informatics_faculcy: 'Факультет информатики',
    languages: 'Знание языков',
    russian_level: 'Русский — Родной',
    english_level: 'Английский — Intermediate',
    contacts: 'Контакты',
    pskov_university: 'Псковский государственный университет'
  }
}

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Footer = styled.div`
  height: 100px;
`

export default function Resume() {
  const [locale, setLocale] = useState('ru')

  const t = translateFunction(translations, locale)

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
