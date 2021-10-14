# CharlesCD

* [C4Model](#C4Model)
  * [C1 -  Context](#C1----Context)
  * [C2 - Container](#C2---Container)
  * [C3 -  Component](#C3----Component)
    * [Butler](#Butler)
    * [Circle-Matcher](#Circle-Matcher)
    * [Compass](#Compass)
    * [Gate](#Gate)
    * [Hermes](#Hermes)
    * [Moove](#Moove)
    * [UI](#UI)
    * [Villager](#Villager)

---

## C4Model



## **Overview**

A arquitetura de software define as partes de um software e é também a estratégia tecnológica de um produto/projeto. Com isso, é muito importante que os usuários vejam uma atualização frequente, porque sem isso pode ocorrer falhas.

### **Documentação da arquitetura**
Documentar a arquitetura de um projeto é um processo que exige tempo, conhecimento de ferramentas e técnicas para a diagramação. O maior desafio é evitar dois cenários:

- **Cenário 1:** Documentações complexas que ficam confusas, obsoletas, e que acabam perdendo o seu propósito, ou seja, isso é gastar tempo para algo que não será utilizado.

- **Cenário 2:** Documentações com falhas e pouca informação. 

Em ambos os casos, o resultado final pode gerar confusão para o usuário. 

A arquitetura do projeto é crucial para melhorar a experiência do usuário, por isso é necessário documentar, porque ela responde várias perguntas, por exemplo: 
- Como o meu sistema integra entre ele mesmo e outros sistemas? 
- Como consigo escalar a minha aplicação? 
- Como garantir a segurança entre as minhas aplicações?

Pensando nisso, o time do Charles criou uma visualização da nossa arquitetura de um modo mais simples, o C4 Model.


## **O que é o C4Model?**

O C4 Model foi criado por Simon Brown e é baseado no 4+1 e UML. O modelo ajuda a resolver problemas da documentação de arquitetura, é dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. 
A ideia é trazer mais clareza para o projeto e a cada nível você encontra mais detalhes e informações do que o nível anterior. 


## **O que é o CharlesCD?**

O CharlesCD é uma ferramenta open source que realiza deploys de forma ágil, contínua e segura, permitindo que as equipes de desenvolvimento realizem simultaneamente validações de hipóteses com grupos específicos de usuários. 

O produto traz um conceito pioneiro no mercado e na comunidade: deploys em círculos de usuários em clusters de Kubernetes. 

Neste modelo de deploy, é possível segmentar seus clientes por meio de características específicas e também submeter diversas versões de uma mesma aplicação para teste com os usuários dos círculos. 

## C1 -  Context

`/C1 -  Context`

[C4Model](#CharlesCD)

É o primeiro nível do desenho. A ideia é mostrar as interações do projeto de forma macro, sem muitos detalhes, focando nas comunicações e dependências entre sistemas e usuários que compõem e interagem com o software.

Nesse nível contextualizamos de forma macro como o CharlesCD interage com o Kubernetes e permite que o usuário possa gerenciar seus deploys utilizando uma série de recursos como métricas, hipóteses e webhooks. Veja abaixo: 

### **Usuário** 
- Qualquer pessoa que possui uma aplicação com os deploys gerenciados pelo CharlesCD. Pode ser um desenvolvedor, gestor, QA, PM, etc.

### **Sistema CharlesCD**
O CharlesCD é uma ferramenta de deploy contínuo orientada a hipóteses que:
    - Permite o gerenciamento dos deploys de aplicações web e backend.
    - Permite o gerenciamento dos deploys rollout e rollback.
    - Cria estratégias inteligentes para validação de hipóteses.
    - Colhe e observa métricas. 
    - Faz o acompanhamento de versões das suas aplicações. 
    - Envia informações de eventos (previamente configurados) via webhooks. 

### **Kubernetes:** 
- Orquestra os containers das aplicações.

![diagram](c1.svg)


![diagram](c1.svg)

## C2 - Container

`/C2 - Container`

[C4Model](#CharlesCD)


Nesse nível, você pode ver detalhes do sistema descrevendo os seus containers (não confunda com o Docker) e como eles se comunicam/interagem. Aqui, a ênfase é na arquitetura e tecnologias utilizadas. 
A ideia é mostrar como o sistema é de forma macro e como um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.

O CharlesCD foi construído utilizando a abordagem de microserviços e possui os seguintes módulos (cada módulo é um container):

- **UI:**  Responsável por prover uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD.

- **Moove:** É um serviço backend que orquestra os testes de hipóteses de seus produtos e o pipeline de entrega até atingir seus círculos, realizando a ponte entre os demais microserviços.

- **Butler:** Orquestra e gerencia as releases e deploys.

- **Circle Matcher:** Gerencia todos os círculos e indica a qual círculo um usuário pertence com base em um conjunto de características.

- **Compass:** Integração do provedor de dados, faz a análise de métricas e executa ações configuráveis.

- **Hermes:** Gerencia e notifica os eventos de webhook.

- **Gate:** Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.

![diagram](c2.svg)


![diagram](c2.svg)

## C3 -  Component

`/C3 -  Component`

[C4Model](#CharlesCD)

O nível 3 apresenta descreve as partes que compõem o sistema. O foco aqui é mostrar as interações, responsabilidades e tecnologias utilizadas com mais detalhes.

O CharlesCD hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model, veja abaixo: 

- **Butler:** Orquestra e gerencia as releases e deploys realizados.
- **Circle Matcher:** Gerencia e identifica os círculos.
- **Compass:** Realiza a integração do provedor de dados, faz análise de métricas e executa ações configuráveis.
- **Gate:** Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.
- **Moove:** Orquestra os testes de hipóteses e o pipeline de entrega até atingir seus círculos, facilita a ponte entre os outros módulos.
- **UI:** Possui uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD.
- **Villager:** Acessa as imagens Docker.


## Butler

`/C3 -  Component/Butler`

[C4Model](#CharlesCD)

Serviço backend em NestJS, orquestra e gerencia as releases e os deploys.


![diagram](c3.svg)

![diagram](c3.svg)

## Circle-Matcher

`/C3 -  Component/Circle-Matcher`

[C4Model](#CharlesCD)

Serviço backend em Java, gerencia todos os círculos criados, além de indicar qual círculo um usuário pertence com base em um conjunto de características.


![diagram](c3.svg)

![diagram](c3.svg)

## Compass

`/C3 -  Component/Compass`

[C4Model](#CharlesCD)

Serviço backend em Golang e realiza:
- A integração do provedor de dados
- Faz análise de métricas
- Executa ações configuráveis.

![diagram](c3.svg)

![diagram](c3.svg)

## Gate

`/C3 -  Component/Gate`

[C4Model](#CharlesCD)

Serviço backend em Golang, controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.

![diagram](c3.svg)

![diagram](c3.svg)

## Hermes

`/C3 -  Component/Hermes`

[C4Model](#CharlesCD)

Serviço backend em Golang, que controla as subscrições de webhooks e envia as mensagens de eventos para as subscrições cadastradas.

![diagram](c3.svg)

![diagram](c3.svg)

## Moove

`/C3 -  Component/Moove`

[C4Model](#CharlesCD)

Serviço backend em Kotlin, orquestra os testes de hipóteses de seus produtos e o pipeline de entrega até atingir os seus círculos, facilita a ponte entre os outros módulos.

![diagram](c3.svg)

![diagram](c3.svg)

## UI

`/C3 -  Component/UI`

[C4Model](#CharlesCD)

Serviço frontend em ReactJS, com uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD. Criada para simplificar testes de hipóteses e circle deployment.

![diagram](c3.svg)

![diagram](c3.svg)

## Villager

`/C3 -  Component/Villager`

[C4Model](#CharlesCD)

Serviço backend em Java e é responsável por acessar as imagens docker. Possui integração com DockerHub, AWS ECR, Azure Container Registry, GCR e Harbor.


![diagram](c3.svg)

![diagram](c3.svg)