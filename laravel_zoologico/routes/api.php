<?php

use App\Http\Controllers\API\AnimalController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('animales', AnimalController::class);

/*Route::prefix('animales')->group(function () {
    Route::get('/',[ AnimalController::class, 'index']);
    Route::post('/',[ AnimalController::class, 'create']);
    Route::delete('/{id}',[ AnimalController::class, 'destroy']);
    Route::get('/{id}',[ AnimalController::class, 'show']);
    Route::put('/{id}',[ AnimalController::class, 'update']);
});*/
