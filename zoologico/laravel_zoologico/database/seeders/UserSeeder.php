<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u = new User();
        $u->name = 'Carlos';
        $u->email = 'carlos@gmail.com';
        $u->password = bcrypt('1234');
        $u->save();
    }
}
