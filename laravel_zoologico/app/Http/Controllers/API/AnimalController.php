<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Animal;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $animales = Animal::all();
        return response()->json($animales);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       /* $a = new Animal();
        $a->especie = $request->especie;
        //$a->slug = Str::slug($request->especie);
        //$a->peso = $request->peso;
        //$a->altura = $request->altura;
        //$a->fechaNacimiento = $request->fechaNacimiento;
        //$a->imagen = $request->imagen->store("",'animales');
        $a->alimentacion = $request->alimentacion;
        $a->descripcion = $request->descripcion;
        $a->save();*/
        $animal['especie'] = $request->especie;
        $animal['peso'] = 0;
        $animal['altura'] = 0;
        $animal['fechaNacimiento'] = now();
        $animal['alimentacion'] = $request->alimentacion;
        $animal['descripcion'] = $request->descripcion;
        $animal['slug'] = Str::slug($request->especie);
        Animal::create($animal);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $animal = Animal::find($id);
        return response()->json($animal);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $animal['especie'] = $request->especie;
        $animal['peso'] = 0;
        $animal['altura'] = 0;
        $animal['fechaNacimiento'] = now();
        $animal['alimentacion'] = $request->alimentacion;
        $animal['descripcion'] = $request->descripcion;
        $animal['slug'] = Str::slug($request->especie);
        Animal::find($id)->update($animal);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = Animal::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ]);
    }
}
