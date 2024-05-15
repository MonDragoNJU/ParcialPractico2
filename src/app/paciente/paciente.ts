export class Paciente {
    nombre: string;
    edad: number;
    diagnostico: string;

    constructor(
        nombre: string,
        edad: number,
        diagnostico: string
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.diagnostico = diagnostico;
    }
}
