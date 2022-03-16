export class Animal {
    id!: number;
    especie: string = '';
    slug: string = '';
    peso: number = 0;
    altura: number = 0;
    fechaNacimiento: Date = new Date();
    imagen: any;
    alimentacion: string = '';
    descripcion: string = '';
}
