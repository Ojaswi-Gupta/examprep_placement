export const GIT_ACTIONS = {
  category: "GitHub Actions & CI/CD",
  icon: "🤖",
  items: [
    {
      name: "Understanding GitHub Actions",
      description: "GitHub Actions makes it easy to automate all your software workflows, right from GitHub. It allows you to build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.",
      image: "assets/git/github_actions.svg",
      behindTheScenes: "GitHub spins up a virtual machine (a runner) hosted in their cloud for every job you specify. It clones your repository into that runner, executes the commands you define, streams the logs back to the GitHub UI, and then destroys the virtual machine.",
      code: `# Workflows are defined in YAML files placed in the .github/workflows directory.
name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - run: npm ci
    - run: npm run build`
    },
    {
      name: "Core Components (Events, Workflows, Jobs, Steps)",
      description: "An **Event** triggers the process (like a push). A **Workflow** is the automated procedure added to your repo (the YAML file). A **Job** is a set of steps executed on the same runner. A **Step** is an individual task (running a command or an action).",
      behindTheScenes: "Jobs run in parallel by default to save time. If a job requires another job to finish first (e.g., 'deploy' needs 'build' to pass), you must use the `needs:` keyword. Steps run sequentially on the same machine, so they can share files and environment variables.",
      code: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Testing..."

  deploy:
    needs: test # Will wait for 'test' to finish successfully
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying..."`
    },
    {
      name: "Secrets and Variables",
      description: "You often need API keys, passwords, or tokens in your workflows. Instead of hardcoding them in your code (which is a major security risk), you store them securely in GitHub Repository Settings.",
      behindTheScenes: "GitHub encrypts the secrets and only injects them into the runner's memory at runtime. They are also scrubbed from the action logs automatically.",
      code: `steps:
  - name: Deploy to Server
    env:
      API_KEY: \${{ secrets.PROD_API_KEY }}
    run: ./deploy_script.sh`
    }
  ]
};
