<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Routing\RouteCompiler;

/* 
|--------------------------------------------------------------------------
|                           RUTES DE LA API 
|--------------------------------------------------------------------------
*/

// RUTES DE LA TAULA COMENTARIS
Route::group(
    ["prefix" => "comentaris"],
    function () {
        Route::get('', 'App\Http\Controllers\ComentariController@index');
        Route::get('{id}', 'App\Http\Controllers\ComentariController@show');
        Route::delete('{id}', 'App\Http\Controllers\ComentariController@delete');
        Route::post('', 'App\Http\Controllers\ComentariController@store');
        Route::put('{id}', 'App\Http\Controllers\ComentariController@update');
    }
);

// RUTES DE LA TAULA FOTOS

// RUTES DE LA TAULA IDIOMES
Route::group(
    ["prefix" => "idiomes"],
    function () {
        Route::get('', 'App\Http\Controllers\IdiomaController@index');
        Route::get('{id}', 'App\Http\Controllers\IdiomaController@show');
    }
);

// RUTES DE LA TAULA RESTAURANTS
Route::group(
    ['prefix' => 'restaurants'],
    function () {
        Route::get('', 'App\Http\Controllers\RestaurantController@index');
        Route::get('{id}', 'App\Http\Controllers\RestaurantController@show');
        Route::delete('{id}', 'App\Http\Controllers\RestaurantController@delete');
        Route::post('', 'App\Http\Controllers\RestaurantController@store');
        Route::put('{id}', 'App\Http\Controllers\RestaurantController@update');
        Route::post('imatge/{id}', 'App\Http\Controllers\RestaurantController@imatge');
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
Route::group(['prefix' => 'serveis'], function () {
    Route::get('', 'App\Http\Controllers\ServeiController@index');
    Route::get('{id}', 'App\Http\Controllers\ServeiController@show');
    Route::delete('{id}', 'App\Http\Controllers\ServeiController@delete');
    Route::post('', 'App\Http\Controllers\ServeiController@store');
});

// RUTES DE LA TAULA TIPUS
Route::group(['prefix' => 'tipus'], function () {
    Route::get('', 'App\Http\Controllers\TipusController@index');
    Route::get('{id}', 'App\Http\Controllers\TipusController@show');
    Route::delete('{id}', 'App\Http\Controllers\TipusController@delete');
    Route::post('', 'App\Http\Controllers\TipusController@store');
});

// RUTES DE LA TAULA TRADUCCIONS
Route::group(['prefix' => 'traduccions'], function () {
    Route::get('', 'App\Http\Controllers\TraduccioController@index');
    Route::get('{id}', 'App\Http\Controllers\TraduccioController@show');
    Route::delete('{id}', 'App\Http\Controllers\TraduccioController@delete');
    Route::post('', 'App\Http\Controllers\TraduccioController@store');
});

// RUTES DE LA TAULA USUARIS
Route::group(['prefix' => 'usuaris'], function () {
    Route::get('', 'App\Http\Controllers\UsuariController@index');
    Route::get('{id}', 'App\Http\Controllers\UsuariController@show');
    Route::delete('{id}', 'App\Http\Controllers\UsuariController@delete');
    Route::post('', 'App\Http\Controllers\UsuariController@store');
    Route::put('{id}', 'App\Http\Controllers\UsuariController@update');
    Route::post('foto/{id}', 'App\Http\Controllers\UsuariController@fotoPerfil');
    Route::put('', 'App\Http\Controllers\UsuariController@canviPassword');
});
