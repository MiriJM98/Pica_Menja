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
        if (!$validacio->fails()) {
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
            if ($usuari->save()) {
                return response()->json(["Status" => "Usuari creat correctament!", "Result" => $usuari], 201);
            } else {
                return response()->json(["Status" => "Error creant l'usuari."], 400);
            }
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    // MODIFICAR UN USUARI
    // MÈTODE PUT
    public function update(Request $request, $id)
    {
        $usuari = Usuari::findOrFail($id);
        if ($usuari->update($request->all())) {
            return response()->json(["Status" => "Usuari modificat amb èxit!", "Result" => $usuari], 200);
        } else {
            return response()->json(["Status" => "Error modificant l'usuari."], 400);
        }
    }

    // INSERTAR UNA IMATGE AL PERFIL DE L'USUARI
    // MÈTODE POST
    public function fotoPerfil(Request $request, $id)
    {
        $validacio = Validator::make($request->all(), [
            'foto_perfil' => 'required|mimes:jpeg,jpg,bmp,png|max:102400',
        ]);
        $tupla = Usuari::findOrFail($id);
        if (!$validacio->fails()) {
            $filename = "usuari$id" . "_" . time() . "." . $request->foto_perfil->extension();
            $request->foto_perfil->move(public_path('usuaris'), $filename);
            $urifoto = url('usuaris') . "/" . $filename;
            $tupla->foto_perfil = $urifoto;
            $tupla->save();
            return response()->json(["Status" => "Imatge del perfil pujada correctament!", "URI" => $urifoto], 200);
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    // CANVIAR LA CONTRASENYA DE L'USUARI
    // MÈTODE PUT
    public function canviPassword(Request $request)
    {
        $validacio = Validator::make(
            $request->all(),
            [
                'password' => 'required',
                'email' => 'required'
            ]
        );

        if (!$validacio->fails()) {
            $password = Hash::make($request->password);
            $usuari = Usuari::where("email", $request->email)->first();
            $usuari->password = $password;
            if ($usuari->save($request->all())) {
                return response()->json(["Status" => "Contrasenya modificada correctament!", "Usuari" => $usuari["email"], "Contrasenya" => $usuari["password"]], 200);
            } else {
                return response()->json(["Status" => "Error canviant la contrasenya."], 400);
            }
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }
}
