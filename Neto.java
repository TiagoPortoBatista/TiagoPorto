public class Neto extends Filho
{ 
  public String talento;
  
  public Neto(String nome, int idade, double altura, String hobby, String talento)
  {
  	super(nome, idade, altura, hobby);
  	this.talento = talento;
  }
  public void ExibirTalento()
  {
  	System.out.println("Talento: "+talento);
  }
   public void Agir()
   {
   	 System.out.println("Derrubar suco no sofa");
   }
}