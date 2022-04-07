<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valoracio extends Model
{
    protected $table = 'valoracions';
    protected $primaryKey = 'id_valoracio';
    public $timestamps = false;
    protected $fillable = ['valoracio', 'id_usuari', 'id_restaurant'];
    use HasFactory;
}
