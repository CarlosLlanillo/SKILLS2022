@extends('layouts.master')
@section('titulo')
    Zoológico - {{ $animal->especie }}
@endsection
@section('contenido')
    <div class="row">
        <div class="col-sm-3">
            {{-- TODO: Imagen del animal --}}
            <img src="{{ asset('assets/imagenes') }}/{{ $animal->imagen }}" class="img-fluid w-100" />
        </div>
        <div class="col-sm-9">
            {{-- TODO: Datos del animal --}}
            <h2>{{ $animal->especie }}({{ $animal->getEdad() }} años)</h2>
            <h4>Peso:</h4><span>{{ $animal->peso }}</span>
            <h4>Altura:</h4><span>{{ $animal->altura }}</span>
            <h4>Descripcion:</h4><span>{{ $animal->descripcion }}</span>
            <h4>Revisiones:</h4>
            <ul>
                @foreach ($animal->revisiones as $revision)
                    <li>{{ $revision->fecha }}: {{ $revision->descripcion }}</li>
                @endforeach
            </ul>
            <h4>Cuidadores:</h4>
            <ul>
                @foreach ($animal->cuidadores as $cuidador)
                    <a href="{{ route('cuidadores.show', $cuidador) }}">
                        <li>{{ $cuidador->nombre }}</li>
                    </a>
                @endforeach
            </ul>

            <div class="col">
                <a href="{{ route('animales.edit', $animal) }}" class="btn btn-warning">Editar</a>
                <a href="{{ route('revisiones.create', $animal) }}" class="btn btn-success">Añadir revision</a>
                <a href="{{ route('animales.index') }}" class="btn btn-outline-dark">Volver al listado</a>
            </div>
        </div>
    </div>
@endsection
