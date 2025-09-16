class Graus { 
    public double kelvin; 

    public Graus() {
        kelvin = 0;
    }

    public double celsius() {
        return kelvin - 273.15;
    }
}

 class Principal { 
    public static void main(String[] args) {
        Graus g = new Graus();
        g.kelvin = 300; // Exemplo
        System.out.println("Kelvin: " + g.kelvin);
        System.out.println("Celsius: " + g.celsius());
    }
}



