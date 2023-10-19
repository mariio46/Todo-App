'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { FormEventHandler, useEffect, useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { addNewTodo } from '../../api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListModal() {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [newTask, setNewTask] = useState<string>('');

    const submit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addNewTodo({
            id: uuidv4(),
            status: 'Incomplete',
            name: newTask,
        });
        setNewTask('');
        setOpen(false);
        router.refresh();
    };
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);
    return (
        <>
            <Button variant={'outline'} onClick={() => setOpen(true)}>
                <p className='text-sm text-muted-foreground'>
                    <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                        <span className='text-xs'>CTRL</span>J
                    </kbd>{' '}
                    to add new todo
                </p>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add new todo</DialogTitle>
                        <DialogDescription>
                            {"Hey, let's add new todo list to manage your day activity."}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submit} className='flex flex-col gap-y-3'>
                        <div>
                            <Label htmlFor='name'>Todo name</Label>
                            <Input
                                name='name'
                                id='name'
                                className='mt-1'
                                placeholder='Learn something new?'
                                type='text'
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        </div>
                        <div className='flex justify-end'>
                            <Button>Save</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
