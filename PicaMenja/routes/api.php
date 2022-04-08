<?php

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

// RUTES DE LA API

// RUTES DE LA TAULA COMENTARIS

// RUTES DE LA TAULA FOTOS

// RUTES DE LA TAULA IDIOMES

// RUTES DE LA TAULA RESTAURANTS
Route::group(
    ['prefix' => 'restaurants'],
    function () {
        Route::get('', 'App\Http\Controllers\RestaurantController@index');
        Route::get('{id}', 'App\Http\Controllers\RestaurantController@show');
        Route::delete('{id}', 'App\Http\Controllers\RestaurantController@delete');
        Route::post('', 'App\Http\Controllers\RestaurantController@store');
        Route::put('{id}', 'App\Http\Controllers\RestaurantController@update');
        Route::post('{id}/imatge', 'App\Http\Controllers\RestaurantController@imatge');
    }
);


// RUTES DE LA TAULA RESTAURANTS_SERVEIS
Route::group(
    ['prefix' => 'restaurants_serveis'],
    function () {
        Route::post('', 'App\Http\Controllers\Restaurant_ServeiController@store');
        Route::delete('/{id_restaurant}/{id_servei}', 'App\Http\Controllers\Restaurant_ServeiController@delete');
    }
);


// RUTES DE LA TAULA SERVEIS

// RUTES DE LA TAULA TIPUS
Route::group(['prefix' => 'tipus'], function () {
    Route::get('', 'App\Http\Controllers\TipusController@index');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// RUTES DE LA TAULA USUARIS