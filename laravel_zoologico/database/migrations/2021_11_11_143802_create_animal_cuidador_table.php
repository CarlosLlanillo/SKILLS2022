<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalCuidadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animal_cuidador', function (Blueprint $table) {
            $table->id();
            $table->foreignId('animal_id');
            $table->foreignId('cuidador_id');
            $table->foreign('animal_id')->references('id')->on('animales');
            $table->foreign('cuidador_id')->references('id')->on('cuidadores');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animal_cuidador');
    }
}
