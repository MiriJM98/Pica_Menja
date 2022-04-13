<?php

namespace App\Http\Controllers;

use App\Models\Valoracio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ValoracioController extends Controller
{
    // MOSTRAR TOTES LES VALORACIONS
    // MÈTODE GET
    public function index()
    {
        $valoracions = Valoracio::all();
        return response()->json($valoracions);
    }

    // MOSTRAR UNA VALORACIÓ PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $valoracio = Valoracio::findOrFail($id);
        return response()->json($valoracio);
    }

    // BORRAR UNA VALORACIÓ PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $valoracio = Valoracio::findOrFail($id);
        $valoracio->delete();
        return response()->json(["Status" => "Valoració amb id $id borrada correctament."], 200);
    }

    // INSERTAR UNA NOVA VALORACIÓ
    // MÈTODE POST
    public function store(Request $request)
    {

        $validacio = Validator::make(
            $request->all(),
            [
                "valoracio" => "required",
            ]
        );
        if (!$validacio->fails()) {
            $valoracio = new Valoracio();
            $valoracio->valoracio = $request->valoracio;
            $valoracio->id_usuari = $request->id_usuari;
            $valoracio->id_restaurant = $request->id_restaurant;
            if ($valoracio->save()) {
                return response()->json(["Status" => "Valoració creada correctament!", "Result" => $valoracio], 201);
            } else {
                return response()->json(["Status" => "Error creant la valoració."], 400);
            }
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    // MODIFICAR UNA VALORACIÓ PER EL SEU ID
    // MÈTODE PUT
    public function update(Request $request, $id)
    {
        $valoracio = Valoracio::findOrFail($id);
        if ($valoracio->update($request->all())) {
            return response()->json(["Status" => "Valoració modificada correctament!", "Result" => $valoracio], 200);
        } else {
            return response()->json(["Status" => "Error modificant la valoració."], 400);
        }
    }

    // FUNCIÓ PER MOSTRAR TOTES LES VALORACIONS D'UN RESTAURANT
    // MÈTODE GET
    public function valoracions($id)
    {
        $resultat = Valoracio::join("restaurants", "restaurants.id_restaurant", "=", "valoracions.id_restaurant")
            ->join("usuaris", "usuaris.id_usuari", "=", "valoracions.id_usuari")
            ->select("restaurants.nom as restaurant", "valoracions.valoracio", DB::raw("CONCAT(usuaris.nom_usuari,' ', usuaris.llinatges) AS usuari"), "usuaris.email")
            ->where("restaurants.id_restaurant", "=", $id)
            ->get();
        return response()->json($resultat);
    }
}
