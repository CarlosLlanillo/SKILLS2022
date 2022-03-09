<?php

namespace App\Http\Controllers;

use App\Models\Cuidador;
use Illuminate\Http\Request;

class CuidadorController extends Controller
{
    public function show(Cuidador $cuidador)
	{
		return view('cuidadores.show', compact('cuidador'));
	}
}
