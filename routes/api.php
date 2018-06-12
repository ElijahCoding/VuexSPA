<?php

use Illuminate\Http\Request;

Route::post('/register', 'Auth\AuthController@register');
Route::post('/login', 'Auth\AuthController@login');
Route::get('/me', 'Auth\AuthController@user');
Route::post('/logout', 'Auth\AuthController@logout');

// Protect
Route::group(['middleware' => 'jwt.auth'], function() {
  Route::get('/me', 'Auth\AuthController@user');

  Route::get('/timeline', 'TimelineController@index');
});
