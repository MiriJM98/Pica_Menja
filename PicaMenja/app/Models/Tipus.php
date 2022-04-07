<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipus extends Model
{
    protected $table = "tipus";
    protected $primaryKey = "id_tipus";
    public $timestamps = false;
    protected $fillable = ['tipus_ca', 'tipus_es', 'tipus_en', 'tipus_de'];
    use HasFactory;
}
