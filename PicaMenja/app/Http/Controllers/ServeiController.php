<?php

namespace App\Http\Controllers;

use App\Models\Servei;
use Illuminate\Http\Request;

class ServeiController extends Controller
{
    // MOSTRAR TOTS ELS SERVEIS
    // MÈTODE GET
    public function index()
    {
        $serveis = Servei::all();
        return response()->json($serveis);
    }

    // MOSTRAR UN SERVEI PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $servei = Servei::findOrFail($id);
        return response()->json($servei);
    }

    // BORRAR UN SERVEI PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $servei = Servei::findOrFail($id);
        $servei->delete();
        return response()->json(["Status" => "Servei amb id $id borrar correctament."], 200);
    }

    // INSERTAR UN NOU SERVEI
    // MÈTODE POST
    public function store(Request $request)
    {
        $servei = new Servei();
        $servei->servei_ca = $request->servei_ca;
        $servei->servei_es = $request->servei_es;
        $servei->servei_en = $request->servei_en;
        $servei->servei_de = $request->servei_de;
        if ($servei->save()) {
            return response()->json(["Status" => "Servei creat correctament!", "Result" => $servei], 201);
        } else {
            return response()->json(["Status" => "Error creant el servei."], 400);
        }
    }
}
