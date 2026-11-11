# Actividad 1 - CI/CD

Backend basico de Express con configuracion de linting, EditorConfig y hooks de Git.

## Estructura

- `backend/` - API Express (puerto 3000)
- `.husky/` - hooks `pre-commit`, `commit-msg`, `pre-push`
- `.editorconfig` - fuerza tabs (indent_style = tab)
- `sonar-project.properties` - configuracion para SonarLint/SonarQube

## Requisitos

- Node.js 18+
- Git

## Instalacion

```bash
npm install
cd backend && npm install
```

## Ejecutar

```bash
cd backend && npm start
```

## Linting

Editor: instalar extensiones ESLint y SonarLint (ver `.vscode/extensions.json`).

```bash
cd backend && npm run lint
```

## Hooks

- `pre-commit`: lint-staged (eslint --fix + prettier --write)
- `commit-msg`: commitlint (Conventional Commits, scope obligatorio)
- `pre-push`: tests unitarios del backend

## Tests

```bash
cd backend && npm test
```
