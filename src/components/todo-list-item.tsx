'use client';

import { TableCell } from '@/components/ui/table';
import { Task } from '../../types/tasks';
import { Button } from './ui/button';
import { deleteTodo, updateTodoStatus } from '../../api';
import { useRouter } from 'next/navigation';
import { Icon } from './icon';

interface TodoListItemProps {
    task: Task;
    i: any;
}

export default function TodoListItem({ task, i }: TodoListItemProps) {
    const router = useRouter();
    const updateStatusToComplete = async (e: any) => {
        e.preventDefault();
        await updateTodoStatus({
            id: task.id,
            status: 'Completed',
            name: task.name,
        });
        router.refresh();
    };

    const updateStatusToIncomplete = async (e: any) => {
        e.preventDefault();
        await updateTodoStatus({
            id: task.id,
            status: 'Incomplete',
            name: task.name,
        });
        router.refresh();
    };

    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
        router.refresh();
    };

    return (
        <>
            <TableCell className='w-0'>{i + 1}</TableCell>
            <TableCell className='font-medium'>{task.name}</TableCell>
            <TableCell
                className={`font-medium ${
                    task.status !== 'Incomplete' ? 'text-green-500' : 'text-red-500'
                }`}>
                {task.status}
            </TableCell>
            <TableCell>
                <div className='flex justify-end gap-x-2'>
                    {task.status === 'Incomplete' ? (
                        <Button
                            onClick={updateStatusToComplete}
                            variant={'outline'}
                            type='submit'
                            className='text-green-500'>
                            {'Mark as complete'}
                        </Button>
                    ) : (
                        <Button
                            onClick={updateStatusToIncomplete}
                            variant={'outline'}
                            type='submit'
                            className='text-red-500'>
                            {'Mark as incomplete'}
                        </Button>
                    )}
                    <Button
                        onClick={() => handleDeleteTodo(task.id)}
                        variant={'outline'}
                        size={'icon'}
                        className='[&>svg]:hover:stroke-red-500'>
                        <Icon name='IconTrash' />
                    </Button>
                    <Button
                        variant={'outline'}
                        size={'icon'}
                        className='[&>svg]:hover:stroke-sky-500'>
                        <Icon name='IconEdit' />
                    </Button>
                </div>
            </TableCell>
        </>
    );
}
