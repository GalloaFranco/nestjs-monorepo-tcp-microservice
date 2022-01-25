# nestjs-monorepo-tcp-microservice

---
🧪 Lab repo for test/implement NestJS native microservice with TCP communication. I will use monorepo mode to put client and server in the same project.

# ¿How to setting-up monorepo in Nest?

---
* `nest new project_name` -> This create a standard HTTP aplication.
* `cd project_name`
* `nest generate app app_name` -> This converts the "normal" app workspace to a monorepo workspace. We can see a new directory called `/apps`, inside there we find the `project_name` HTTP app and the new `app_name`  recently created.

# Configuring TCP microservice

---
### **Requirements:**
* `@nestjs/microservices` dependency installed

## `main.ts`

Here we create a microservice using `createMicroservice` method of `NestFactory`

```ts
const microserviceOptions: MicroserviceOptions = {
transport: Transport.TCP,
options: {
host: '127.0.0.1',
port: 3001,
},
};
const app = await NestFactory.createMicroservice(MicroserviceTcpModule, microserviceOptions);
await app.listen();
````

## Controller

We use `@MessagePattern` to indicate request-response paradigm. In the below code, the `getRooster()` listens for messages that fulfill the `'getRooster'` message pattern.

```ts
  @MessagePattern('getRooster')
  getRooster(): string {
    return this.microserviceTcpService.getRooster();
  }
```

# Configuring TCP client

---
The only thing we need to set is the `ClientProxy` in the service . This proxy allow us to communicate the client with the microservice.


```ts
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // microservice host
        port: 3001, // microservice port
      }
    });
  }
```
Once the communication is established we can execute send method to make the request.

```ts
/*
 The second parameter is empty string because getRooster doesn't receive any parameter, 
 but is mandatory in send method indicate one.
 */
return this.client.send('getRooster', '');
```