public class Carro extends Veiculos
{
	public int num_portas;
	public int ano;
	
	public Carro(String modelo, int velocidade,int max_passageiros, int num_portas,int ano)
	{
	  super(modelo, velocidade, max_passageiros);
	  this.num_portas = num_portas;
	  this.ano = ano;

	  	
	  	
	} 
    
     public void MostrarDados()
     {
       System.out.println("Modelo: "+modelo);
       System.out.println("Ano: "+ano);
       System.out.println("Portas: "+num_Portas);
     }
       /* la.versao do AcertaDados */
       public void AcertarDados(int num_portas)
       {
       	this.num_portas = num_portas;
       }
       /* 2a. versao do AcertarDados */
       public void AcertarDados(String modelo, int ano)
       {
       	this.modelo = modelo;
       	this.ano = ano;
       }
}   