public class Livro
{
	private String titulo;
	private Autor autor;
	private int anopublicacao;
	
	public Livro(String titulo, Autor autor, int anopublicacao)
	{
		this.titulo = titulo;
		this.autor = autor;
		this.ano´publicacao = anopublicacao;
   	}
    
    public String getTitulo()
    {
    	return titulo;
    }
    
    public void setTitulo(String titulo)
    {
    	this.titulo = titulo;
    }
    
    public Autor getAutor()
    {
    	return autor;
    }
    
    public void setAutor(Autor autor)
    {
    	this.autor = autor;
    }
    
     public int getAnopublicacao;
     {
     	return anopublicacao;
     }
     
     public void setAnopublicacao(int anopublicacao)

}

