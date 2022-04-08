<?php

namespace App\Http\Controllers;

use App\Models\Restaurant_Servei;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Restaurant_ServeiController extends Controller
{
    public function delete($id_restaurant, $id_servei)
    {
        $tupla = Restaurant_Servei::where("id_restaurant", $id_restaurant)->where("id_servei", $id_servei)->delete();
        if ($tupla) {
            return response()->json(["Status" => "Servei del restaurant esborrat correctament"], 200);
        } else {
            return response()->json(["Status" => "Servei del restaurant no trobat."], 404);
        }
    }

    public function store(Request $request)
    {
        // Validam que les FK id_restaurant i id_servei existeixen
        $validacio = Validator::make($request->all(), [
            'id_restaurant' => 'exists:restaurants,id_restaurant',
            'id_servei' => 'exists:serveis,id_servei'
        ]);
        if (!$validacio->fails()) {
            $tupla = new Restaurant_Servei();
            $tupla->id_restaurant = $request->id_restaurant;
            $tupla->id_servei = $request->id_servei;
            if ($tupla->save()) {
                return response()->json(["Status" => "Restaurant amb servei creat", "Result" => $tupla], 201);
            } else {
                return response()->json(["Status" => "Error creant"], 409);
            }
        } else {
            return response()->json(["Status" => "Error. Restaurant o servei inexistents."], 404);
        }
    }
}
