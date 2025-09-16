 class Casa {
    private String endereco;
    private int numero;
    private double tamanho;
    public String cidade;

    // Construtor
    public Casa(String endereco, int numero, double tamanho, String cidade) {
        this.endereco = endereco;
        this.numero = numero;
        this.tamanho = tamanho;
        this.cidade = cidade;
    }

    // GET e SET para endereco
    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    // GET e SET para numero
    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    // GET e SET para tamanho
    public double getTamanho() {
        return tamanho;
    }

    public void setTamanho(double tamanho) {
        this.tamanho = tamanho;
    }
}