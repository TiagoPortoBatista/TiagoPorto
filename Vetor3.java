public class Vetor3
{
	public static void main(String[] args)
	{
		int[] v = {1,2,3,4,5,6,7,8,9};
		
		//for (int i = 0; i<v.length; i++)
		//System.out.println(v[i]);
		 /* usando o recurso do for..each */
		 for (int elemento : v) 
		 	 System.out.println(elemento);
		}
	}