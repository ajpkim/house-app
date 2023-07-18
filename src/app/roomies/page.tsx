"use client"

import { useEffect, useState } from 'react';
import { getAllUsers } from '@/api/index';
import { User } from '@/types/types'

export default function Roomies() {
  const [users, setUsers] = useState<User[]>([]);

  console.log(users)
  console.log('me')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.uuid}>{user.name}, {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

