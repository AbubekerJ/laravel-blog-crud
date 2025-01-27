import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


const Todos = ({ todos, links }) => {
  const { flash } = usePage().props


 console.log('page')
  return (
        <AuthenticatedLayout
        
          >

    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-50 min-h-screen">
      {flash.message && (
        <div className="bg-green-300 p-6 w-full text-white text-xl text-center">{flash.message}</div>
      )}
      <div className="flex flex-col items-center w-full mb-6">
        <h1 className="text-4xl font-semibold text-gray-900">Blog</h1>
        <p className="mt-2 text-lg text-gray-600">Manage your blogs easily</p>
      </div>
      <div className="w-full max-w-[900px] flex justify-end">
        <Link
          href={'todos/create'}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Create Blog
        </Link>
      </div>

       
      <div className="w-full max-w-[900px] space-y-6 mt-8">
        {todos.data.map((todo, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-800">{todo.title}</h2>
              <Link
                href={'/todos/' + todo.id}
                className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
              >
                View More
              </Link>
            </div>
            <p className="text-gray-600 mt-2">
              {todo.description?.length > 100
                ? `${todo.description.slice(0, 300)}...`
                : todo.description || "No description available."}
            </p>


          </div>
        ))}
        <div className="flex justify-center mt-8">
          {todos.links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`px-4 py-2 mx-1 rounded-lg ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                }`}
            >
              {link.label.replace(/&raquo;|&laquo;/g, '').trim()}
            </Link>
          ))}
        </div>

      </div>
    </div>
    </AuthenticatedLayout>
  );
  
};

export default Todos;

