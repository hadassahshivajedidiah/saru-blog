# How to Use This Template

This guide explains how to use this repository as a base for future projects and how to refer back to the setup history.

## 1. Hosting the Template (Recommended)

To use this efficiently, you should host it on GitHub as a **Template Repository**.

1.  Create a new repository on GitHub (e.g., `my-nextjs-template`).
2.  Push this code to the new repository:
    ```bash
    git remote add origin https://github.com/Start-Fresh
    git push -u origin main
    ```
3.  On GitHub, go to **Settings** -> **General** and check the box **"Template repository"**.

### Using the Template

When you want to start a **new project**:

1.  Go to your Template Repository on GitHub.
2.  Click the **"Use this template"** button.
3.  Select **"Create a new repository"**.
4.  GitHub will create a fresh copy.

> **Note on History:** When you use "Use this template", your _new_ project will start with a single initial commit ("Initial commit"). It will **NOT** inherit the full commit history of the template. **This is good!** You don't want your new app's history cluttered with "setup prettier", "setup eslint", etc.

### Referencing the Setup

If you need to see _how_ the project was set up (the "reference" you asked for):

- Simply look at the **Template Repository** itself. The commit history there (e.g., `build: configure prettier`) is preserved forever as your reference guide.

## 2. Cloning Manually (Alternative)

If you don't want to use GitHub Templates, you can clone manually.

**To KEEP the history (Not recommended for new apps):**

```bash
git clone https://github.com/your-username/my-nextjs-template.git my-new-app
cd my-new-app
npm install
# You now have the full history.
```

**To START FRESH (Local Template):**

```bash
# 1. Clone
git clone https://github.com/your-username/my-nextjs-template.git my-new-app
cd my-new-app

# 2. Remove old history
rm -rf .git

# 3. Initialize new history
git init
git add .
git commit -m "Initial commit from template"

# 4. Install
npm install
```

## Summary for You

- **The Template Repo**: Holds the "textbook" sequential history you built. Keep this safe. Use it to teach others or remind yourself how things work.
- **New Projects**: Should allow the template mechanism to flatten the history so you start fresh, while knowing the foundation is solid.
