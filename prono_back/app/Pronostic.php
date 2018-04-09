<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pronostic extends Model
{
    protected $fillable = ['id_user', 'id_match', 'score_equipe_1', 'score_equipe_2', 'equipe_gagnante'];
}