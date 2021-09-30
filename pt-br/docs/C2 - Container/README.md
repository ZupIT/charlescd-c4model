# C2 - Container

`/C2 - Container`

* [C4Model](/docs/README.md)
  * [C1 -  Context](/docs/C1%20-%20%20Context/README.md)
  * [**C2 - Container**](/docs/C2%20-%20Container/README.md)
  * [C3 -  Component](/docs/C3%20-%20%20Component/README.md)
    * [Butler](/docs/C3%20-%20%20Component/Butler/README.md)
    * [Circle-Matcher](/docs/C3%20-%20%20Component/Circle-Matcher/README.md)
    * [Compass](/docs/C3%20-%20%20Component/Compass/README.md)
    * [Gate](/docs/C3%20-%20%20Component/Gate/README.md)
    * [Hermes](/docs/C3%20-%20%20Component/Hermes/README.md)
    * [Moove](/docs/C3%20-%20%20Component/Moove/README.md)
    * [UI](/docs/C3%20-%20%20Component/UI/README.md)
    * [Villager](/docs/C3%20-%20%20Component/Villager/README.md)

---

[C4Model (up)](/docs/README.md)

---

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