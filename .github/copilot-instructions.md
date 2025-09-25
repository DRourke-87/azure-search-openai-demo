# Copilot Instructions for AI Coding Agents

This project is a Retrieval Augmented Generation (RAG) chat app that enables users to interact with their own documents using Azure OpenAI and Azure AI Search. The architecture and workflows are tailored for rapid prototyping, Azure deployment, and extensibility.

## Architecture Overview
- **Frontend**: React (TypeScript, Vite) in `app/frontend`. Handles chat UI, settings, and citations.
- **Backend**: Python (Quart) in `app/backend`. Implements REST API, RAG approaches, and Azure integration.
- **Infra**: Bicep templates in `infra/` for Azure resource provisioning.
- **Data**: User documents in `data/`, ingested via scripts.
- **Tests**: All tests in `tests/` (pytest for backend, Playwright for e2e, see `AGENTS.md`).

## Key Patterns & Conventions
- **Approaches**: Extend or modify RAG logic in `app/backend/approaches/`. Use `approach.py` as a base. `retrievethenread.py` (Q&A) and `chatreadretrieveread.py` (chat) are main entry points.
- **Prompts**: Custom prompts live in `app/backend/approaches/prompts/`.
- **Frontend API**: All backend communication via `app/frontend/src/api/`.
- **Settings**: To add a developer setting, update both frontend (see `Settings.tsx`, `models.ts`, translations, and page components) and backend (see approaches and `app.py`).
- **Data Ingestion**: Add files to `data/` and run `scripts/prepdocs.sh` to index them.
- **Environment Variables**: Managed via azd. Update `infra/main.parameters.json`, `infra/main.bicep`, and CI/CD YAMLs for new variables.

## Developer Workflows
- **Local Dev**: Use VS Code Dev Containers or Codespaces. Start app with `./app/start.sh` (Linux/Mac) or `./app/start.ps1` (Windows), or use the VS Code "Start App" task.
- **Deploy**: Use `azd up` to provision and deploy. Use `azd deploy` for code-only changes.
- **Testing**: Activate `.venv` and run pytest for backend/unit tests. E2E tests use Playwright and mock backend responses.
- **Debugging**: See `docs/localdev.md` for hot-reload and debugging tips.

## Integration Points
- **Azure OpenAI**: Used for chat completions and embeddings.
- **Azure AI Search**: Used for semantic and vector search.
- **Azure Blob Storage**: Stores user documents.
- **Optional**: Cosmos DB (chat history), Vision/Speech (multimodal), App Insights (monitoring).

## Project-Specific Notes
- **All new features must include tests** (see `AGENTS.md` for test types and locations).
- **Follow the structure in `AGENTS.md` for adding data, settings, or environment variables.**
- **Docs**: See `docs/architecture.md` for diagrams and flows, and `docs/README.md` for advanced topics.

## Example: Adding a New Developer Setting
1. Update `app/frontend/src/api/models.ts`, `Settings.tsx`, translations, and page components.
2. Update backend approaches and `app.py` to handle the new setting.
3. Add tests for the new feature.

For more, see `AGENTS.md`, `README.md`, and `docs/architecture.md`.
