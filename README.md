# Typescript-Vite-React19
## How to Setup
### Create service by copying template
```bash
cp ./services/template ./services/foo
```

- Set package name
> For supplying comprehensions to the other services
```yaml
# ./services/foo/package.json
{
  "name": "service/foo",
  ...
}
```
## Run dev -

```bash
pnpm install -r

# Activate remote apps(shared) - Build & Preview
pnpm run deploy:dev

pnpm run dev
```