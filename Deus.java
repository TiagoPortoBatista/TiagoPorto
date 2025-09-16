public class Deus
{
	public static void main(String[] args)
	{
		Mamifero MeuMami = new Mamifero();
		CachorroHerdado MyDog = new CachorroHerdado();
		HumanoHerdado Ze = new HumanoHerdado("Ze);
		
		System.out.println("*** DADOS MAMIFERO ***");
		System.out.println("Nome: "+MeuMami.nome);
		System.out.println("Altura: "+MeuMami.altura);
		System.out.println("Olho: "+MeuMami.cor_olho);
		System.out.println("");
		
		System.out.println("*** DADOS CACHORRO *** ");
		System.out.println("Nome: "+MyDog.nome);
		System.out.println("Altura: "+MyDog.altura );
		System.out.println("Rabo: "+MyDog.tem_rabo );
		System.out.println("" );
		
		System.out.println("*** DADOS HUMANO *** ");
		System.out.println("Nome: "+Ze.nome);
		System.out.println("Altura: "+Ze.altura );
		System.out.println("Rabo: "+Ze.tem_rabo );
		System.out.println("" );
		
	}
}
