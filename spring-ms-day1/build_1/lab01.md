# Lab: Creating Service Registry for Ecommerce App

## Tasks:

### Task 1: Generating Template from spring initializer

* visit the [spring initializer](https://start.spring.io)
* Add the dependencies
  
![](./images/image1-1.png)

### Task 2: Open the project in intellij
* Convert `application.properties` to `application.yaml` 

### Task 3: Enable Eureka Server
* In Application File - `@EnableEurekaServer`
   
![](./images/image1-2.png)

### Task 4: Add Configuration in application.yml
set `server.port` to `8761`

![](./images/image1-3.png)

## Output:

Now you can check the service registry using the above address

![](./images/image1-4.png)

![](./images/image1-5.png)

visit https://spring.io/guides/gs/service-registration-and-discovery for more