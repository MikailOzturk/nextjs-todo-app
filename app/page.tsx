import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAllTodos } from '@/api';

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="flex min-h-screen max-w-4xl mx-auto mt-4 flex-col p-24">
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks}/>
    </main>
  )
}
