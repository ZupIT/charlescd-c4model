# C2 - Container

Nesse nível mostramos de maneira mais detalhada o sistema descrevendo os seus containers (Não confundir com o Docker) e como eles se comunicam/interagem. Nesse nível é dado ênfase na arquitetura e tecnologias utilizadas. A ideia é mostrar como o sistema é de forma macro. Um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.

O CharlesCD foi construindo utilizando a abordagem de microserviços e possui os seguintes módulos (onde cada módulo, é um container):

- **UI:**  Responsável por prover uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD.

- **Moove:**  Serviço backend que orquestra os testes de hipóteses de seus produtos e o pipeline de entrega até atingir seus círculos, realizando a ponte entre os demais microserviços.

- **Butler:**  Responsável por orquestrar e gerenciar as releases e deploys realizados.

- **Circle Matcher:** Gerencia todos os círculos criados, além de indicar a qual círculo um usuário pertence, com base em um conjunto de características.

- **Compass:** Integração do provedor de dados, faz análise de métricas e executa ações configuráveis.

- **Hermes:**  Responsável por gerenciar e notificar eventos de webhook.

- **Gate:** Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.

![diagram](c2.svg)