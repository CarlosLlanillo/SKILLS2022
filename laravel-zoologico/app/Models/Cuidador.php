<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuidador extends Model
{
    use HasFactory;

    protected $table = 'cuidadores';

    public function getRouteKeyName()
    {
        return 'slug';
    }

    //Relación muchos a muchos
    public function animales()
    {
        return $this->belongsToMany(Animal::class);
    }

    //Titulaciones (dos relaciones uno muchos)
    public function titulaciones()
    {
        //Cada belongsTo devueleve uno por lo que los unimos
        return $this->belongsTo(Titulacion::class, 'id_titulacion1')->get()->merge($this->belongsTo(Titulacion::class, 'id_titulacion2')->get());
    }
}
