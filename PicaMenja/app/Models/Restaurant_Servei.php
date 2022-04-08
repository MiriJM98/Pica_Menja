<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant_Servei extends Model
{
    protected $table = "restaurants_serveis";
    protected $primaryKey = ["id_restaurant", "id_servei"];
    protected $fillable = ["id_restaurant", "id_servei"];
    public $timestamps = false;
    public $incrementing = false;
    use HasFactory;
}
