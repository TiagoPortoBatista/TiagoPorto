public class UsaBiblioteca
{
	public static void main(String[] args)
	{
		/* criando os autores */
		Autor autor1 = new Autor("Machado A.","brasileira");
		Autor autor2 = new Autor("J.K.R.","inglesa");
		
		/* criando livros */
		Livro livro1 = new Livro("Casa Velha",autor1,1886);
		Livro livro2 = new livro("Harry Pot",autor2,1981);
		Livro livro3 = new Livro("Dom Casm",autor1,1899);
		
		/* criando biblioteca */
		Biblioteca MyBid = new Biblioteca();
		
		/* inserindo os livros na biblioteca */
        MyBid.AddLivro(livro1);
        MyBid.AddLivro(livro2);
        MyBid.AddLivro(livro3);
        
        /* mostrando os livros */
        for (Livro book : MyBib.getLivros())
        {
          //*Livro book = MyBib.getLivros() [i];
          System.out.println("Tit: "+book.getTitulo());
          System.out.println("Ano: "+book.getAnopubliccao());
          System.out.println("Nome Autor: "+book.getAutor().getNome());
        }
		 
		 Livro livro4 = new Livro("Mem Post BC",autor1,1881);
		 MyBib.AddLivro(livro4);
	
	}
}