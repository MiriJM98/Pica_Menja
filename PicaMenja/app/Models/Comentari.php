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

    // RELACIONS AMB ALTRES TAULES
    protected $with = ["usuaris", "restaurants"];

    public function usuaris()
    {
        return $this->belongsTo(Usuari::class, "id_usuari", "id_usuari");
    }

    public function restaurants()
    {
        return $this->belongsTo(Restaurant::class, "id_restaurant", "id_restaurant");
    }
}
