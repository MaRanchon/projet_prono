<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    protected $fillable = ['equipe1', 'nomEquipe1', 'equipe2', 'nomEquipe2', 'equipeGagante', 'scoreReelEquipe1', 'scoreReelEquipe2', 'verouillage', 'created_at', 'updated_at'];
}
