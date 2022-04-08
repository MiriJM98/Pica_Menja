<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuari extends Model
{
    protected $primaryKey = "id_usuari";
    public $timestamps = false;
    protected $fillable = ["nom_usuari", "llinatges", "telefon", "direccio", "data_naixement", "email", "password", "administrador", "foto_perfil", "token"];
    use HasFactory;
}
