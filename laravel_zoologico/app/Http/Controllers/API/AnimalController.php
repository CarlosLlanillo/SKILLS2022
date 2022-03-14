<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $a = new Animal();
        $a->especie = $request->especie;
        $a->slug = Str::slug($request->especie);
        $a->peso = $request->peso;
        $a->altura = $request->altura;
        $a->fechaNacimiento = $request->fechaNacimiento;
        if ($request->hasFile('imagen')) {
            $imagen = $request->file('imagen');
            $extension = $imagen->getClientOriginalExtension();
            $compPic = str_replace(' ', '_', $a->especie . '-' . rand() . '_' . time() . '.' . $extension);
            $a->imagen = $imagen->storeAs('', $compPic, 'animales');
        }
        $a->alimentacion = $request->alimentacion;
        $a->descripcion = $request->descripcion;
        $a->save();
        return response()->json($a);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        /*$animal =  Animal::find($id);
        $animal->especie = $request->especie;
        $animal->slug = Str::slug($request->especie);
        $animal->peso = $request->peso;
        $animal->altura = $request->altura;
        $animal->fechaNacimiento = $request->fechaNacimiento;*/
        if ($request->hasFile('imagen')) {
            //Storage::disk('animales')->delete($animal->imagen);
            $completeName = $request->file('imagen')->getClientOriginalName();
            $fileName = pathinfo($completeName, PATHINFO_FILENAME);
            $extension = $request->file('imagen')->getClientOriginalExtension();
            $compPic = str_replace(' ', '_', $fileName . '-' . rand() . '_' . time() . '.' . $extension);
            //dd($completeName);
            dd($fileName);
            dd($compPic);
            //Storage::disk('animales')->put($imagen->getClientOriginalName(),file_get_contents($imagen));
            //$animal->imagen = $imagen->store('animales');
        }
        /*$animal->alimentacion = $request->alimentacion;
        $animal->descripcion = $request->descripcion;
        $animal->save();
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ]);*/
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
