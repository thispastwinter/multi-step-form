export interface Field {
  type: string
  label: string
  name: string
  validation: string | null
  placeholder: string | null
  errorMessage: string | null
  required: boolean
}

type Row = { rowId: string; fields: Array<Field> }

export interface StepDatum {
  title: string
  subTitle: string
  rows: Array<Row>
}

export type StepData = { [key: string]: StepDatum }
