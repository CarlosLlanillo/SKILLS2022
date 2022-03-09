@extends('layouts.master')
@section('titulo')
    Zoológico - {{ $cuidador->nombre }}
@endsection
@section('contenido')
    <div class="row">
        <div class="col-sm-9">
            {{-- TODO: Datos del cuidador --}}
            <h4>{{ $cuidador->nombre }}</h4>
            <h4>Animales:</h4>
            <ul>
                @foreach ($cuidador->animales as $animal)
                    <a href="{{ route('animales.show', $animal) }}">
                        <li>{{ $animal->especie }}</li>
                    </a>
                @endforeach
            </ul>
            <h4>Titulaciones:</h4>
            <ul>
                @foreach ($cuidador->titulaciones() as $titulacion)
                    <a href="{{ route('titulaciones.show', $titulacion) }}">
                        <li>{{ $titulacion->nombre }}</li>
                    </a>
                @endforeach
            </ul>
        </div>
    </div>
@endsection
