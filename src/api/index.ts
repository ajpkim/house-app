// Implement Supabase API interactions here that components will use

import supabase from '@/utils/supabase'
import { UUID } from 'crypto';
import { Task, User } from '@/types/types'

export async function getAllUsers() {
    const { data, error } = await supabase.from('Users').select('*');
    if (error) {
      throw new Error('Error fetching users: ' + error.message);
    }

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

function mapTasksFromSupabase() {
// maps object from Supabase to Task[]
}

function mapUsersFromSupabase() {
  // maps object from Supabase to User[]
}

function getUserFromId() {
  // gets user object from uuid
}

export async function getAllTasks() {
  const { data, error } = await supabase.from('Tasks').select('*');
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  const tasks: Task[] = data.map( task => {
    const { uuid, task_name, task_desc, due_date, assignee, creator, task_type } = task;
    return {
      uuid: uuid,
      task_name: task_name,
      task_desc: task_desc,
      due_date: due_date,
      assignee: assignee,
      creator: creator,
      task_type: task_type
    };
  })

  return tasks;
}

export async function getUserCompleteTasks(id: UUID) {

}
// getUserIncompleteTasks
// getUserOverdueTasks
// getUserUpcomingTasks(id: uuid, date_range: string=+1week )
// function getUserCompletedTasks(id: UUID): [Task] {
    
//     return []
// }

// addTask