import { Table } from '@mantine/core';
import React from 'react';
import { Todo } from '../types/type';
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = ({ todos }: { todos: Todo[]; }) => {
  return (
    <Table>
      <Table.Tbody>
        {todos.map((todo) => (<ToDoListItem todo={todo} />))}
      </Table.Tbody>
    </Table>
  );
}