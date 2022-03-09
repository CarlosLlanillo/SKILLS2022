@extends('layouts.master')
@section('titulo')
    Zoológico - Añadir revision {{ $animal->especie }}
@endsection
@section('contenido')
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">
                    Añadir revision a {{ $animal->especie }}
                </div>
                <div class="card-body" style="padding:30px">
                    {{-- TODO: Abrir el formulario e indicar el método POST --}}
                    {{-- TODO: Protección contra CSRF --}}
                    <form action="{{ route('revisiones.store', $animal) }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="fecha">Fecha</label>
                            <input type="date" name="fecha" id="fecha" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripcion</label>
                            <textarea class="form-control" name="descripcion" id="descripcion" rows="3" required></textarea>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                                Añadir revision a {{ $animal->especie }}
                            </button>
                        </div>
                        {{-- TODO: Cerrar formulario --}}
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
