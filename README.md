Como iniciar e trabalhar no desenvolvimento do Projeto

1° - Tenha o Node Versão 20 instalado na sua máquina

2° - Copie o projeto para uma pasta utilizando o comando "git clone <url do repositorio>" em um terminal, e entre no projeto com "cd <nome do projeto>"

3° - Abra um terminal no projeto com o comando CRTL + J dentro do Vs Code

4° - Digite "npm install" para instalar as dependencias na sua maquina

5° - Crie um arquivo na raiz do projeto chamado ".env"

6° - Configure o .env da seguinte maneira:

---------
PORT=5000
---------

* O .env serve para gerir variáveis de ambiente, que são valores que estarão disponiveis apenas na maquina do desenvolvedor, ou de produção
Ex: senhas do banco de dados, segredos de sessão etc...

* Eventuais configurações futuras serão adicionadas no .env no decorrer do projeto

7° - Rode no msm terminal o comando "npm start". Então, vc poderá acessar o projeto digitando "localhost:<PORTA>" no seu navegador
