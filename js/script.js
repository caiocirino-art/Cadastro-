//var Permite que o valor seja atualizado a qualquer momento do código.
//let Permite que o valorse altere somente quando está fora de um bloco de código.
//const Não permite que o valor seja alterado
//O let tem que obrigatóriamente estar em chaves{}
    
    /*let nome = "ana"; // Tudo que é uma string precisa de "" para ser reconhecido já os que não são strings não precisam
    let idade = 17; // Número não precisa de"

    console.log(nome);
    console.log(idade);

   { let nome = "Caio";
    let idade = 1945;

    console.log(nome);
    console.log(idade);}

    console.log(nome);

    let curso = "";*/

    function cadastrar() {
        let nome = document.getElementById("nome").value; //value atribui o valor do id para a variavel
       
        let idade = document.getElementById("idade").value; //value atribui o valor do id para a variavel

        let curso = document.getElementById("curso").value; //value atribui o valor do id para a variavel

        if(nome == "" || idade == "" || curso == "") {
            alert("Cadrasto inválido");    
        }
        else{
            alert("Cadastro realizado com sucesso !");          
            document.getElementById("resultado").innerHTML =
        "Nome do aluno é " + nome + "<br> idade : " + idade + " anos. " + "<br> Curso : " + curso ;

        document.querySelector(".descricao").textContent=
        "informações do aluno";

            //display none serve para ocultar o elemento HTML//
        document.getElementById("nome").style.display = "none"
        document.getElementById("idade").style.display = "none"
        document.getElementById("curso").style.display = "none"
        document.getElementById("cadastrar").style.display = "none"
        document.getElementById("resultado").style.display = "block"
        document.getElementById("novoAluno").style.display = "block"
            //display = block serve para exibir algo em bloco//
        }

       

    }

    function novoAluno() {

        document.getElementById("nome").style.display = "block"
        document.getElementById("idade").style.display = "block"
        document.getElementById("curso").style.display = "block"
        document.getElementById("cadastrar").style.display = "block"
        document.getElementById("resultado").style.display = "none"
        document.getElementById("novoAluno").style.display = "none"

        document.querySelector(".descricao").textContent=
        "preencha os dados abaixo";

        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("curso").value = "";




    }
    /* || = ou
       alert = é usado para dar aviso
       para o usuario em uma caixa no navegador.

       if (se) = caso seja verdadeira condição~.
       else (senão) = caso seja falso a condição.
       = sinal de atribuição de valor
       == sinal de comparação entre dois elementos ou valores.
       + concatenar (juntar informações).

       */
