import React from 'react';
import { Link, router } from '@inertiajs/react';

const SingleTodo = ({ singleTodo }) => {
  const handleClick = () => {
    router.visit(route('todos.destroy', { id: singleTodo.id }), { method: 'delete' });
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center w-full mb-6">
        <h1 className="text-4xl font-semibold text-gray-900">Todo Details</h1>
        <p className="mt-2 text-lg text-gray-600">View or manage your todo</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[900px] hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{singleTodo.title}</h1>
        <p className="text-gray-600 mb-6">{singleTodo.description || 'No description available.'}</p>
        <div className="flex justify-start space-x-4">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-8  w-full max-w-[900px]  ">
        <Link
          href="/todos"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Todos
        </Link>
      </div>
    </div>
  );
};

export default SingleTodo;
