public class Pai
{
	public String nome;
	public int idade;
	public double altura;
	
	public Pai(String nome, int idade, double altura)
	{
		this.nome = nome;
		this.idade = idade;
		this.altura = altura;
	}
	
	  public void ExibirDados()
	  {
	  	System.out.println("Nome: "+nome);
	  	System.out.println("Idade: "+idade);
	  	System.out.println("Altura: "+altura);
	  }
	  
	  public void Agir()
	  {
	  	System.out.println("Defender os netos");
	  }
} 
