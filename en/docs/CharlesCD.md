# CharlesCD

* [C4Model](#C4Model)
  * [C1 -  Context](#C1----Context)
  * [C2 - Container](#C2---Container)
  * [C3 -  Component](#C3----Component)
    * [Butler](#Butler)
    * [Circle-Matcher](#Circle-Matcher)
    * [Compass](#Compass)
    * [Gate](#Gate)
    * [Hermes](#Hermes)
    * [Moove](#Moove)
    * [UI](#UI)
    * [Villager](#Villager)

---

## C4Model

## **Overview**

The software architecture defines the parts of the software and it is also the technology strategy of a project/product. It is very important for the users to see constant updates because, without them, failures may happen.

### Architecture documentation 
Documenting a project's architecture takes time, knowledge of tools, and layout techniques. The biggest challenge is to avoid two scenarios: 

- **Scenario 1:** Complex documentation can be confusing and obsolete and it loses the main purpose and it is a waste of time to produce something it won't be used. 

- **Scenario 2:** Documents with flaws and not enough information.

In both cases, the final result can confuse the user. 

The project's architecture is crucial for the user to have a better experience, so it is important to document because it answers questions like: 
- How does my system integrate between itself and other systems? 
- How can I escalate my application? 
- How can I assure my application's security? 

After all this, CharlesCD's team created a view of our architecture in a simpler way, the C4 Model.


## **What is a C4Model?**

The C4 model was created by Simon Brown, it is based on 4+1 and UML. The model helps to solve architecture problems in the documentation, it is divided into 4 diagrams, each one has a different detail level to a specific audience. The idea is to bring a clearer view of the project deep diving at every level. 


## **What is CharlesCD?**

Charles is an open-source tool that performs deployment in a continuous, agile, and safe way. It allows the development teams to make hypotheses validations with specific user groups.

The project brings a new concept to the market and to the community: deployment in users' circles in Kubernetes clusters.

In this deployment model, it is possible to segment your clients through specific characteristics and submit several versions of the same application to test with circle's users.

## C1 -  Context

`/C1 -  Context`

[C4Model](#CharlesCD)

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

## C2 - Container

`/C2 - Container`

[C4Model](#CharlesCD)

At this level, you can see details of the system describing the containers (don't mix it up with Docker) and how they communicate/interact. Here, the main goal is to show you the architecture and technology we use. 

We want to show you how the system is and a container can be a web application, a databse, a sysyem file, etc. 

CharlesCD was built using a microservices approach, and it has the following modules (each module is a container): 

- **UI:** It provides a friendly-user interface for all CharlesCD features. 

- **Moove:** It is a backend service that orchestrates the hypotheses tests of your products and the delivery pipeline until it reaches your circles, it is like a bridge between other microservices.

- **Butler:** Orchestrates and manages the releases and deployments.

- **Circle Matcher:** Manages all circles and indicates which one the user belongs to based on a set of characteristics. 

- **Compass:** Integrates with the data provider, it makes the metrics analysis and runs actions you are able to configure.

- **Hermes:** Manages and notifies webhook events. 

- **Gate:** Controls the user's permissions related to the existing resources on Charles' APIs.

![diagram](c2.svg)


![diagram](c2.svg)

## C3 -  Component

`/C3 -  Component`

[C4Model](#CharlesCD)

Level 3 describes what the system is made of. The focus here is to show you more details about the interactions, responsabilities and technologies we use. 

CharlesCD os divided by modules, each one of them is a container inside C4Model, check out below: 

- **Butler:** Orchestrates and manages deployments and releases. 
- **Circle Matcher:** Manages and identifies the circles.
- **Compass:** Performs the data provider integration, makes the metrics analysis, and runs actions you can configure. 
- **Gate:** Controls the user's permissions related to the existing resources on Charles' APIs.
- **Moove:** Orchestrates the hypotheses tests of your products and the delivery pipeline until it reaches your circles, it is like a bridge between other microservices.
- **UI:**  It provides a friendly-user interface for all CharlesCD features. 
- **Villager:** Access Docker images. 



## Butler

`/C3 -  Component/Butler`

[C4Model](#CharlesCD)

Backend service in NestJS, it orchestrates and manages the deployments and releases.


![diagram](c3.svg)

![diagram](c3.svg)

## Circle-Matcher

`/C3 -  Component/Circle-Matcher`

[C4Model](#CharlesCD)

Backend service in Java, It manages all created circles and indicates which circle the user belongs to based on a set of characteristics. 


![diagram](c3.svg)


![diagram](c3.svg)

## Compass

`/C3 -  Component/Compass`

[C4Model](#CharlesCD)

Backend service in Golang and it performs:
- The data provider integration.
- The metrics analysis. 
- It runs the action you can configure. 

![diagram](c3.svg)

![diagram](c3.svg)

## Gate

`/C3 -  Component/Gate`

[C4Model](#CharlesCD)

Backend service in Golang, it ontrols the user's permissions related to the existing resources on Charles' APIs.

![diagram](c3.svg)

![diagram](c3.svg)

## Hermes

`/C3 -  Component/Hermes`

[C4Model](#CharlesCD)

Backend service in Golang, it controls the webhook's subscriptions and sends events messages to the registered ones.

![diagram](c3.svg)

![diagram](c3.svg)

## Moove

`/C3 -  Component/Moove`

[C4Model](#CharlesCD)

Orchestrates the hypotheses tests of your products and the delivery pipeline until it reaches your circles, it is like a bridge between other microservices.

![diagram](c3.svg)

![diagram](c3.svg)

## UI

`/C3 -  Component/UI`

[C4Model](#CharlesCD)

Frontend service in ReactJS, it provides a friendly-user interface for all CharlesCD features. It was created to simplify hypotheses tests and circles deployments. 


![diagram](c3.svg)

![diagram](c3.svg)

## Villager

`/C3 -  Component/Villager`

[C4Model](#CharlesCD)

Backend service in Java and accesses Docker's images. It is integrated with DockerHub, AWS ECR, Azure Container Registry, GCR and Harbor.


![diagram](c3.svg)

![diagram](c3.svg)