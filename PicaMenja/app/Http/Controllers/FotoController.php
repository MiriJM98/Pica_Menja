<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FotoController extends Controller
{
    // FUNCIÓ PER INSERTAR UNA IMATGE A UN RESTAURANT
    // MÈTODE POST
    public function fotos(Request $request)
    {
        // Validam que les FK id_restaurant i id_servei existeixen
        $validacio = Validator::make($request->all(), [
            'id_restaurant' => 'exists:fotos,id_restaurant',
            'foto' => 'required|mimes:jpeg,jpg,bmp,png|max:10240'
        ]);

        $tupla = new Foto();
        if (!$validacio->fails()) {
            $filename = "restaurantFoto" . "_" . time() . "." . $request->foto->extension();
            $request->foto->move(public_path('restaurants'), $filename);
            $urifoto = url('restaurants') . "/" . $filename;
            $tupla->foto = $urifoto;
            $tupla->id_restaurant = $request->id_restaurant;
            $tupla->save();
            return response()->json(["Status" => "Foto del restaurant adjuntada correctament!", "URI" => $urifoto], 200);
        } else {
            return response()->json(["Status" => "Error: tipus o tamany de la foto malament.", 404]);
        }
    }
}
