<?php

namespace App\Http\Controllers;

use App\Models\Tipus;
use Illuminate\Http\Request;

class TipusController extends Controller
{
    // MOSTRAR TOTS ELS TIPUS DE RESTAURANTS
    // MÈTODE GET
    public function index()
    {
        $tipus = Tipus::all();
        return response()->json($tipus);
    }
}
