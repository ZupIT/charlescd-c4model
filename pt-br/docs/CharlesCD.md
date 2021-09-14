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



**Overview**

Uma das definições usadas de arquitetura de software é que ela define as partes de um software e é a estratégia tecnológica de um produto/projeto. E como toda estratégia, é muito importante que ela seja vista e frequentemente visitada e atualizada. Afinal, um planejamento sem visualização tenderá a ser falho. 

Documentar a arquitetura de um projeto muitas vezes é um processo maçante, que exige tempo, conhecimento de ferramentas e técnicas para diagramação e documentação. O maior desafio dentro de uma documentação de arquitetura é evitar dois cenários.

- Documentações de arquitetura muito complexas e por consequência elas tendem a ficarem confusas e obsoletas, assim, se perde o seu propósito. Ou seja, se gasta bastante tempo para uma documentação que tende a ser inutilizada eventualmente.

- Documentações pobres com pouca informação ou informações falhas. 

Em ambos os casos o resultado final é que elas acabam atrapalhando mais do que ajudando.


A visualização da arquitetura é crucial em diversos aspectos e responde várias perguntas, por exemplo, como o meu sistema integra entre eles mesmo e outros sistemas? Como consigo escalar a minha aplicação? Como garantir a segurança entre as minhas aplicações, dentre outros pontos.


Pensando nisso, nos motivamos para criar uma visualização da nossa arquitetura de um modo bastante simples com o C4 Model.



**O que é o C4Model?**

 O C4 Model é baseado no 4+1 e UML e foi criado por Simon Brown entre 2006 e 2011. O modelo surgiu com o intuito de ajudar a resolver o problema de documentação de arquiteturas falhas, difíceis de entender e manter, trazendo uma visão mais clara da arquitetura documentada abrangendo vários níveis e que seja relevante para as várias “personas” envolvidas. Ele é dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. A ideia é que cada nível se aprofunde mais nos detalhes e informações do nível anterior. 



**O que é o CharlesCD?**

O CharlesCD é uma ferramenta open source que realiza deploys de forma ágil, contínua e segura, permitindo que as equipes de desenvolvimento realizem simultaneamente validações de hipóteses com grupos específicos de usuários. 

O produto traz um conceito pioneiro no mercado e na comunidade: deploys em círculos de usuários em clusters de Kubernetes. 

Neste modelo de deploy, é possível segmentar seus clientes através de características específicas e, ao mesmo tempo, submeter diversas versões de uma mesma aplicação para teste com os usuários dos círculos. 

## C1 -  Context

`/C1 -  Context`

[C4Model](#CharlesCD)

É o primeiro nível do nosso desenho. A ideia é mostrar as interações de forma macro, sem muitos detalhes, dando enfoque às comunicações e dependências entre sistemas e usuários que compõem e interagem com o software.



![diagram](c1.svg)

## C2 - Container

`/C2 - Container`

[C4Model](#CharlesCD)

Nesse nível mostramos de maneira mais detalhada o sistema descrevendo os seus containers (Não confundir com o Docker) e como eles se comunicam/interagem. Nesse nível é dado ênfase na arquitetura e tecnologias utilizadas. A ideia é mostrar como o sistema é de forma macro. Um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.


![diagram](c2.svg)

## C3 -  Component

`/C3 -  Component`

[C4Model](#CharlesCD)

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O CharlesCD hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model.

- Butler
- Circle Matcher
- Compass
- Gate
- Moove
- UI
- Villager


## Butler

`/C3 -  Component/Butler`

[C4Model](#CharlesCD)


Responsável por orquestrar e gerenciar as releases e deploys realizados.



![diagram](c3.svg)

## Circle-Matcher

`/C3 -  Component/Circle-Matcher`

[C4Model](#CharlesCD)

Gerencia todos os círculos criados, além de indicar a qual círculo um usuário pertence, com base em um conjunto de características.


![diagram](c3.svg)

## Compass

`/C3 -  Component/Compass`

[C4Model](#CharlesCD)

Integração do provedor de dados, faz análise de métricas e executa ações configuráveis.

![diagram](c3.svg)

## Gate

`/C3 -  Component/Gate`

[C4Model](#CharlesCD)

Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.

![diagram](c3.svg)

## Hermes

`/C3 -  Component/Hermes`

[C4Model](#CharlesCD)

Controla as subscriçõe de webhooks e envia as mensagens de eventos para as subscrições cadastradas.

![diagram](c3.svg)

## Moove

`/C3 -  Component/Moove`

[C4Model](#CharlesCD)

É um serviço backend que orquestra os testes de hipóteses de seus produtos e o pipeline de entrega até atingir seus círculos, facilitando a ponte entre os outros módulos.

![diagram](c3.svg)

## UI

`/C3 -  Component/UI`

[C4Model](#CharlesCD)

Responsável por prover uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD, no intuito de simplificar testes de hipóteses e circle deployment.

![diagram](c3.svg)

## Villager

`/C3 -  Component/Villager`

[C4Model](#CharlesCD)

**Villager**



![diagram](c3.svg)