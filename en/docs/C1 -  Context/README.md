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

This is the first drawing level. The idea is to show the project's interactions in a large view, focusing on the communication and dependencies between user and system that make and interact with the software.

At this level, we contextualize how CharlesCD interacts with Kubernetes and allows the user to manage their deployments using several resources such as metrics, hypotheses,and webhooks. 
See it below: 


### **User:** 
- Any person who has an application CharlesCD manages. It can be a developer, manager, QA, PM, others. 

### **CharlesCD system**
CharlesCD is a continuous deployment tool oriented through hypotheses that: 
    - Allows you to manage web and backend application deployments. 
    - Allows you to manage rollout and rollback deployments.
    - Creates smart strategies for hypothesis validation.
    - Collect and watch metrics. 
    - Track your application's versions. 
    - Send events informations (previously configured through webhooks. 

### **Kubernetes:** 
- Orchestrates the application's containers.

![diagram](c1.svg)


![diagram](c1.svg)