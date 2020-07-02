import { TodoTagInterface } from './todoTag'

export interface ToDoInterface {
  title: string,
  content: string,
  color: string,
  endDate: string | Date,
  status: 'done' | 'working'
  tags: Array<TodoTagInterface>
}
