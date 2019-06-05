# ips-eslint-config

1. Install the correct versions of each package, which are listed by the command:

```bash
npm info "@ips-frontend/eslint-config" peerDependencies
```

2. Install all dependecies:

```bash
npx install-peerdeps --dev @ips-frontend/eslint-config
```

3. Add next line to your `.eslintrc` or `.eslintrc.js`:

```json
{
  "extends": "@ips-frontend/eslint-config"
}
```
