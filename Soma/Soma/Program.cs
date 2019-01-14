using Matematica;
using System;

namespace Soma
{
    class Program
    {
        static void Main(string[] args)
        {
            var soma = new OperacoesMatematicas().Soma(15, 10);

            Console.WriteLine(soma);

            Console.ReadKey();
        }
    }
}
