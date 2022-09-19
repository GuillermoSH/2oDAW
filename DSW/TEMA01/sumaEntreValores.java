public class sumaEntreValores {
    private int contador;
    private int numero1;
    private int numero2;

    public sumaEntreValores(int numero1, int numero2) {
        this.contador = 0;
        this.numero1 = numero1;
        this.numero2 = numero2;

        if (numero1 > numero2) {
            this.numero1 = numero2;
            this.numero2 = numero1;
        }
    }

    /**
     * Suma los valores entre dos numeros.
     * 
     * @return La suma de los numeros entre numero1 y numero2.
     */
    public int sumaValores() {
        int suma = 0;

        for (int i = numero1; i <= numero2; i++) {
            suma += i;
            contador++;
        }

        return suma;
    }

    /**
     * La funcion mediaValores() devuelve el promedio de la suma de los valores y el
     * numero de valores
     * 
     * @param suma La suma de todos los valores introducidos.
     * @return El promedio de los valores ingresados.
     */
    public double mediaValores(int suma) {
        return (double) suma / (contador);
    }

    /**
     * Metodo toString sobreescrito para dar un formato de salida deseado
     * 
     * @return Salida del programa en el formato deseado
     */
    @Override
    public String toString() {
        int suma = sumaValores();
        double media = mediaValores(suma);

        return String.format("%nLa suma entre los valores %d y %d es de %d y la media es %.2f.%n", numero1, numero2,
                suma,
                media);
    }

    public static void main(String[] args) {
        sumaEntreValores valores = new sumaEntreValores(1, 3);
        System.out.println(valores);
        valores = new sumaEntreValores(10, 1);
        System.out.println(valores);
        valores = new sumaEntreValores(10, 0);
        System.out.println(valores);
        valores = new sumaEntreValores(0, 100);
        System.out.println(valores);
    }
}
