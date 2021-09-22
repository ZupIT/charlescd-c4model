# C1 -  Context

`/C1 -  Context`

* [C4Model](/docs/README.md)
  * [**C1 -  Context**](/docs/C1%20-%20%20Context/README.md)
  * [C2 - Container](/docs/C2%20-%20Container/README.md)
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

É o primeiro nível do nosso desenho. A ideia é mostrar as interações de forma macro, sem muitos detalhes, dando enfoque às comunicações e dependências entre sistemas e usuários que compõem e interagem com o software.

Nesse nível contextualizamos  de forma macro como o CharlesCD interage com o Kubernetes e permite que o usuário possa gerenciar seus deploys utilizando uma série de recursos como métricas, hipoteses e webhooks. Onde:

- **Usuário:** Qualquer pessoa que possui uma aplicação que tem os deploys gerenciados pelo CharlesCD. Seja ela um desenvolvedor, gestor, QA, PM, etc.

- **Sistema CharlesCD**: O CharlesCD é uma ferramenta de deploy continuo orientada a hipoteses que permite o gerenciamento dos deploys de aplições web e backend. Ele permite o gerenciamento dos deploys (rollout e rollback), cria estratégias inteligentes para validação de hipóteses, colhe e observa métricas e faz acompanhamento de versões das suas aplicações. Além disse ele envia informações de eventos (previamente configurados) via webhooks. 
O CharlesCD interage diretamente com o Kubernetes, solicitando a implantação de atualizações no cluster do usuário.

- **Kubernetes:** Orquestra os containers das aplicações.


![diagram](c1.svg)