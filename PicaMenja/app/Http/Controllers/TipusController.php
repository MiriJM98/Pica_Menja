<?php

namespace App\Http\Controllers;

use App\Models\Tipus;
use Illuminate\Http\Request;

class TipusController extends Controller
{
    // MOSTRAR TOTS ELS TIPUS DE RESTAURANTS
    // MÈTODE GET
    public function index()
    {
        $tipus = Tipus::all();
        return response()->json($tipus);
    }

    // MOSTRAR UN TIPUS PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $tipus = Tipus::findOrFail($id);
        return response()->json($tipus);
    }

    // BORRAR UN TIPUS PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $tipus = Tipus::findOrFail($id);
        $tipus->delete();
        return response()->json(["Status" => "Tipus amd id $id borrat correctament!"], 200);
    }

    // INSERTAR UN NOU TIPUS
    // MÈTODE POST
    public function store(Request $request)
    {
        $tipus = new Tipus();
        $tipus->tipus_ca = $request->tipus_ca;
        $tipus->tipus_es = $request->tipus_es;
        $tipus->tipus_en = $request->tipus_en;
        $tipus->tipus_de = $request->tipus_de;
        if ($tipus->save()) {
            return response()->json(["Status" => "Tipus creat correctament!", "Result" => $tipus], 201);
        } else {
            return response()->json(["Status" => "Error creant el tipus."], 400);
        }
    }
}
