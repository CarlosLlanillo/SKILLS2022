<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Models\Revision;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class RevisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Animal $animal)
    {
        return view('animales.revisiones.create', ['animal' => $animal]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Animal $animal)
    {
        //$r = Revision::create($request->all());
        $r = new Revision();
        $r->fecha=$request->fecha;
        $r->descripcion=$request->descripcion;
        $r->animal_id = $animal->id;
        $r->save();
        return redirect()->route('animales.show',$animal)->with('mensaje',"Revision $animal->especie guardado correctamente");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Revision  $revision
     * @return \Illuminate\Http\Response
     */
    public function show(Revision $revision)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Revision  $revision
     * @return \Illuminate\Http\Response
     */
    public function edit(Revision $revision)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Revision  $revision
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Revision $revision)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Revision  $revision
     * @return \Illuminate\Http\Response
     */
    public function destroy(Revision $revision)
    {
        
    }
}
