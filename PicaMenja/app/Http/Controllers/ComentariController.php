<?php

namespace App\Http\Controllers;

use App\Models\Comentari;
use Illuminate\Http\Request;

class ComentariController extends Controller
{
    // MOSTRAR TOTS ELS COMENTARIS
    // MÈTODE GET
    public function index()
    {
        $comentaris = Comentari::all();
        return response()->json($comentaris);
    }

    // MOSTRAR UN COMENTARI PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $comentari = Comentari::findOrFail($id);
        return response()->json($comentari);
    }

    // BORRAR UN COMENTARI PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $comentari = Comentari::findOrFail($id);
        $comentari->delete();
        return response()->json(["Status" => "Comentari amb id $id borrar correctament."], 200);
    }

    // INSERTAR UN NOU COMENTARI
    // MÈTODE POST
    public function store(Request $request)
    {
        $comentari = new Comentari();
        $comentari->comentari = $request->comentari;
        $comentari->data = $request->data;
        $comentari->id_usuari = $request->id_usuari;
        $comentari->id_restaurant = $request->id_restaurant;
        if ($comentari->save()) {
            return response()->json(["Status" => "Comentari creat correctament!", "Result" => $comentari], 201);
        } else {
            return response()->json(["Status" => "Error creant el comentari."], 400);
        }
    }

    // MODIFICAR UN COMENTARI PER EL SEU ID
    // MÈTODE PUT
    public function update(Request $request, $id)
    {
        $comentari = Comentari::findOrFail($id);
        if ($comentari->update($request->all())) {
            return response()->json(["Status" => "Comentari modificat correctament!", "Result" => $comentari], 200);
        } else {
            return response()->json(["Status" => "Error modificant el comentari."], 400);
        }
    }
}
