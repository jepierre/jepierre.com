---
layout: post
---


# Git Cheat Sheet
This is a quick cheat sheet for getting started with Git. Most of the original content is from [here](https://rubygarage.org/blog/most-basic-git-commands-with-examples#article_title_7)

## Set up your configuration with Git
git config --global user.name "FirstName LastName"
git config --global user.email "your-email@email-provider.com"

## makes sure there's different color output for files
git config --global color.ui true

## show your config to confirm they were set properly
git config --list

## to create a repository
git init

## shows which files are tracked and which files not
git status

## add files to be staged to your local git repo
git add <file-name> <file-name2>

## undo add
git reset <file-name>

## remove a file from index
git rm --cached <file-name>

## committing changes to a repo, this needs to be done after adding a file and modifying a file
git commit -m "<your comment>"

## undo last commit
git reset --soft HEAD~

## if you want to amend your message
git commit --amend -m <your message>

## pushing or pulling from a repo
## gets the latest change from the remote repo
git pull

## push changes locally to remote repo for everyone to see
git push

# branching or merging
## list current branches (local)
git branch

## list current branch (local and remote)
git branch -a

## switch to a branch
git checkout <branch name>
or
git switch <branch name>

## create a branch and switch to it
git checkout -b <new branch name>
or
git switch -c <new branch name>

# supposed you have changes from your branch named my_branch that you want to merge with Master:
* switch to master branch
git checkout master
or
git switch master

* pull the latest from master
git pull

* add all commits from my_branch to master while squashing them to one commit message
git merge --squash my_branch

* amend the squash commit message, this let's you keep a reference to the old commit messages
git commit

* push to the remote master for everyone else to see
git push

# delete a branch
git branch -d <branch name>
if you use squash to commit, you will get an error that the branch is not fully merged. To force delete, use -D instead of -d option

git branch -D <branch name>



## merge using tortoise git
toroiseGit->Switch/Checkout
select master

tortoiseGit->Merge
select branch to merge
select squash

tortoiseGit->Commit
modify the message as needed

tortoiseGit->Push
