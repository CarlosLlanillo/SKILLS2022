<?php

use App\Http\Controllers\API\AnimalController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public User routes
Route::post('/register',[LoginController::class, 'register']);
Route::post('/login',[LoginController::class, 'login']);

Route::post('animales/{animal}/imagen', [AnimalController::class, 'imagen']);
// Private routes
Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::post('/animales',[AnimalController::class, 'store']);
    Route::post('/logout',[LoginController::class, 'logout']);
});

//Public Animal routes
Route::apiResource('/animales', AnimalController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});