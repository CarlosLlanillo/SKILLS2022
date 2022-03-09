@extends('layouts.master')
@section('titulo')
Zoológico - Editar 
@endsection
@section('contenido')
<div class="row">
    <div class="offset-md-3 col-md-6">
        <div class="card">
            <div class="card-header text-center">
                Editar {{$animal->especie}}
            </div>
            <div class="card-body" style="padding:30px">
                {{-- TODO: Abrir el formulario e indicar el método POST --}}
                {{-- TODO: Protección contra CSRF --}}
                <form action="{{ route('animales.update', $animal) }}" method="post">
                    @csrf
                    <div class="form-group">
                        <label for="especie">Especie</label>
                        <input type="text" name="especie" id="especie" class="form-control" required value="{{$animal->especie}}">
                    </div>
                    <div class="form-group">
                        {{-- TODO: Completa el input para el peso --}}
                        <label for="peso">Peso</label>
                        <input type="text" name="peso" id="peso" class="form-control" required value="{{$animal->peso}}">
                    </div>
                    <div class="form-group">
                        {{-- TODO: Completa el input para la altura --}}
                        <label for="altura">altura</label>
                        <input type="text" name="altura" id="altura" class="form-control" required value="{{$animal->altura}}">
                    </div>
                    <div class="form-group">
                        {{-- TODO: Completa el input para la fecha de nacimiento --}}
                        <label for="fechaNacimiento">fechaNacimiento</label>
                        <input type="text" name="fechaNacimiento" id="fechaNacimiento" class="form-control" required value="{{$animal->fechaNacimiento}}">
                    </div>
                    <div class="form-group">
                        {{-- TODO: Completa el input para la alimentación --}}
                        <label for="alimentacion">alimentacion</label>
                        <input type="text" name="alimentacion" id="alimentacion" class="form-control" required value="{{$animal->alimentacion}}">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripción</label>
                        <textarea name="descripcion" id="descripcion" class="form-control" rows="3">{{$animal->descripcion}}"</textarea>
                    </div>
                    <div class="form-group">
                        {{-- TODO: Completa el input para la imagen --}}
                        <label for="imagen">imagen</label>
                        <input type="file" name="imagen">
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                            Editar
                        </button>
                    </div>
                    {{-- TODO: Cerrar formulario --}}
                </form>
            </div>
        </div>
    </div>
</div>
@endsection