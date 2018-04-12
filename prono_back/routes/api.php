<?php

use Illuminate\Http\Request;

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

Route::get('equipes', 'EquipeController@index')->middleware('cors');
Route::get('equipes/{equipe}', 'EquipeController@show')->middleware('cors');
Route::post('equipes', 'EquipeController@create')->middleware('cors');
Route::put('equipes/{equipe}', 'EquipeController@update')->middleware('cors');
Route::delete('equipes/{equipe}', 'EquipeController@delete')->middleware('cors');


Route::get('matches', 'MatchController@index')->middleware('cors');
Route::get('matches/{match}', 'MatchController@show')->middleware('cors');
Route::delete('matches/{match}', 'MatchController@delete')->middleware('cors');
Route::post('matches', 'MatchController@create')->middleware('cors');
Route::put('matches/{match}', 'MatchController@update')->middleware('cors');


Route::get('pronostics', 'PronosticController@index')->middleware('cors');
Route::get('pronostics/{pronostic}', 'PronosticController@show')->middleware('cors');
Route::delete('pronostics/{pronostic}', 'PronosticController@delete')->middleware('cors');
Route::post('pronostics', 'PronosticController@create')->middleware('cors');
Route::put('pronostics/{pronostic}', 'PronosticController@update')->middleware('cors');