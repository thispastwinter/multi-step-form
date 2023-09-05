import { Rate } from "./Rate"

export interface Frequency {
  id: string
  rates: {
    monthly: Rate
    yearly: Rate
  }
}
