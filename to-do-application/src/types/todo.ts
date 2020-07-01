import { ToDoIndexInterface } from './toDoIndex'
import { TodoTagInterface } from './todoTag'

export interface ToDoInterface {
  title: string,
  content: string,
  color: string,
  date: Date,
  status: 'done' | 'working'
  index: ToDoIndexInterface
  tags: Array<TodoTagInterface>
}

export const filterByIndex = (array: Array<ToDoInterface>, index: ToDoIndexInterface) => {
  return array.filter(e => e.index === index)
}
