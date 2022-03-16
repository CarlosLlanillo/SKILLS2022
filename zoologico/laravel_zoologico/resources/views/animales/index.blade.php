@extends('layouts.master')
@section('titulo')
    Zoológico - Animales
@endsection
@section('contenido')
    <div class="row">
        @foreach ($animales as $animal)
            <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="{{ route('animales.show', $animal) }}" style="text-decoration: none; color: black;">
                    <img src="{{ asset('assets/imagenes') }}/{{ $animal->imagen }}" class="fluid"
                        style="height:200px" />
                    <div style="position: rigth">
                        <h4>{{ $animal->especie }}</h4>
                        <ul>
                            <li>Peso: {{ $animal->peso }}</li>
                            <li>Altura: {{ $animal->altura }}</li>
                            <li>Edad: {{ $animal->getEdad() }}</li>
                            <li>Alimentacion: {{ $animal->alimentacion }}</li>
                            <li>Revisiones: {{ count($animal->revisiones) }}</li>
                        </ul>
                    </div>
                </a>

                @if (count($animal->cuidadores) > 0)
                    <h4>Cuidadores</h4>
                    @foreach ($animal->cuidadores as $cuidador)
                        <ul>
                            <a href="{{ route('cuidadores.show', $cuidador) }}">
                                <li>{{ $cuidador->nombre }}</li>
                            </a>
                        </ul>
                    @endforeach
                @endif

            </div>
        @endforeach
    </div>
@endsection
