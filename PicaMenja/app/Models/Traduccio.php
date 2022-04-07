<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traduccio extends Model
{
    protected $table = "traduccions";
    protected $primaryKey = "id_traduccio";
    public $timestamps = false;
    protected $fillable = ['catala', 'espanyol', 'english', 'deutsch'];
    use HasFactory;
}
