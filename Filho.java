Public class Filho extends Pai 
{
	public String hobby;
	
	public Filho(String nome, int idade, double altura, String hobby)
	{
		this.nome = nome;
		this.idade = idade;
		this.altura = altura;
		super(nome, idade, altura);
		this.hobby = hobby;
	}
	 public void ExibirHobby()
	{
		System.out.println("Hobby: "+hobby):
	}
	  public void Agir()
	{
		System.out.println("Pedir $ para o pai");
	}
}