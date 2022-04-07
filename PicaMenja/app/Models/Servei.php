<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servei extends Model
{
    protected $primaryKey = "id_servei";
    public $timestamps = false;
    protected $fillable = ['servei_ca', 'servei_es', 'servei_en', 'servei_de'];
    use HasFactory;
}
