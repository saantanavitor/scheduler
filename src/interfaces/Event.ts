import { KindOfEvent } from "./KindOfEvent"

export interface Event {
  date: Date
  label: string
  kindOfEvent: KindOfEvent
  box: number
}
