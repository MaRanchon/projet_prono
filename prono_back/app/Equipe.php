<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    protected $fillable = ['id', 'Nom', 'nb_victoires', 'nb_defaites', 'pool', 'created_at', 'updated_at'];
}
