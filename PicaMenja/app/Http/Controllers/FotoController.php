<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class FotoController extends Controller
{
    // MOSTRAR TOTES LES FOTOS
    // MÈTODE GET
    public function index()
    {
        $fotos = Foto::all();
        return response()->json($fotos);
    }

    // MOSTRAR UNA FOTO PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $foto = Foto::findOrFail($id);
        return response()->json($foto);
    }

    // BORRAR UNA FOTO PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $foto = Foto::findOrFail($id);
        $foto->delete();
        return response()->json(["Status" => "Foto amb id $id borrada correctament."], 200);
    }

    // INSERTAR UN NOU ID_FOTO I RELACIONAR-HO AMB UN ID_RESTAURANT
    // MÈTODE POST
    public function store(Request $request)
    {
        $validacio = Validator::make($request->all(), [
            'id_restaurant' => 'exists:restaurants,id_restaurant',
        ]);
        if (!$validacio->fails()) {
            $foto = new Foto();
            $foto->id_restaurant = $request->id_restaurant;
            $foto->id_foto = $request->id_foto;
            $foto->foto = $request->foto;
            if ($foto->save()) {
                return response()->json(["Status" => "ID_foto creat correctament!", "Result" => $foto], 201);
            } else {
                return response()->json(["Status" => "Error creant el ID_foto."], 400);
            }
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    // INSERTAR UNA NOVA FOTO
    // MÈTODE POST
    public function pujarFotos(Request $request, $id)
    {
        $validacio = Validator::make($request->all(), [
            'foto' => 'required|mimes:jpeg,jpg,bmp,png|max:10240',
        ]);
        $tupla = Foto::findOrFail($id);
        if (!$validacio->fails()) {
            $filename = "foto_restaurant$id" . "_" . time() . "." . $request->foto->extension();
            $request->foto->move(public_path('restaurants'), $filename);
            $urifoto = url('restaurants') . "/" . $filename;
            $tupla->foto = $urifoto;
            $tupla->save();
            return response()->json(["Status" => "Foto del restaurant amb id_foto $id pujada correctament!", "URI" => $urifoto], 200);
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    public function fotosRestaurant($id)
    {
        $resultat = DB::table('fotos')
            ->select(
                "id_restaurant",
                "foto"
            )
            ->where("id_restaurant", "=", $id)
            ->get();
        return response()->json($resultat);
    }
}
