<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Idioma extends Model
{
    protected $table = "idiomes";
    protected $primaryKey = "id_idioma";
    public $timestamps = false;
    use HasFactory;
}
