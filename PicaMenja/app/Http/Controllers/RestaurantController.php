<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            $request->imatge->move(public_path('fotosportada'), $filename);
            $urifoto = url('fotosportada') . "/" . $filename;
            $tupla->imatge = $urifoto;
            $tupla->save();
            return response()->json(["Status" => "Imatge del restaurant pujada correctament!", "URI" => $urifoto], 200);
        } else {
            return response()->json($validacio->getMessageBag());
        }
    }

    /* ---FUNCIONS PER FILTRAR PER TIPUS DE RESTAURANT EN CADA IDIOMA--- */

    // FUNCIÓ PER FILTRAR EN CATALÀ
    // MÈTODE GET
    public function tipusCa($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select(
                "tipus.tipus_ca as tipus",
                "restaurants.nom as restaurant",
                "restaurants.telefon",
                "restaurants.pagina_web as pàgina web",
                "restaurants.ubicacio",
                "restaurants.horari_ca as horari",
                "restaurants.rang_preus as rang de preus",
                "restaurants.descripcio_ca as descripció"
            )
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    // FUNCIÓ PER FILTRAR EN ESPANYOL
    // MÈTODE GET
    public function tipusEs($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select(
                "tipus.tipus_es as tipo",
                "restaurants.nom as restaurante",
                "restaurants.telefon as teléfono",
                "restaurants.pagina_web as página web",
                "restaurants.ubicacio as ubicación",
                "restaurants.horari_es as horario",
                "restaurants.rang_preus as rango de precios",
                "restaurants.descripcio_es as descripción"
            )
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    // FUNCIÓ PER FILTRAR EN ANGLÈS
    // MÈTODE GET
    public function tipusEn($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_en as type", "restaurants.nom as name", "restaurants.telefon as telephone", "restaurants.pagina_web as web page", "restaurants.ubicacio as location", "restaurants.horari_en as schedule", "restaurants.rang_preus as price range", "restaurants.descripcio_en as description")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    // FUNCIÓ PER FILTRAR EN ALEMANY
    // MÈTODE GET
    public function tipusDe($id)
    {
        $resultat = Restaurant::join("tipus", "tipus.id_tipus", "=", "restaurants.id_tipus")
            ->select("tipus.tipus_de as typ", "restaurants.nom as name", "restaurants.telefon as telefon", "restaurants.pagina_web as website", "restaurants.ubicacio as standort", "restaurants.horari_de as plan", "restaurants.rang_preus as preisklasse", "restaurants.descripcio_de as bezeichnung")
            ->where("tipus.id_tipus", "=", $id)
            ->get();
        return response()->json($resultat);
    }

    // FUNCIÓ PER FILTRAR PER RANG DE PREUS
    // MÈTODE GET
    public function rangPreus($rang)
    {
        $resultat = DB::table('restaurants')
            ->select(
                "nom",
                "telefon",
                "ubicacio",
                "pagina_web",
                "rang_preus"
            )
            ->where("rang_preus", "like", "$rang")
            ->get();
        return response()->json($resultat);
    }

    // FUNCIÓ PER PUJAR LA CARTA D'UN RESTAURANT
    // MÈTODE POST
    public function carta(Request $request, $id)
    {
        $validacio = Validator::make($request->all(), [
            'carta' => 'required|mimes:pdf|max:10240',
        ]);
        $tupla = Restaurant::findOrFail($id);
        if (!$validacio->fails()) {
            $filename = "carta_restaurant$id" . "_" . time() . "." . $request->carta->extension();
            $request->carta->move(public_path('cartes'), $filename);
            $uricarta = url('cartes') . "/" . $filename;
            $tupla->carta = $uricarta;
            $tupla->save();
            return response()->json(["Status" => "Carta del restaurant pujada correctament!", "URI" => $uricarta], 200);
        } else {
            return response()->json(["Status" => "Error: tipus o tamany de la carta malament.", 404]);
        }
    }
}
