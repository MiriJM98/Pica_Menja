<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentari extends Model
{
    protected $primaryKey = "id_comentari";
    public $timestamps = false;
    protected $fillable = ['comentari', 'data', 'id_usuari', 'id_restaurant'];
    use HasFactory;
}
