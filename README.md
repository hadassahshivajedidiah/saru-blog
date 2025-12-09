# Scalable Next.js Template

A production-ready Next.js template featuring **Tailwind CSS v4**, **Shadcn UI**, and a robust developer experience (DX) suite including **ESLint**, **Prettier**, **Husky**, **Commitlint**, and **Commitzen**.

## 🚀 Features

- **Next.js 15+ (App Router)** - The latest React framework features.
- **Tailwind CSS v4** - Next-gen styling with simplified configuration.
- **Shadcn UI** - Reusable components built with Radix UI and Tailwind CSS.
- **TypeScript** - Static typing for scalable development.
- **ESLint & Prettier** - Automated code linting and formatting.
- **Husky & Lint-staged** - Pre-commit hooks to ensure code quality.
- **Commitizen & Commitlint** - Enforce standard commit messages.

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the application for production.
- `npm run start` - Start the production server.
- `npm run lint` - Run ESLint check.
- `npm run lint:fix` - specific fix auto-fixable linting issues.
- `npm run format` - Format code with Prettier.
- `npm run commit` - Commit changes using the interactive wizard.

## 🤝 Workflow & Best Practices

### Committing Changes

This project uses **Conventional Commits**. Please do not use `git commit` directly unless you are familiar with the convention. Instead, usage the interactive CLI:

```bash
npm run commit
```

This ensures your commit history is clean and follows standards (e.g., `feat: add login page`, `fix: header alignment`).

### Git Hooks

- **Pre-commit**: Automatically runs `eslint` and `prettier` on changed files. If there are errors, the commit will fail.
- **Commit-msg**: Verifies that your commit message follows the pattern `type(scope): subject`.

## 📂 Project Structure

- `src/app` - App Router pages and layouts.
- `src/components/ui` - Shadcn UI components.
- `src/lib` - Utility functions (e.g., `cn`).
- `.husky` - Git hooks configuration.
