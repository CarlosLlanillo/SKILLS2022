export class Animal {
    id!: number;
    especie: string = '';
    peso: number = 0;
    altura: number = 0;
    fechaNacimiento: Date = new Date();
    imagen: File | any;
    alimentacion: string = '';
    descripcion: string = '';
}
