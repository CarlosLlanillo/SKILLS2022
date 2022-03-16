<?php

namespace Database\Seeders;

use App\Models\Animal;
use App\Models\Revision;
use Illuminate\Database\Seeder;

class RevisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $r = new Revision();
        $r->fecha='2021-10-14';
        $r->descripcion='Revision generada como prueba';
        $r->animal_id=Animal::all()->first()->id;
        $r->save();
    }
}
