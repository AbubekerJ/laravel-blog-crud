<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function getAllTodos()
    {

        $todo = Todo::latest()->paginate(2);
      
        return inertia('Todos', ['todos' => $todo]);
    }


    public function getSingleTodo(Todo  $singleTodo)
    {
      
        return Inertia::render('SingleTodo', ['singleTodo' => $singleTodo]);
    }

    public function createTodoForm()
    {
        return Inertia::render('CreateTodoForm');
    }

    public function deleteTodo(Todo $id)
    {
       
        $id->delete();
        return redirect()->route('todos.index')->with('message', 'Blog Deleted Successfully');
    }

    public function createTodo(Request $request)
    {
     $validated = $request->validate([
            'title' => 'required',
            'description' => 'required'

        ]);

        Todo::create($validated);
       
        return redirect()->route('todos.index')->with('message','Todo Created Successfully');;

    }



}
