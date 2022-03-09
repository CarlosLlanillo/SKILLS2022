@extends('layouts.master')
@section('titulo')
    Zoológico - Crear Animal
@endsection
@section('contenido')
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">
                    Añadir animal
                </div>
                <div class="card-body" style="padding:30px">
                    {{-- TODO: Abrir el formulario e indicar el método POST --}}
                    {{-- TODO: Protección contra CSRF --}}
                    <form action="{{ route('animales.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="especie">Especie</label>
                            <input type="text" name="especie" id="especie" class="form-control">
                            @error('especie')
                                <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group">
                            {{-- TODO: Completa el input para el peso --}}
                            <label for="peso">Peso</label>
                            <input type="number" name="peso" id="peso" class="form-control">
                            @error('peso')
                                <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group">
                            {{-- TODO: Completa el input para la altura --}}
                            <label for="altura">altura</label>
                            <input type="number" name="altura" id="altura" class="form-control">
                            @error('altura')
                                <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group">
                            {{-- TODO: Completa el input para la fecha de nacimiento --}}
                            <label for="fechaNacimiento">fechaNacimiento</label>
                            <input type="date" name="fechaNacimiento" id="fechaNacimiento" class="form-control">
                        </div>
                        <div class="form-group">
                            {{-- TODO: Completa el input para la alimentación --}}
                            <label for="alimentacion">alimentacion</label>
                            <input type="text" name="alimentacion" id="alimentacion" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripción</label>
                            <textarea name="descripcion" id="descripcion" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            {{-- TODO: Completa el input para la imagen --}}
                            <label for="imagen">imagen</label>
                            <input type="file" name="imagen">
                            @error('imagen')
                                <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                                Añadir animal
                            </button>
                        </div>
                        {{-- TODO: Cerrar formulario --}}
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
