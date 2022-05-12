<?php

namespace App\Http\Controllers;

use App\Models\Usuari;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    // FUNCIÓ PER FER LOGIN A L'APLICACIÓ
    // MÈTODE POST
    public function login(Request $request)
    {
        $usuari = Usuari::where("email", $request->input("email"))->first();
        if ($usuari && Hash::check($request->input("password"), $usuari->password)) {
            $apikey = base64_encode(Str::random(40));
            $usuari["token"] = $apikey;
            $token_valid_fins = date('Y-m-d H:i:s', strtotime('+30 minutes'));
            $usuari->token_valid_fins = $token_valid_fins;
            $usuari->save();
            return response()->json(["Status" => "Èxit! Login correcte!", "result" => $apikey, "id_usuari" => $usuari["id_usuari"], "token_valid" =>$token_valid_fins]);
        } else {
            return response()->json(["Status" => "Error. Login incorrecte."], 401);
        }
    }

    // FUNCIÓ PER FER LOGOUT DE L'APLICACIÓ
    // MÈTODE POST
    public function logout(Request $request)
    {
        $key = explode(' ', $request->header('Authorization'));
        $token = $key[1];
        $usuari = Usuari::where('token', $token)->first();
        if ($usuari["token"] == $token) {
            $usuari->token = null;
            $usuari->save();
            return response()->json(['Status' => 'Token eliminat correctament! Logout correcte.'], 200);
        } else {
            return response()->json(['Status' => "Fail. No s'ha pogut eliminar el token. Logout incorrecte."], 400);
        }
    }
}
