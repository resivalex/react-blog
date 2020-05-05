// @flow
import React, { Fragment, useState } from 'react'
import Resume, { type ResumeType } from './Resume'
import translateFunction from './translateFunction'
import GlyphIconWrapper from './GlyphIconWrapper'
import Term from './Term'
import { HalfLine, ListHeader, ListItem, Paragraph, StraightLink } from './Thema'

const translations = {
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
    english_level: 'English — Upper Intermediate',
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
    english_level: 'Английский — Upper Intermediate',
    contacts: 'Контакты',
    pskov_university: 'Псковский государственный университет'
  }
}

export default function ResumeContainer() {
  const [locale, setLocale] = useState('ru')
  const t = translateFunction(translations, locale)

  const data: ResumeType = {
    locale,
    translations,
    nasca: {
      title: 'Nasca Ltd.',
      site: 'http://piratetrade.ru',
      description: t('exchange_trading_company')
    },
    lakehouse: {
      title: 'Lakehouse',
      site: 'http://www.lakehouse.ru',
      description: null
    },
    oneretarget: {
      title: 'OneRetarget.com',
      site: 'https://oneretarget.com',
      description: t('ad_managing_service')
    },
    oneretargetTasks: [
      t('discuss_solutions'),
      t('create_ad_tools'),
      t('sync_ads'),
      t('implement_formats'),
      t('deploy_system')
    ],
    oneretargetAchievements: [
      t('unify_api'),
      t('sync_metrica'),
      t('detect_problems'),
      t('implement_widgets'),
      t('migrate_to_react'),
      t('correct_styles')
    ],
    oneretargetTags: [
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
    ],
    lakehouseTags: [
      'Ruby on Rails 4',
      'RSpec',
      'Linux',
      'Capistrano',
      'Capybara',
      'AngularJS',
      'CoffeeScript',
      'PostgreSQL'
    ],
    nascaTags2: [
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
    ],
    nascaTags: ['C++', 'C++ Standard Library', 'Qt', 'JavaScript', 'jQuery', 'HTML', 'SVN'],
    selfEducationTags: [
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
    ],
    nascaTasks: [
      t('improve_engine'),
      t('log_analysis'),
      t('log_transactions'),
      t('emulate_exchange'),
      t('email_sending'),
      t('auto_download_logs'),
      t('use_svn')
    ],
    lakehouseTasks: [
      t('odin_project') + ' http://o-din.ru/',
      t('academy_project') + ' http://e-academie.ru/'
    ],
    selfEducationTasks: [
      t('rewrite_diplom') + ' https://github.com/resivalex/student-progress-on-rails',
      t('trampoline_site') + ' https://github.com/resivalex/zaskok'
    ],
    nasca2Tasks: [
      t('website_development') + ' http://pskovskie.ru/ ' + t('from_scratch'),
      t('develop_multi_component_app'),
      t('implement_server_component'),
      t('cpp_unit_tests'),
      t('participate_qt_development'),
      t('use_design_patterns'),
      t('code_review')
    ],
    oneretargetPeriod: { from: '2016.12', to: 'now' },
    lakehousePeriod: { from: '2016.04', to: '2016.11' },
    selfEducationPeriod: { from: '2016.02', to: '2016.04' },
    nascaPeriod2: { from: '2015.04', to: '2016.01' },
    nascaPeriod: { from: '2012.12', to: '2013.09' }
  }

  return <Resume data={data} onChangeLocale={(locale) => setLocale(locale)} />
}
