# C4Model



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