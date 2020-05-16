export interface CompanyType {
  title: string
  site: string
  description: string | null
}

export type LocaleType = 'en' | 'ru'

export interface PeriodType {
  from: string
  to: string
}

export interface ResumeType {
  translations: any
  oneretargetPeriod: PeriodType
  oneretarget: CompanyType
  oneretargetTasks: string[]
  oneretargetAchievements: string[]
  oneretargetTags: string[]

  lakehousePeriod: PeriodType
  lakehouse: CompanyType
  lakehouseTasks: string[]
  lakehouseTags: string[]

  selfEducationPeriod: PeriodType
  selfEducationTasks: string[]
  selfEducationTags: string[]

  nascaPeriod2: PeriodType
  nasca: CompanyType
  nasca2Tasks: string[]
  nascaTags2: string

  nascaPeriod: PeriodType
  nascaTasks: string[]
  nascaTags: string[]
}
