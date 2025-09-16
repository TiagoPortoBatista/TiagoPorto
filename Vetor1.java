public class Vetor1
{
	public static void main(String[] args)
}

	/* definindo uma constante */
	final int TAMANHO = 10;
	
	/* 1a. forma de declarar o vetor */
	int[] v = new int[TAMANHO];
	
	  for (int i = 0; i < v.length; i++)
	  System.out.printf("V[%d]=d%\n",i,v[i]);
	  
	 
	  System.out.println(); /* pula linha */
	  /* 2a. forma de criar um vetor (ja c/ valores) */
	  int[] v2 = {1,3,5,7,9,11};
	  for (int i = 0; i < v2.length; i++)
	   System.out.printf("v[%d]=d\n",i,v2[i]);
	  }	
}