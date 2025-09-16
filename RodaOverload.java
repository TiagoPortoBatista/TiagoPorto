public class RodaOverload
{ 
  public static void main(String[] args)
  {
  	/* Veiculo eh clase abstrata. Nao pode criar */
   	//Veiculo veic = new Veiculo("Sei la",100,8);
   	
   	Carro mycar = new Carro("Vw",0,5,3,2025);
   	mycar.MostrarDados();
  }
}