<?php

namespace Database\Factories;

use App\Models\Cuidador;
use App\Models\Titulacion;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CuidadorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cuidador::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $nombre = $this->faker->name;
        $tomar = Titulacion::all()->count()/2;
        $titulo1=Titulacion::all()->skip(0)->take($tomar)->random()->id;
        $titulo2=Titulacion::all()->skip($tomar)->take($tomar)->random()->id;
        return [
            'nombre' => $nombre,
            'slug' => Str::slug($nombre),
            'id_titulacion1'=> $titulo1,
            'id_titulacion2'=> $titulo2
        ];
    }
}
