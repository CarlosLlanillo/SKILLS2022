@extends('layouts.master')
@section('titulo')
    Zoológico - {{ $titulacion->nombre }}
@endsection
@section('contenido')
    <div class="row">
        <div class="col-sm-9">
            {{-- TODO: Datos del titulo --}}
            <h4>{{ $titulacion->nombre }}</h4>
            <h4>Cuidadores:</h4>
            <ul>
                @foreach ($titulacion->cuidadores as $cuidador)
                    <a href="{{ route('cuidadores.show', $cuidador) }}">
                        <li>{{ $cuidador->nombre }}</li>
                    </a>
                @endforeach
            </ul>
        </div>
    </div>
@endsection
