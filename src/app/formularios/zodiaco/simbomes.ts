export class DatosPersonales {

    nombre: string = "";
    apellidoPaterno: string = "";
    apellidoMaterno: string = "";
    dia: number = 0;
    mesNacimiento: number = 0;
    anioNacimiento: number = 0;
    sexo: string = "";
    resultado: string = "";
    edad: number = 0;
    signoChino: string = "";
    imagenChino: string = "";

    ejecutarCalculos(): void {
        this.calcularEdad();
        this.calcularSignoChino();
        this.obtenerResultadoCompleto();
    }

    calcularEdad(): void {
        let anioActual = new Date().getFullYear();
        this.edad = anioActual - this.anioNacimiento;
    }

    calcularSignoChino(): void {
        let animales = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragon', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
        let posicion = (this.anioNacimiento - 4) % 12;
        let nombreSignoChino = animales[posicion < 0 ? posicion + 12 : posicion];

        this.signoChino = nombreSignoChino;

        switch (nombreSignoChino) {
            case 'Rata':
                this.imagenChino = "assets/fotosZodi/rata.jpg";
                break;
            case 'Buey':
                this.imagenChino = "assets/fotosZodi/buey.jpg";
                break;
            case 'Tigre':
                this.imagenChino = "assets/fotosZodi/tigre.jpg";
                break;
            case 'Conejo':
                this.imagenChino = "assets/fotosZodi/conejo.jpg";
                break;
            case 'Dragon':
                this.imagenChino = "assets/fotosZodi/dragon.jpg";
                break;
            case 'Serpiente':
                this.imagenChino = "assets/fotosZodi/serpiente.jpg";
                break;
            case 'Caballo':
                this.imagenChino = "assets/fotosZodi/caballo.jpg";
                break;
            case 'Cabra':
                this.imagenChino = "assets/fotosZodi/carnero.jpg";
                break;
            case 'Mono':
                this.imagenChino = "assets/fotosZodi/mono.jpg";
                break;
            case 'Gallo':
                this.imagenChino = "assets/fotosZodi/gallo.jpg";
                break;
            case 'Perro':
                this.imagenChino = "assets/fotosZodi/perro.jpg";
                break;
            case 'Cerdo':
                this.imagenChino = "assets/fotosZodi/jabali.jpg";
                break;
            default:
                this.imagenChino = "";
                break;
        }
    }
    obtenerResultadoCompleto(): string {
        this.resultado = `Hola ${this.nombre} ${this.apellidoPaterno}, naciste el ${this.dia}/${this.mesNacimiento}/${this.anioNacimiento}. Tu edad aproximada es ${this.edad} años, y tu signo chino es: ${this.signoChino}.`;

        return this.resultado;
    }
}
