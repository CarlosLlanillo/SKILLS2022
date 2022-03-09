<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function getAll()
	{
		$animales = Animal::all();
		return response()->json($animales);
	}
}
