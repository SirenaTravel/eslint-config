# ips-eslint-config

1. Install eslint 

```bash
yarn add @ips-frontend/eslint-config -D
```

2. Install the correct versions of each package, which are listed by the command:

```bash
yarn info "@ips-frontend/eslint-config" peerDependencies
```

3. Install all dependecies:

```bash
npx install-peerdeps --dev @ips-frontend/eslint-config
```

4. Add next line to your `.eslintrc` or `.eslintrc.js`:

```json
{
  "extends": "@ips-frontend/eslint-config"
}
```
