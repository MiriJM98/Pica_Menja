<?php

namespace App\Http\Controllers;

use App\Models\Traduccio;
use Illuminate\Http\Request;

class TraduccioController extends Controller
{
    // MOSTRAR TOTES LES TRADUCCIONS
    // MÈTODE GET
    public function index()
    {
        $traduccions = Traduccio::all();
        return response()->json($traduccions);
    }

    // MOSTRAR UNA TRADUCCIÓ PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $traduccio = Traduccio::findOrFail($id);
        return response()->json($traduccio);
    }

    // BORRAR UNA TRADUCCIÓ PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $traduccio = Traduccio::findOrFail($id);
        $traduccio->delete();
        return response()->json(["Status" => "Traducció amb id $id borrar correctament."], 200);
    }

    // INSERTAR UN NOVA TRADUCCIÓ
    // MÈTODE POST
    public function store(Request $request)
    {
        $traduccio = new Traduccio();
        $traduccio->catala = $request->catala;
        $traduccio->espanyol = $request->espanyol;
        $traduccio->english = $request->english;
        $traduccio->deutsch = $request->deutsch;
        if ($traduccio->save()) {
            return response()->json(["Status" => "Traducció creada correctament!", "Result" => $traduccio], 201);
        } else {
            return response()->json(["Status" => "Error creant la traducció."], 400);
        }
    }
}
