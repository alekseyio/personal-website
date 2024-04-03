# Backend

This is a simple backend built using Hono, hosted as a Cloudflare worker.

## Local setup

1. Install dependencies:
```
npm i
```

2. Create `.dev.vars` file out of `.dev.vars.example` and populate it with real values:
```
cp ./.dev.vars.example ./.dev.vars
```

3. Run the server:
```
npm run dev
```

4. Make a healthcheck request to `http://localhost:1234/healthcheck`, it should respond with status code of 200
```
curl -X GET http://localhost:1234/healthcheck
```

## Deployment

TODO!
