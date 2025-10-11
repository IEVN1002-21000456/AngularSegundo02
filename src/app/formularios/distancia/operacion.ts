export class Operaciones {
  x1: number=0;
  y1: number=0;
  x2: number=0;
  y2: number=0;
  resultado: number=0;

  calcularDistancia(): number {
    this.resultado = Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
    );
    return this.resultado;
  }
}
