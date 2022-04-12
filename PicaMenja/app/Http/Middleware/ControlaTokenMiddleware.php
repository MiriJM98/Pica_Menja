<?php

namespace App\Http\Middleware;

use App\Models\Usuari;
use Closure;
use Illuminate\Http\Request;

class ControlaTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->header('Authorization')) {
            $key = explode(' ', $request->header('Authorization'));
            $token = $key[1];
            $ara = date("Y-m-d H:i:s");
            $usuari = Usuari::where('token', $token)->first();
            if (!empty($usuari)) {
                if ($usuari->token_valid_fins > $ara) {
                    $limit = date("Y-m-d H:i:s", strtotime('+30 minutes'));
                    $usuari->token_valid_fins = $limit;
                    $usuari->save();
                    return $next($request);
                } else {
                    return response()->json(['Error' => 'Temps de login expirat'], 401);
                }
            } else {
                return response()->json(['Error' => 'Accés no autoritzat'], 403);
            }
        } else {
            return response()->json(['error' => 'Token no rebut'], 401);
        }
    }
}
