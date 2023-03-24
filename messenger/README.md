# Chat BotScope #

Interface para realizar a comunicação entre o usuário e o BotScope. Esse pacote contém:

** Back-end: API que fará a integração entre o chat e o BotScope

** Front-end: Interface visual que exibe a resposta do BotScope e obtém a conversa do usuário

** Button: Script que constrói o botão e invoca o chat no site do cliente

** Use: Exemplo de como deve ser utilizado o script



### Messenger back-end ###

Projeto em NodeJS que realiza a integração entre o chat e o BotScope. A API fornece três recursos.

Um recurso para fornecer uma hash de identificação para cada usuário. Essa identificação é o id de um registro do MongoDB. Esse registro registro armazena apenas a data e hora que ele foi gerado. 

Um recurso para envio da mensagem do usuário para o  BotScope. O client envia um documento JSON com os dados solicitado pelo BoteScope. A API monta uma requisição e envia para a API do BoteScope. Se o BoteScope recebeu a requisição, retorna um sucesso com status 200, caso contrário retorna um erro com status 300.

Um recurso para envio da mensagem do BoteScope para o client. O BoteScope enviará um documento JSON com a mensagem e a identificação do client. A API envia para o socket do client, de acordo com a identificação do client, o documento enviado pela API do BotScope.


Para inicar no projeto, execute o seguinte comando para instalar os pacotes necessários:

** npm install

Comandos para execução:


** npm run dev >> Executa o projeto em modo de desenvolvimento

** npm run build >> Gera o pacote de deploy. Os arquivos ficarão no diretório ./dist

** npm run start >> Executa o projeto a partir do pacote de deploy, ./dist, com o nodemon

** npm run prod >> Gera o pacote de deploy e executa-o

O serviço será executado na porta 3000 caso não seja informado um valor no process.env.PORT

O serviço manterá um socket junto ao usuário para envio da resposta do BotScope.



O projeto utiliza as seguintes libs:

** express >> Middleware para criação do servidor web

** body-parser >> Middleware para executar o parse do corpo da requisição para um objeto JSON

** mongoose >> Driver para comunicação com o MongoDB

** nodemon >> Lib para controlar o serviço

** socket.io >> Mantém um socket com o client


Deploy

O pacote para deploy será gerado dentro do diretório ./dist. Para gerar o pacote, execute o seguinte comando a partir do diretório root do projeto

** npm run build



### Messenger front-end ###

Aplicação em Angular 6 que fornecerá uma interface para a troca de mensagem com o BoteScope. A aplicação solicita o nome do usuário, depois de informado o nome do usuário, abre a tela do chat.

Quando a aplicação obtém a identificação do client junto a API de integração, ela abre um socket junto a essa API para recebimento das conversas do BotScope.

Após o usuário digitar a conversa, a aplicação monta um documento JSON com as informações necessários para o BotScope e envia esse documento para o API de integração. Depois de enviada a conversa para a API de integração, a aplicação cria um elemento no Chat e insere a conversa do client. Se ocorrer algum problema ao enviar a mensagem para o BotScope, o client é avisado.

Quando o BoteScope envia uma conversa para o client, essa conversa é enviada para a aplicação através do socket que o client definiu, ou seja, não será um 'broadcast', cada client possui um socket aberto. Quando a aplicação recebe o documento JSON do BotScope, automaticamente cria um elemento no Chat e insere a conversa do BoteScope.


Para inicar no projeto, execute o seguinte comando para instalar os pacotes necessários:

** npm install


Comandos para execução:

** npm run start >> Executa o projeto em modo de desenvolvimento

** npm run build >> Executa o projeto em modo de desenvolvimento



### Messenger button ###

O Messenger-button é um script que insere no página da empresa um botão para controlar a exibição do Chat e um frame com o Chat.

Se a empresa que utiliza o Chat informar um título e um endereço de um ícone, esses serão exibidos na barra superior do Chat.

O endereço do Chat, do ícone que será utilizado como botão e do arquivo CSS deverão ser informados em seus respectivos elementos. Informar o endereço absoluto, pois o acesso será a partir da estação client.


### Use ###

Uma página HTML com o exemplo do uso do script que a empres que utilizará deverá importar em seu site. Esse script deverá ser informado após a tag <body>, preferencialmente logo após a última tag do site.


O script pode passar os seguintes atributos:

** id >> Obrigatório apenas quando a empresa deseja customizar a barra de título do Chat. Quando utilizado deverá informar o valor "chat-botscope-dds". Fornecido pela DDS. Se alterar o valor, deverá verificar o projeto Messenger-Button, pois ele utiliza esse valor para configurar a barra de título do chat 

** src >> Caminho absoluto do script que inserirá o Chat no site do usuário. Fornecido pela DDS

** companyName >> Nome que será exibido na barra de título do Chat. Se não for informado, será exibido um valor padrão. Opcional. Fornecido pela empresa que utilzará o Chat

** pathIcon >> Caminho absotulo do ícone que será exibido na barra de título do Chat. Se não for informado, não será exibido nenhum ícone. Opcional. Fornecido pela empresa que utilzará o Chat


Exemplo do script

<script id="id" src="caminho_absoluto_messenger_button" companyName="nome_empresa" pathIcon="caminho_absoluto_icone_empresa"></script>