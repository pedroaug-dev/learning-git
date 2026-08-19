# 📘 Git — Professional Manual for Beginners

A complete, organized, and annotated guide for academic and professional use.

---

# 📑 Table of Contents

* [1. Basic Concepts](#1-basic-concepts-of-git)
* [2. Initial Setup](#2-initial-environment-setup)
* [3. Connection and SSH Diagnosis](#3-connection-and-ssh-diagnosis-real-case)
* [4. Fundamental Commands](#4-fundamental-commands)
* [5. Intermediate Commands](#5-intermediate-commands)
* [6. Advanced Commands](#6-advanced-commands)
* [7. Inspection and Maintenance](#7-inspection-diagnosis-and-maintenance)
* [8. Best Practices](#8-best-practices)

---

# 1. Basic Concepts of Git

Git controls versions of files through three main areas:

### 📂 Working Directory

The physical files on your computer.

### 📦 Staging Area (Index)

The area where changes are prepared for the next commit.

### 🗂️ Repository (.git)

Where the definitive history is stored.

Visual flow:

```
Working Directory → Staging Area → Repository
```

---

# 2. Initial Environment Setup

Run this only **once per machine**.

```bash
# Set name
git config --global user.name "Your Name"

# Set email
git config --global user.email "you@example.com"

# Set VS Code as default editor
git config --global core.editor "code --wait"

# List settings
git config --list
```

---

# 3. Connection and SSH Diagnosis (Real Case)

## 3.1 Test SSH connection

```bash
ssh -T git@github.com
```

Expected response:

```
Hi username! You've successfully authenticated...
```

If this works, your SSH key is correctly set up.

---

## 3.2 Verify repository URL

```bash
git remote -v
```

HTTPS example (not recommended):

```
https://github.com/user/repository.git
```

SSH example (recommended):

```
git@github.com:user/repository.git
```

---

## 3.3 Change HTTPS to SSH

```bash
git remote set-url origin git@github.com:username/repository.git
```

---

# 4. Fundamental Commands

## 4.1 Initialization

```bash
git init
```

Creates a local repository.

```bash
git clone URL
```

Clones a remote repository.

```bash
git clone --depth 1 URL
```

A fast clone without full history.

---

## 4.2 Check status

```bash
git status
```

Shows:

* modified files
* new files
* staged files
* current branch

---

## 4.3 Add files

Add everything:

```bash
git add .
```

Add a specific file:

```bash
git add file.txt
```

Add interactively/partially:

```bash
git add -p
```

---

## 4.4 Commit

```bash
git commit -m "message"
```

Edit the last commit:

```bash
git commit --amend
```

---

# 5. Intermediate Commands

## 5.1 Branches

List:

```bash
git branch
```

Create new:

```bash
git switch -c new-branch
```

Switch:

```bash
git switch main
```

Merge:

```bash
git merge feature
```

---

## 5.2 Remote synchronization

Fetch updates:

```bash
git fetch origin
```

Pull and merge:

```bash
git pull origin main
```

Push commits:

```bash
git push origin main
```

---

# 6. Advanced Commands

## 6.1 Reset

Soft (keeps changes):

```bash
git reset --soft HEAD~1
```

Hard (discards everything):

```bash
git reset --hard HEAD~1
```

⚠️ Warning: hard reset removes code.

---

## 6.2 Revert

A safe way to undo a commit:

```bash
git revert HASH
```

Creates a new commit that reverts the previous one.

---

# 7. Inspection, Diagnosis and Maintenance

Short history:

```bash
git log --oneline --graph
```

See author by line:

```bash
git blame file.txt
```

Recover lost commits:

```bash
git reflog
```

---

# 8. Best Practices

## ✔ Atomic commits

One commit = one logical change

Example:

```
Add login
Fix footer
Update CSS
```

---

## ✔ Standardized messages

Recommended format:

```
type: description
```

Examples:

```
feat: add login page
fix: correct footer spacing
docs: update git manual
style: format markdown file
```

---

## ✔ Avoid force pushing

Not recommended:

```bash
git push --force
```

Safer:

```bash
git push --force-with-lease
```

---

## ✔ Use .gitignore

Example:

```
venv/
__pycache__/
.env
node_modules/
*.log
*.sqlite3
```

---

# 🚀 Professional Flow

The most commonly used workflow daily:

```bash
git pull
git add .
git commit -m "message"
git push
```

---

# 🧠 Complete Flow

```bash
git status
git pull
git add .
git commit -m "clear message"
git push origin main
```

---

# 📌 Commit Convention (Professional)

| Type     | Use                 |
| -------- | ------------------- |
| feat     | new feature         |
| fix      | bug fix             |
| docs     | documentation       |
| style    | formatting          |
| refactor | refactoring         |
| chore    | general tasks       |

Example:

```bash
git commit -m "docs: format git manual"
```

---

# 🏁 Final

This manual covers:

* Git concepts
* Initial setup
* Professional SSH setup
* Essential commands
* Intermediate commands
* Advanced commands
* Diagnosis
* Best practices
* Professional workflow

Document ready for academic and professional use.
