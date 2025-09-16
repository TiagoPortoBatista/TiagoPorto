public abstract class Veiculo
{
   public String modelo;
  int velocidade;
  public int max_passageiros;
  
  public Veiculo(String modelo, int velocidade,int max_passageiros)
  {
  	this.modelo = modelo;
  	this.velocidade = velocidade;
  	this.max_passageiros = max_passageiros;
  }	
}