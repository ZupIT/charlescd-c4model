# C2 - Container

 # **C2: Container**

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