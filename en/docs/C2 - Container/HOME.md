# C2 - Container

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