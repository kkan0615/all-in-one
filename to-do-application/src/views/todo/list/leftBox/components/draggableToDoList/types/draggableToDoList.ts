import { ToDoInterface } from '@/types/todo'

export interface ToDoListInterface {
  title: 'This week' | 'Upcomming' | 'done',
  list: Array<ToDoInterface>
}
