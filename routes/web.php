<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Todo;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/testapp',function() {
    return view('test');
});

Route::get('/testReact', function () {
    $person = [

        [  
        "id"=>1  ,  
        "name" => "Abubeker",
        "age" => 25,
        "job" => "Developer"],
        [   
        "id"=>2,
       "name" => "Abubeker2",
        "age" => 15,
        "job" => "Deve"],
    
    ];

    return Inertia::render('TestReact', ['person' => $person ]);
});



//Blog
Route::get('/todos',['App\Http\Controllers\TodoController','getAllTodos'])->name('todos.index');
Route::get('/todos/create',[TodoController::class,'createTodoForm'])->name('todos.create');   
Route::get('/todos/{singleTodo}',[TodoController::class,'getSingleTodo'])->name('todos.show');
Route::post('/todos',[TodoController::class , 'createTodo'])->name('todos.store');
Route::delete('/todos/{id}',[TodoController::class,'deleteTodo'])->name('todos.destroy');





Route::get('/dashboard',['App\Http\Controllers\TodoController','getAllTodos'] )->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
