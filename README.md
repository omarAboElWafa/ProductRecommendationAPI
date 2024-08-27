# ProductRecommendationAPI

## Structure

<span>
<pre>
.<br>
├── package-lock.json
├── package.json
└── src
    ├── app.ts
    ├── index.ts
    ├── components
    │   └── user
    │       ├── user.controller.ts
    │       ├── user.entities.ts
    │       ├── user.module.ts
    │       ├── user.router.ts
    │       └── user.service.ts
    │
    ├── contracts
    │   ├── errors.ts
    │   ├── mailer.ts
    │   └── user.js
    ├── loaders
    │   └── routes.ts
    │
    ├── utils
    │    ├── cache.ts
    │    ├── config.ts
    │    ├── helpers.ts
    │    ├── hooks.ts
    │    ├── loggers.ts
    │    ├── mailService.ts
    │    ├── middlewares.ts
    │    └── sms.ts
    │
    ├── index.ts
    │
    └── server.ts

</pre>
</span>

## Getting started

### Requirements

- Install [Docker](https://docs.docker.com/get-docker)
- Install [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`).

#### Running the project locally

1 - Build the project

```bash
docker compose build
```

2 - Run the project

```bash
docker compose up
```
