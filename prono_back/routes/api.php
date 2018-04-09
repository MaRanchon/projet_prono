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

Route::get('equipes', 'EquipeController@index');
Route::get('equipes/{equipe}', 'EquipeController@show');
Route::post('equipes', 'EquipeController@store'); // Not Working
Route::put('equipes/{equipe}', 'EquipeController@update'); // Not Working
Route::delete('equipes/{equipe}', 'EquipeController@delete');


Route::get('matches', 'MatchController@index');
Route::get('matches/{match}', 'MatchController@show');
Route::delete('matches/{match}', 'MatchController@delete');


Route::get('pronostics', 'PronosticController@index');
Route::get('pronostics/{pronostic}', 'PronosticController@show');
Route::delete('pronostics/{pronostic}', 'PronosticController@delete');