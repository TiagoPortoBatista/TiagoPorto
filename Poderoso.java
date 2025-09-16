import java.util.Scanner;
public class Poderoso
{
	 public static void main(String[] args)
	 { 
	   Scanner entrada = new Scanner(System.in);
	   String nome;
	   int idade;
	   double altura;
	   
	   /* Utilizando a classe Pai */
	   System.out.print("Digite o nome doi pai:");
	   nome = entrada.nextLine();
	   System.out.print("Digite a altura do Pai: ");
	   altura = entrada.nextDouble();
	   
	   Pai meupai = new Pai(nome,idade,altura);
	   meupai.ExibirDados();
	   meupai.Agir();
	 }
}
