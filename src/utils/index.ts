import { User, Task } from '@/types/types'

export function userArrayFromSupabase(data: any[]): User[] {
    const users: User[] = data.map( user => {
      const { uuid, name, email, room, birthday } = user;
      return {
        uuid: uuid,
        name: name,
        email: email,
        room: room,
        birthday: birthday,
      };
    })
  
    return users;
}

export function taskArrayFromSupabase(data: any[]): Task[] {
    const tasks: Task[] = data.map( task => {
      const { uuid, task_name, task_desc, due_date, assignee, creator, task_type, completed } = task;
      return {
        uuid: uuid,
        task_name: task_name,
        task_desc: task_desc,
        due_date: due_date,
        assignee: assignee,
        creator: creator,
        task_type: task_type,
        completed: completed
      };
    })
  
    return tasks;
}
