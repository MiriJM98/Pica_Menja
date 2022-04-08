<?php

namespace App\Http\Controllers;

use App\Models\Idioma;

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
}
