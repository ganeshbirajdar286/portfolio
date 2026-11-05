# DevOps Configuration for tmp8nx2nomb

This repository has been configured automatically by the **AI DevOps Agent**.

## Architecture Summary

- **Repository Type:** Monorepo
- **Service `frontend`:**
  - Framework: `react_vite`
  - Language: `javascript`
  - Package Manager: `npm`
  - Exposed Port: `80`
  - Recommended Deployment Target: **Vercel**

- **Service `backend`:**
  - Framework: `express`
  - Language: `javascript`
  - Package Manager: `npm`
  - Exposed Port: `3000`
  - Recommended Deployment Target: **Render**

## Running Locally with Docker Compose

```bash
# Build and start all services locally
docker compose up --build
```

## CI/CD & Cloud Sandbox Testing

- `.github/workflows/ci.yml`: Standard pull request test & build workflow.
- `.github/workflows/ai-devops-verify.yml`: Cloud sandbox workflow for automated container verification.
