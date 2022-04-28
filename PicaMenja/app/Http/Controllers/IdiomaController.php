<?php

namespace App\Http\Controllers;

use App\Models\Idioma;
use Illuminate\Http\Request;

class IdiomaController extends Controller
{
    // MOSTRAR TOTS ELS IDIOMES
    // MÈTODE GET
    public function index()
    {
        $idiomes = Idioma::all();
        return response()->json($idiomes);
    }

    // MOSTRAR UN IDIOMA
    // MÈTODE GET
    public function show($id)
    {
        $idioma = Idioma::findOrFail($id);
        return response()->json($idioma);
    }

    // INSERTAR UN IDIOMA
    // MÈTODE POST
    public function store(Request $request)
    {
        $idioma = new Idioma();
        $idioma->idioma = $request->idioma;

        if ($idioma->save()) {
            return response()->json(["Status" => "Idioma afegit correctament!", "Result" => $idioma], 201);
        } else {
            return response()->json(["Status" => "Error afegint l'idioma."], 400);
        }
    }
}
