 java.util.ArrayList;
public class TestaLista
{
	public static void main(String[] args)
	{
		ArrayList<String> frutas = new ArrayList<>();
		frutas.add("Morango");
		frutas.add("Banana");
		frutas.add("Laranja");
        frutas.add(0,"Caqui");
        frutas.add("Uva");
        
        for (String elemento : frutas)
          System.out.println(elemento);
          
          frutas.remove("Laranja");
          
          System.out.println("");
     import     
          for (String elemento : frutas)
           System.out.println(elemento);
           
           /* mostrando o tamanho da lista */
           System.out.println("Num Frutas: "+frutas.size());
           
           /* Verificar se a melancia esta na lista */
           if (frutas.contains("Melancia") )
            System.out.println("A melancia esta na lista");
            else
             System.out.println("A melancia nao esta na lista");
             
             frutas.add(1,"Melancia nao esta na lista");
             
             for (String elementos :frutas)
             System.out.println(elemento);
          }
	
}