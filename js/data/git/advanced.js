export const GIT_ADVANCED = {
  category: "Git Advanced & Operations",
  icon: "🔀",
  items: [
    {
      name: "Merge vs Rebase",
      description: "Both commands integrate changes from one branch into another, but they do it differently. Merging creates a new 'merge commit' that ties the two histories together. Rebasing rewrites history by moving the base of your branch to the tip of another, creating a cleaner, linear history.",
      image: "assets/git/git_merge_vs_rebase.svg",
      behindTheScenes: "During a rebase, Git takes the commits from your branch, saves them temporarily, resets your branch to the tip of the target branch, and then applies your saved commits one by one on top. This is why the commit hashes change—they are technically new commits.",
      code: `# Merge 'feature' into 'main'
git checkout main
git merge feature

# Rebase 'feature' onto 'main'
git checkout feature
git rebase main`
    },
    {
      name: "Reset vs Revert",
      description: "If you made a mistake, you can undo it. 'git reset' moves the branch pointer backward, effectively erasing history (dangerous if shared). 'git revert' creates a new commit that applies the exact opposite changes of the target commit, preserving history (safe for shared branches).",
      behindTheScenes: "`git reset --soft` moves the HEAD pointer but keeps your files and staging area intact. `--mixed` (default) clears the staging area. `--hard` wipes out everything, reverting your actual working directory to the specified commit state.",
      code: `# Revert a public commit safely
git revert <commit-hash>

# Undo the last commit but keep the files
git reset --soft HEAD~1

# DESTROY the last commit and all uncommitted work (Use with caution)
git reset --hard HEAD~1`
    },
    {
      name: "Cherry-Picking",
      description: "Allows you to pick an arbitrary commit from one branch and apply it to another. Useful when you accidentally made a commit on the wrong branch, or want to pull a specific bugfix without merging an entire feature branch.",
      behindTheScenes: "Git looks at the diff introduced by the specified commit, and attempts to apply that exact diff to your current working directory. It then creates a brand new commit on your branch with that diff.",
      code: `# Apply a specific commit to your current branch
git cherry-pick <commit-hash>`
    },
    {
      name: "The Reflog (Your Safety Net)",
      description: "If you accidentally delete a branch or do a hard reset and lose commits, they are not actually gone immediately. The 'reflog' keeps track of every time your HEAD pointer moved (every checkout, commit, reset, merge) for the last 30 days locally.",
      behindTheScenes: "Even if a commit has no branch pointing to it (a 'dangling' commit), it stays in `.git/objects` until the Garbage Collector cleans it up. You can use the reflog to find the hash of the lost commit and reset back to it.",
      code: `# View the history of HEAD movements
git reflog

# Rescue your project by resetting to a state from the reflog
git reset --hard HEAD@{2}`
    },
    {
      name: "Stashing",
      description: "Stashing allows you to temporarily shelve (or stash) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on.",
      code: `# Save your uncommitted work
git stash

# List all stashes
git stash list

# Re-apply the most recent stash and remove it from the stash list
git stash pop`
    }
  ]
};
