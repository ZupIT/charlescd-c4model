# C3 -  Component

`/C3 -  Component`

* [C4Model](/docs/README.md)
  * [C1 -  Context](/docs/C1%20-%20%20Context/README.md)
  * [C2 - Container](/docs/C2%20-%20Container/README.md)
  * [**C3 -  Component**](/docs/C3%20-%20%20Component/README.md)
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

- [Butler](/docs/C3%20-%20%20Component/Butler/README.md)

- [Circle-Matcher](/docs/C3%20-%20%20Component/Circle-Matcher/README.md)

- [Compass](/docs/C3%20-%20%20Component/Compass/README.md)

- [Gate](/docs/C3%20-%20%20Component/Gate/README.md)

- [Hermes](/docs/C3%20-%20%20Component/Hermes/README.md)

- [Moove](/docs/C3%20-%20%20Component/Moove/README.md)

- [UI](/docs/C3%20-%20%20Component/UI/README.md)

- [Villager](/docs/C3%20-%20%20Component/Villager/README.md)

---

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O CharlesCD hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model:

- Butler: Orquestra e gerencia as releases e deploys realizados
- Circle Matcher: Gerencia e identifica os círculos
- Compass: Realiza ntegração do provedor de dados, faz análise de métricas e executa ações configuráveis
- Gate: Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles
- Moove:  Orquestra os testes de hipóteses e o pipeline de entrega até atingir seus círculos, facilitando a ponte entre os outros módulos
- UI: Prove uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD
- Villager: Responsável por acessar as imagens docker
