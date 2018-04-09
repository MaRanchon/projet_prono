<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pronostic extends Model
{
    protected $fillable = ['idUser', 'idMatch', 'scoreEquipe1', 'scoreEquipe2', 'equipeGagnante'];
}