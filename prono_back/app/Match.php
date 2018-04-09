<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    protected $fillable = ['id_equipe_1', 'id_equipe_2', 'equipe_gagante', 'score_reel_equipe_1', 'score_reel_equipe_2', 'verouillage'];
}
