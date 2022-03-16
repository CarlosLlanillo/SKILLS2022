<?php

namespace App\Http\Controllers;

use App\Http\Requests\CrearAnimalRequest;
use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AnimalController extends Controller
{
	public function index()
	{
		$animales = Animal::all();
		return view('animales.index', ['animales' => $animales]);
		//return response()->json($animales);
	}
	public function create()
	{
		return view('animales.create');
	}
	public function show(Animal $animal)
	{
		return view('animales.show', ['animal' => $animal]);
	}
	public function edit(Animal $animal)
	{
		return view('animales.edit', ['animal' => $animal]);
	}

	public function store(CrearAnimalRequest $request)
	{
		$a = new Animal();
		$a->especie = $request->especie;
		$a->slug = Str::slug($request->especie);
		$a->peso = $request->peso;
		$a->altura = $request->altura;
		$a->fechaNacimiento = $request->fechaNacimiento;
		$a->imagen = $request->imagen->store("",'animales');
		$a->alimentacion = $request->alimentacion;
		$a->descripcion = $request->descripcion;
		$a->save();
		return redirect()->route('animales.show',$a)->with('mensaje',"$a->especie guardado correctamente");
	}

	public function update(Request $request,Animal $animal)
	{
		$animal->especie = $request->especie;
		$animal->slug = Str::slug($request->especie);
		$animal->peso = $request->peso;
		$animal->altura = $request->altura;
		$animal->fechaNacimiento = $request->fechaNacimiento;
		if (!empty($request->imagen) && $request->imagen->isValid()) {
			Storage::disk('animales')->delete($animal->imagen);
			$animal->imagen = $request->imagen->store("",'animales');
		}
		$animal->alimentacion = $request->alimentacion;
		$animal->descripcion = $request->descripcion;
		$animal->save();
		return redirect()->route('animales.show',$animal)->with('mensaje',"$animal->especie actualizado correctamente");
	}
}
