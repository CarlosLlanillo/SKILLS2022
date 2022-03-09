<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\CuidadorController;
use App\Http\Controllers\InicioController;
use App\Http\Controllers\RevisionController;
use App\Http\Controllers\TitulacionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[InicioController::class,"inicio"]);

Route::get('animales', [AnimalController::class,"index"])->name('animales.index');

Route::get('animales/crear', [AnimalController::class,"create"])->name('animales.create')->middleware('auth');

Route::get('animales/{animal}', [AnimalController::class,"show"])->name("animales.show");

Route::get('animales/{animal}/editar', [AnimalController::class,"edit"])->name("animales.edit")->middleware('auth');

Route::post('animales', [AnimalController::class,"store"])->name('animales.store');

Route::post('animales/{animal}', [AnimalController::class,"update"])->name('animales.update');

Route::resource('animales/{animal}/revision', RevisionController::class)->names('revisiones');
//Route::get('animales/{animal}/revision/crear', [RevisionController::class,"create"])->name('revisiones.create');
//Route::post('animales/{animal}/revision', [RevisionController::class,"store"])->name('revisiones.store');

Route::get('cuidadores/{cuidador}', [CuidadorController::class,"show"])->name('cuidadores.show');

Route::get('titulaciones/{titulacion}', [TitulacionController::class,"show"])->name('titulaciones.show');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
