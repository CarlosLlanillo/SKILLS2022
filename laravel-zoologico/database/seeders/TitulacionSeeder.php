<?php

namespace Database\Seeders;

use App\Models\Titulacion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TitulacionSeeder extends Seeder
{
    private $titulaciones = array("Cuidador", "Limpiardor","Administrador","Delegado");

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->titulaciones as $titulacion) {
            $t = new Titulacion();
            $t->nombre = $titulacion;
            $t->slug = Str::slug($titulacion);
            $t->save();
        }
    }
}
