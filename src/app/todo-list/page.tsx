import TodoListModal from '@/components/todo-list-modal';
import { getAllTodos } from '../../../api';
import TodoListTable from '@/components/todo-list-table';

export default async function TodoList() {
    const tasks = await getAllTodos();
    return (
        <div className='mx-auto my-16 max-w-7xl rounded-xl border'>
            <div className='flex flex-col gap-y-4 p-2.5 md:p-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Todo List</h1>
                    <TodoListModal />
                </div>
                <div>
                    <TodoListTable tasks={tasks} />
                </div>
            </div>
        </div>
    );
}
