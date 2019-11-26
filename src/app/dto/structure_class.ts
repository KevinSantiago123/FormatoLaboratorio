//  export class Asignaturas {
//      id_asignatura: Number;
//      name_asignatura: string; 
//      facultad: string;
//  }

//  export class Laboratorios {
//      id_laboratorio: Number;
//      name_laboratorio: string; 
//      facultad: string;
//  }

export class User {
    constructor(
        public identificationNumber: Number,
        public names: string,
        public username: string,
        public password?: string,
        public rol?: number
    ) { }
}

export class Login {
    constructor(
        public username: string,
        public password: string
    ) { }
}

export class ContenidoOpciones {
    constructor(
        public tipo: string,
        public imagen: string,
        public descripcion: string,
        public ruta: string
    ) { }
}

export class Facultades {
    constructor(
        public id?: number,
        public name?: string,
        public ubicacion?: string
    ) { }
}

export class Laboratorios {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Asignaturas {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Bloques {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Docentes {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}

export class Solicitud {
    constructor(
        
        public fechaSolicitud?: Date,
        public fechaProgramada?: Date,
        public laboratorio?: string,
        public asignatura?: string,
        public docente?: string,
        public nombrePractica?: string,
        public facultad?: string,
        public bloque?: string,
        public id?: number,
        public guia?: boolean,
        public usoLaboratorio?: boolean,
        public asisAuxiliar?: boolean,
        public maquinas?: boolean,
        public material?: boolean,
        public cantEstudiantes?: number,
        public docEntrega?: string,
        public recibe?: string,
        public observaciones?: string,
        public matPendiente?: boolean,
        public horaEntrada?: Date,
        public horaSalida?: Date
    ) { }

}