<?php

namespace Database\Seeders;

use App\Models\Cuidador;
use App\Models\Titulacion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('titulaciones')->delete();
        $this->call(TitulacionSeeder::class);

        DB::table('cuidadores')->delete();
        Cuidador::factory(20)->create();

        DB::table('animales')->delete();
        $this->call(AnimalSeeder::class);

        DB::table('users')->delete();
        $this->call(UserSeeder::class);

        DB::table('revisiones')->delete();
        $this->call(RevisionSeeder::class);
    }
}
