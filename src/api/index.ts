// Implement Supabase API interactions here that components will use

import supabase from '@/utils/supabase'
import { UUID } from 'crypto';
import { Task, User } from '@/types/types'
import { userArrayFromSupabase, taskArrayFromSupabase } from '@/utils/index'


function getUserFromId() {
  // gets user object from uuid

}

export async function getAllUsers() {
    const { data, error } = await supabase.from('Users').select('*');
    if (error) {
      throw new Error('Error fetching users: ' + error.message);
    }

    return userArrayFromSupabase(data);
}

export async function getAllTasks() {
  const { data, error } = await supabase.from('Tasks').select('*');
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  return taskArrayFromSupabase(data);
}

// TO-TEST
export async function getUserCompleteTasks(user_uuid: UUID) {
  const { data, error } = await supabase
    .from('Tasks')
    .select('*')
    .eq('assignee',user_uuid)
    .eq('completed',true);
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  return taskArrayFromSupabase(data);
}

// TO-TEST
export async function getUserIncompleteTasks(user_uuid: UUID) {
  const { data, error } = await supabase
    .from('Tasks')
    .select('*')
    .eq('assignee',user_uuid)
    .eq('completed',false);
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  return taskArrayFromSupabase(data);
}

// TO-TEST
export async function getUserOvedueTasks(user_uuid: UUID) {
  const { data, error } = await supabase
    .from('Tasks')
    .select('*')
    .eq('assignee',user_uuid)
    .lt('due_date', Date());
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  return taskArrayFromSupabase(data);
}

// TO-TEST
export async function getUserUpcomingTasks(user_uuid: UUID, within_num_days: number) {
  const { data, error } = await supabase
    .from('Tasks')
    .select('*')
    .eq('assignee',user_uuid)
    .lt('due_date', Date() + within_num_days);
  if (error) {
    throw new Error('Error fetching users: ' + error.message);
  }

  return taskArrayFromSupabase(data);
}

// TO-TEST
async function addRow(task: Task) {
  const tableName = 'Tasks';

  const { data, error } = await supabase
    .from(tableName)
    .insert([task]);

  if (error) {
    console.error('Error adding row:', error.message);
    return;
  }

  console.log('Row added successfully.');
}