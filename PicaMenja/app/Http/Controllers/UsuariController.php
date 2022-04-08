<?php

namespace App\Http\Controllers;

use App\Models\Usuari;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsuariController extends Controller
{
    // MOSTRAR TOTS ELS USUARIS
    // MÈTODE GET
    public function index()
    {
        $usuaris = Usuari::all();
        return response()->json($usuaris);
    }

    // MOSTRAR UN USUARI PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $usuari = Usuari::findOrFail($id);
        return response()->json($usuari);
    }

    // BORRAR UN USUARI PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $usuari = Usuari::findOrFail($id);
        $usuari->delete();
        return response()->json(["Status" => "Usuari amd id $id borrat correctament!"], 200);
    }

    // INSERTAR UN NOU USUARI
    // MÈTODE POST
    public function store(Request $request)
    {
        $validacio = Validator::make(
            $request->all(),
            [
                "nom_usuari" => "required",
                "password" => "required",
                "email" => "required|email|unique:usuaris,email"
            ]
        );

        // ENCRIPTACIÓ DE LA CONTRASENYA
        if (!$validacio->failed()) {
            $password = Hash::make($request->password);
            $usuari = new Usuari();
            $usuari->nom_usuari = $request->nom_usuari;
            $usuari->llinatges = $request->llinatges;
            $usuari->telefon = $request->telefon;
            $usuari->direccio = $request->direccio;
            $usuari->data_naixement = $request->data_naixement;
            $usuari->email = $request->email;
            $usuari->password = $password;
            $usuari->administrador = $request->administrador;
            $usuari->foto_perfil = $request->foto_perfil;
            $usuari->token = $request->token;
            if ($usuari->save()) {
                return response()->json(["Status" => "Usuari creat correctament!", "Result" => $usuari], 201);
            } else {
                return response()->json(["Status" => "Error creant l'usuari."], 400);
            }
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    // TO DO: MODIFICAR USUARI
}
