public class Vetor2
{
	public static void main(String[] args)
	{
		 int[] v = {10,20,30,40}; /*vai de 0 a 3*/
		 
	 System.out.println(v[5]);	 
	 
	 /* tratando a excecao de estouro de limite */
	 try
	 {
	 	System.out.println(v[5]);
	 	}
	 	  catch(ArrayIndexOutOfBoundsException e)
	     {
            //System.out.println(e);
            System.out.println("Posicao inexistente do vetor");
     	 }
		 
		 
	}
}