# Typescript-Vite-React19
## How to Setup
### Create service by copying template
```bash
cp service-template foo-service
```

- Set package name
> For supplying comprehensions to the other services
```yaml
# ./foo-service/package.json
{
  "name": "@<project>/foo-service",
  ...
}
```

- Add workspace

```yaml
# ./pnpm-workspace.yaml
packages:
  - foo-service/ # name of dir
```

## Run dev-

```bash
pnpm install -r
pnpm run dev
```