import { Color } from './ColorFilter'

export interface Todo {
  id: number
  text: string
  link: string
  completed: boolean
  color: Color
}
