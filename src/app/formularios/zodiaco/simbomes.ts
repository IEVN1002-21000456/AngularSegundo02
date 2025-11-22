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
                this.imagenChino = 'https://elcomercio.pe/resizer/gvwaapjuyrjZr-2E33k8Saw1rbc=/1200x680/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VUKSU3CECFA6RILNQZYIO35ZHY.jpg';
                break;
            case 'Buey':
                this.imagenChino = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg';
                break;
            case 'Tigre':
                this.imagenChino = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg';
                break;
            case 'Conejo':
                this.imagenChino = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg';
                break;
            case 'Dragon':
                this.imagenChino = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg';
                break;
            case 'Serpiente':
                this.imagenChino = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4U7tMAfmJiDTq_DCS5JK5BG35ot1fJptC6g&s';
                break;
            case 'Caballo':
                this.imagenChino = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg';
                break;
            case 'Cabra':
                this.imagenChino = 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg';
                break;
            case 'Mono':
                this.imagenChino = 'https://www.hola.com/horizon/square/2d10e56a60a0-mono-horoscopo-chino.jpg';
                break;
            case 'Gallo':
                this.imagenChino = 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg';
                break;
            case 'Perro':
                this.imagenChino = 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg';
                break;
            case 'Cerdo':
                this.imagenChino = 'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg';
                break;
            default:
                break;
        }
    }
    obtenerResultadoCompleto(): string {
        this.resultado = `Hola ${this.nombre} ${this.apellidoPaterno}, naciste el ${this.dia}/${this.mesNacimiento}/${this.anioNacimiento}. Tu edad aproximada es ${this.edad} años, y tu signo chino es: ${this.signoChino}.`;

        return this.resultado;
    }
}
