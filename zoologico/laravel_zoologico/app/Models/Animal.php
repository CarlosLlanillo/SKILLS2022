<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;
    protected $table = 'animales';
    public $timestamps = false;

    protected $fillable = [
        'especie',
        'peso',
        'altura',
        'fechaNacimiento',
        'alimentacion',
        'descripcion',
        'slug',
        'imagen',
      ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getEdad()
    {
        $fechaFormateada = Carbon::parse($this->fechaNacimiento);
        return $fechaFormateada->diffInYears(Carbon::now());
    }
    public function revisiones()
    {
        return $this->hasMany(Revision::class);
    }

    //Relación muchos a muchos
    public function cuidadores()
    {
        return $this->belongsToMany(Cuidador::class);
    }
}
