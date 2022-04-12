<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RestaurantController extends Controller
{
    // MOSTRAR TOTS ELS RESTAURANTS
    // MÈTODE GET
    public function index()
    {
        $restaurants = Restaurant::all();
        return response()->json($restaurants);
    }

    // MOSTRAR UN RESTAURANT PER EL SEU ID
    // MÈTODE GET
    public function show($id)
    {
        $restaurant = Restaurant::findOrFail($id);
        return response()->json($restaurant);
    }

    // BORRAR UN RESTAURANT PER EL SEU ID
    // MÈTODE DELETE
    public function delete($id)
    {
        $restaurant = Restaurant::findOrFail($id);
        $restaurant->delete();
        return response()->json(["Status" => "Restaurant amb id $id borrat correctament."], 200);
    }

    // INSERTAR UN NOU RESTAURANT
    // MÈTODE POST
    public function store(Request $request)
    {
        $restaurant = new Restaurant();
        $restaurant->nom = $request->nom;
        $restaurant->telefon = $request->telefon;
        $restaurant->pagina_web = $request->pagina_web;
        $restaurant->ubicacio = $request->ubicacio;
        $restaurant->horari_ca = $request->horari_ca;
        $restaurant->horari_es = $request->horari_es;
        $restaurant->horari_en = $request->horari_en;
        $restaurant->horari_de = $request->horari_de;
        $restaurant->descripcio_ca = $request->descripcio_ca;
        $restaurant->descripcio_es = $request->descripcio_es;
        $restaurant->descripcio_en = $request->descripcio_en;
        $restaurant->descripcio_de = $request->descripcio_de;
        $restaurant->imatge = $request->imatge;
        $restaurant->carta = $request->carta;
        $restaurant->rang_preus = $request->rang_preus;
        $restaurant->id_tipus = $request->id_tipus;
        if ($restaurant->save()) {
            return response()->json(["Status" => "Restaurant creat amb èxit!", "Result" => $restaurant], 201);
        } else {
            return response()->json(["Status" => "Error creant el restaurant."], 400);
        }
    }

    // MODIFICAR UN RESTAURANT PER EL SEU ID
    // MÈTODE PUT
    public function update(Request $request, $id)
    {
        $restaurant = Restaurant::findOrFail($id);
        if ($restaurant->update($request->all())) {
            return response()->json(["Status" => "Restaurant modificat amb èxit!", "Result" => $restaurant], 200);
        } else {
            return response()->json(["Status" => "Error modificant el restaurant."], 400);
        }
    }

    // INSERTAR UNA IMATGE AL RESTAURANT
    // MÈTODE POST
    public function imatge(Request $request, $id)
    {
        $validacio = Validator::make($request->all(), [
            'imatge' => 'required|mimes:jpeg,jpg,bmp,png|max:10240',
        ]);
        $tupla = Restaurant::findOrFail($id);
        if (!$validacio->fails()) {
            $filename = "restaurant$id" . "_" . time() . "." . $request->imatge->extension();
            $request->imatge->move(public_path('restaurants'), $filename);
            $urifoto = url('restaurants') . "/" . $filename;
            $tupla->imatge = $urifoto;
            $tupla->save();
            return response()->json(["Status" => "Imatge del restaurant pujada correctament!", "URI" => $urifoto], 200);
        } else {
            return response()->json(["Status" => "Error: tipus o tamany de la imatge malament.", 404]);
        }
    }

    public function tipusCa($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_ca", "restaurants.nom", "restaurants.telefon", "restaurants.pagina_web", "restaurants.ubicacio", "restaurants.horari_ca", "restaurants.rang_preus", "restaurants.descripcio_ca")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    public function tipusEs($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_es", "restaurants.nom", "restaurants.telefon", "restaurants.pagina_web", "restaurants.ubicacio", "restaurants.horari_es", "restaurants.rang_preus", "restaurants.descripcio_es")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    public function tipusEn($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_en", "restaurants.nom", "restaurants.telefon", "restaurants.pagina_web", "restaurants.ubicacio", "restaurants.horari_en", "restaurants.rang_preus", "restaurants.descripcio_en")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    public function tipusDe($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_de", "restaurants.nom", "restaurants.telefon", "restaurants.pagina_web", "restaurants.ubicacio", "restaurants.horari_de", "restaurants.rang_preus", "restaurants.descripcio_de")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }
}
