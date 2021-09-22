# **C4Model**

## **Overview**

A arquitetura de software define as partes de um software e é também a estratégia tecnológica de um produto/projeto. Com isso, é muito importante que ela seja vista e frequentemente atualizada, porque um planejamento sem visualização tende a ser falho. 

Documentar a arquitetura de um projeto é um processo que exige tempo, conhecimento de ferramentas e técnicas para diagramação e a documentação. O maior desafio com a documentação de arquitetura é evitar dois cenários:

- **Cenário 1:** Documentações muito complexas que ficam confusas e obsoletas, e que acabam perdendo o seu propósito. Ou seja, gastar tempo para uma documentação que não será utilizada.

- **Cenário 2:** Documentações com falhas e pouca informação. 

Em ambos os casos, o resultado final é que elas podem confundir o usuário. 


A visualização da arquitetura é crucial, ela responde várias perguntas, por exemplo: 
- Como o meu sistema integra entre ele mesmo e outros sistemas? 
- Como consigo escalar a minha aplicação? 
- Como garantir a segurança entre as minhas aplicações?

Pensando nisso, o time do Charles criou uma visualização da nossa arquitetura de um modo mais simples, o C4 Model.

## **O que é o C4Model?**

 O C4 Model é baseado no 4+1 e UML e foi criado por Simon Brown entre 2006 e 2011. O modelo surgiu com o intuito de ajudar a resolver o problema de documentação de arquiteturas falhas, difíceis de entender e manter, trazendo uma visão mais clara da arquitetura documentada abrangendo vários níveis e que seja relevante para as várias “personas” envolvidas. 
 É dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. A ideia é que cada nível se aprofunde mais nos detalhes e informações do nível anterior. 


## **O que é o CharlesCD?**

O CharlesCD é uma ferramenta open source que realiza deploys de forma ágil, contínua e segura, permitindo que as equipes de desenvolvimento realizem simultaneamente validações de hipóteses com grupos específicos de usuários. 

O produto traz um conceito pioneiro no mercado e na comunidade: deploys em círculos de usuários em clusters de Kubernetes. 

Neste modelo de deploy, é possível segmentar seus clientes por meio de características específicas e também submeter diversas versões de uma mesma aplicação para teste com os usuários dos círculos. 