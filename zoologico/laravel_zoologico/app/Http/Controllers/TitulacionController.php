<?php

namespace App\Http\Controllers;

use App\Models\Titulacion;
use Illuminate\Http\Request;

class TitulacionController extends Controller
{
    public function show(Titulacion $titulacion)
	{
		return view('titulaciones.show', compact('titulacion'));
	}
}
