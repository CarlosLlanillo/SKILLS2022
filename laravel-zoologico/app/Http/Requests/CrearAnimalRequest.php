<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CrearAnimalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'especie'=>'required|min:3|unique:animales',
            'peso'=>'required',
            'altura'=>'required',
            'fechaNacimiento'=>'date',
            'imagen'=>'required|mimes:jpg,bmp,png,jpeg'
        ];
    }
}
