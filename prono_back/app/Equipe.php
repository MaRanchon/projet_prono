<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    protected $fillable = ['Nom', 'nb_victoires', 'nb_defaites', 'pool'];
}
