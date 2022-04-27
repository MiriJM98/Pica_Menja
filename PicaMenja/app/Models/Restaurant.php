<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $primaryKey = "id_restaurant";
    public $timestamps = false;
    protected $fillable = ['nom', 'telefon', 'pagina_web', 'ubicacio', 'horari_ca', 'horari_es', 'horari_en', 'horari_de', 'descripcio_ca', 'descripcio_es', 'descripcio_en', 'descripcio_de', 'imatge', 'carta', 'id_tipus'];
    use HasFactory;

    // RELACIONS
    protected $with = ["tipus"];

    public function tipus()
    {
        return $this->belongsTo(Tipus::class, "id_tipus", "id_tipus");
    }
}
