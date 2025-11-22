
---

# **AUPOS — AI Universal Productivity Overlay**

AUPOS is a **browser extension + MERN + LangChain** platform that adds an AI productivity layer on top of existing SaaS tools like **Jira, GitHub, Notion, Figma, Slack, LinkedIn**, and more.

It captures page context (DOM, selected text, screenshots) and performs smart AI actions such as:

* Summarizing Jira boards
* Explaining GitHub PRs
* Generating documentation in Notion
* UI → React component extraction from Figma
* Smart replies inside Slack or LinkedIn

---

## **📦 Tech Stack**

* **Frontend**: React, Chrome Extension (Manifest V3)
* **Backend**: Node.js, Express, TypeScript
* **AI Layer**: LangChain, RAG, Vector DB
* **Database**: MongoDB + Chroma / Pinecone
* **Monorepo**: Yarn Workspaces

---

## **📁 Project Structure**

```
aupos/
├─ apps/
│  ├─ extension/          # Chrome extension
│  ├─ dashboard/          # React dashboard
├─ packages/
│  ├─ server/             # Express backend + AI engine
│  ├─ langchain-workflows/# RAG + agents + prompts
│  ├─ shared/             # Shared utils/types
├─ infra/                 # Mongo + Chroma (docker)
└─ scripts/
```

---

## **🚀 Getting Started**

### Install dependencies

```bash
yarn install
```

### Start Mongo + Chroma

```bash
cd infra
docker-compose up -d
```

### Start server

```bash
cd packages/server
yarn dev
```

### Start dashboard

```bash
cd apps/dashboard
yarn start
```

### Load Chrome extension

* Go to `chrome://extensions/`
* Enable Developer Mode
* Load `apps/extension`

---
