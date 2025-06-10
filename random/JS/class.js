class Operaciones {
    constructor(c, d) {
      this.c = c;
      this.d = d;
    }
  
    // Método para obtener el valor actual de c
    getValor() {
      return this.c;
    }
  
    // Método para realizar la adición y actualizar el valor de c
    adicion() {
      this.c += this.d;
      return this.c;
    }
  
    // Método para realizar la multiplicación y actualizar el valor de c
    multiplicacion() {
      this.c *= this.d;
      return this.c;
    }
  
    // Método para reiniciar los valores de c y d
    reset(c, d) {
      this.c = c;
      this.d = d;
    }
  }
  
  // Ejemplo de uso de la clase Operaciones
  let operaciones = new Operaciones(37, 93);
  
  // Realizando las operaciones y almacenando los resultados
  let resultados = [];
  resultados.push(`Valor inicial de c: ${operaciones.getValor()}`);
  resultados.push(`Después de adición: ${operaciones.adicion()}`);
  resultados.push(`Valor actual de c: ${operaciones.getValor()}`);
  resultados.push(`Después de otra adición: ${operaciones.adicion()}`);
  resultados.push(`Después de multiplicación: ${operaciones.multiplicacion()}`);
  
  // Reiniciando valores y realizando una operación adicional
  operaciones.reset(10, 5);
  resultados.push(`Valor de c después de reiniciar: ${operaciones.getValor()}`);
  resultados.push(`Después de adición con nuevos valores: ${operaciones.adicion()}`);
  
  // Imprimiendo todos los resultados de forma legible
  console.log(resultados.join('\n'));
  
