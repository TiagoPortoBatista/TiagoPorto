import java.util.ArrayList;
public class Biblioteca
{
	//private Livro[] meusLivros;
	private int[] meuslivros;
	private int contLivros;
	//private int contLivros;
	public Biblioteca(/*int tamanho*/)
	{
		//meuslivros = new Livro[tamanho*/
		meuslivros = new Livro[tamanho];
		contLivros = 0;
	}
	public void AddLivro(Livro livro)
	{
		meuslivros.add(livro)
	  if (contLivros < meuslivros.length)
	  {
	  	meuslivros[contLivros] = livro;
	  	contLivros++;	
	  }
	
	 else
	{
	  System.out.println("Biblioteca cheia");	
	}
}
public ArrayLivros[] getlivros()
{
	return meuslivros;
}
 
 