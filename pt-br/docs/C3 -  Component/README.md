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

# **C3: Component**

O nível 3 apresenta descreve as partes que compõem o sistema. O foco aqui é mostrar as interações, responsabilidades e tecnologias utilizadas com mais detalhes.

O CharlesCD hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model, veja abaixo: 

- **Butler:** Orquestra e gerencia as releases e deploys realizados.
- **Circle Matcher:** Gerencia e identifica os círculos.
- **Compass:** Realiza a integração do provedor de dados, faz análise de métricas e executa ações configuráveis.
- **Gate:** Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.
- **Moove:** Orquestra os testes de hipóteses e o pipeline de entrega até atingir seus círculos, facilita a ponte entre os outros módulos.
- **UI:** Possui uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD.
- **Villager:** Acessa as imagens Docker.
