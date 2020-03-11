export type Task = {
  id: string
  content: string
}

export const taskList: Task[] = [...Array(20).keys()].map(i => ({
  id: `task-${i}`,
  content: `Task ${i}`,
}))
