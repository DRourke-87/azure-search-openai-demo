
# Copilot Instructions for AI Coding Agents

This repository is a Retrieval Augmented Generation (RAG) chat application for Azure OpenAI and Azure AI Search, designed for rapid prototyping, Azure deployment, and extensibility. Use these instructions to maximize productivity as an AI coding agent in this codebase.

## Architecture Overview
- **Frontend**: React (TypeScript, Vite) in `app/frontend` for chat UI, settings, and citations. All backend communication is via `app/frontend/src/api/`.
- **Backend**: Python (Quart) in `app/backend`. Implements REST API, RAG approaches, and Azure integration. Main entry: `app/backend/app.py`.
- **Approaches**: RAG logic is modularized in `app/backend/approaches/`. Use `approach.py` as a base. Key files: `retrievethenread.py` (Q&A), `chatreadretrieveread.py` (chat with query rewrite). Prompts are in `app/backend/approaches/prompts/`.
- **Infra**: Bicep templates in `infra/` for Azure resource provisioning. Environment variables are managed via azd and defined in `infra/main.parameters.json` and `infra/main.bicep`.
- **Data**: User documents in `data/`, ingested with `scripts/prepdocs.sh`.
- **Tests**: All tests in `tests/` (pytest for backend, Playwright for e2e). See `AGENTS.md` for test types and locations.

## Key Patterns & Conventions
- **Settings**: To add a developer setting, update both frontend (`Settings.tsx`, `models.ts`, translations, page components) and backend (approaches and `app.py`). See `AGENTS.md` for the full checklist.
- **Data Ingestion**: Add files to `data/` and run `scripts/prepdocs.sh` to index them.
- **Environment Variables**: When adding, update `infra/main.parameters.json`, `infra/main.bicep`, and CI/CD YAMLs. See `AGENTS.md` for details.
- **Testing**: All new features must include tests. Add e2e tests for UI, integration tests for API, and unit tests for functions. Use mocks from `conftest.py` for external services.
- **Docs**: See `docs/architecture.md` for diagrams and flows, and `docs/README.md` for advanced topics.

## Developer Workflows
- **Local Dev**: Use VS Code Dev Containers or Codespaces. Start app with `./app/start.sh` (Linux/Mac) or `./app/start.ps1` (Windows), or use the VS Code "Start App" task.
- **Deploy**: Use `azd up` to provision and deploy. Use `azd deploy` for code-only changes.
- **Testing**: Activate `.venv` and run pytest for backend/unit tests. E2E tests use Playwright and mock backend responses.
- **Debugging**: See `docs/localdev.md` for hot-reload and debugging tips.

## Integration Points
- **Azure OpenAI**: For chat completions and embeddings.
- **Azure AI Search**: For semantic and vector search.
- **Azure Blob Storage**: For user document storage.
- **Optional**: Cosmos DB (chat history), Vision/Speech (multimodal), App Insights (monitoring).

## Example: Adding a New Developer Setting
1. Update `app/frontend/src/api/models.ts`, `Settings.tsx`, translations, and page components.
2. Update backend approaches and `app.py` to handle the new setting.
3. Add tests for the new feature (see `AGENTS.md`).

## References
- See `AGENTS.md` for detailed contribution and workflow instructions.
- See `README.md` and `docs/architecture.md` for architecture and advanced topics.
