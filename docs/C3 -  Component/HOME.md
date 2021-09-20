# C3 -  Component

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O CharlesCD hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model:

- Butler: Orquestra e gerencia as releases e deploys realizados
- Circle Matcher: Gerencia e identifica os círculos
- Compass: Realiza ntegração do provedor de dados, faz análise de métricas e executa ações configuráveis
- Gate: Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles
- Moove:  Orquestra os testes de hipóteses e o pipeline de entrega até atingir seus círculos, facilitando a ponte entre os outros módulos
- UI: Prove uma interface de fácil usabilidade para todas as features fornecida pelo CharlesCD
- Villager: Responsável por acessar as imagens docker
