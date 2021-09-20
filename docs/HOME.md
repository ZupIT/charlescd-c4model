# C4Model



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