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

export interface Position {
  title: string
  period: PeriodType
  company: CompanyType | null
  tasks: string[] | null
  achievements: string[] | null
  tags: string[]
}

export interface ResumeType {
  translations: any

  positions: Position[]
}
