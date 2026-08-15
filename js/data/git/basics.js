export const GIT_BASICS = {
  category: "Git Core & Basics",
  icon: "⚙️",
  items: [
    {
      name: "The Git Workflow (Under the Hood)",
      description: "Git has three main states that your files can reside in: modified, staged, and committed. The Working Directory holds your actual files. The Staging Area (or Index) is where you prepare files for the next commit. The Local Repo stores the committed snapshots.",
      image: "assets/git/git_workflow.svg",
      behindTheScenes: "Git doesn't store differences (deltas) like SVN. Instead, every time you commit, Git takes a snapshot of what all your files look like at that moment and stores a reference to that snapshot. If files haven't changed, it just links to the previous identical file.",
      code: `# Initialize a new repository
git init

# Check the status of your working directory and staging area
git status`
    },
    {
      name: "Adding and Committing",
      description: "You must first 'add' files to the staging area before you can 'commit' them to the repository history. This two-step process allows you to group related changes together in a single commit, even if you modified many files.",
      behindTheScenes: "When you run `git add`, Git creates a binary blob of the file's content and stores it in the `.git/objects` directory, adding a reference to it in the index. When you `git commit`, Git creates a commit object pointing to a tree of those blobs.",
      code: `# Add a specific file to the staging area
git add index.html

# Add all modified and new files in the current directory
git add .

# Commit the staged changes with a descriptive message
git commit -m "feat: Add new user login form"`
    },
    {
      name: "Branching",
      description: "Branching means diverging from the main line of development to work on a feature, bug fix, or experiment without affecting the main codebase.",
      behindTheScenes: "A branch in Git is simply a lightweight movable pointer to a commit. When you create a new branch, Git just creates a new pointer (e.g., `feature-xyz`) pointing to the exact same commit you are currently on. It is incredibly cheap and fast.",
      code: `# List all local branches
git branch

# Create a new branch
git branch feature-login

# Switch to the new branch
git checkout feature-login

# Create and switch in one step (modern way)
git switch -c feature-login`
    },
    {
      name: "Connecting to a Remote",
      description: "To collaborate, you must connect your local repository to a remote server (like GitHub or GitLab). You 'push' your commits to the remote, and 'pull' or 'fetch' changes from others.",
      behindTheScenes: "Remotes are just bookmarks to other repositories. `git push` takes your local commits and objects that the remote doesn't have and sends them over. `git pull` is actually two commands combined: `git fetch` (downloads objects) + `git merge` (integrates them).",
      code: `# Add a remote origin
git remote add origin https://github.com/user/repo.git

# Push your local main branch to the remote origin
git push -u origin main

# Pull the latest changes from the remote
git pull origin main`
    }
  ]
};
