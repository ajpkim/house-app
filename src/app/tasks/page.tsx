"use client"

import { useEffect, useState } from 'react';
import { getAllTasks } from '@/api/index';
import { Task } from '@/types/types'

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.uuid}>Task: {task.task_name}, Desc: {task.task_desc}, Assignee:{task.assignee}, Due: {task.due_date}</li>
        ))}
      </ul>
    </div>
  );
}

