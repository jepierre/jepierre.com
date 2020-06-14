---
layout: post
--- 

# Config
do not use SSL  
```bash
git config --global http.sslverify false
```
update git config  
```bash
git config --edit --system  
```
Store credentials temporarily
```bash
git config --global credential.helper cache
```

store credentials permanent
```bash
git config --global credential.helper store
git config --global credential.helper store
```

git path too long
```bash
#git path too long error
git config --global core.longpaths true
```

if you're using JENKINS, this needs to be set in system config not --global
```bash
#git path too long error
git config --system core.longpaths true
```

# Git Remote
to change from HTTPS to SSH
```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

remove local reference to deleted branches on remote
```bash
git remote prune origin
```
do a dry run if needs be
```bash
git remote prune origin --dry-run
```

# set line endings
```bash
git config --global core.autocrlf input # linux
git config --global core.autocrlf true # windows
```

# remove local changes (equivalent to rm -Rf)
git reset --hard HEAD
git clean -xffd
git pull

# remove changes from last comit
git reset HEAD

# show log of git branches visually
git log --graph --decorate --oneline

# delete remote branch changing_default_config
git push origin :changing_default_config
git push origin --delete changing_default_config

# delete branch locally
git branch -d <branch name>

# creating branch
git checkout -b <branch_name>



# checkout a remote branch
git checkout <branch_name>

if local branch <branch_name> already exists
git checkout --track origin/<branch_name>

# tutorials
https://rubygarage.org/blog/most-basic-git-commands-with-examples#article_title_7


# switching remote URLs from SSH to HTTPS
## list remote url
git remote -v

## change remote url from SSH to HTTPS
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git



# add remote url
git remote add <url_name> <url_address>

# push to remote url
git push <url_name>

# push a specific branch and hash
git push <url_name> <hash>:master  # <hash> can be real hash or HEAD, HEAD^
git push <remote name> <commit hash>:<remote branch name>

# allow unrelated histories
git pull --allow-unrelated-histories

# git mergetool
https://gist.github.com/karenyyng/f19ff75c60f18b4b8149


# rename branches
https://www.hostinger.com/tutorials/how-to-rename-a-git-branch/

# show remote name for branches
git branch -vv

also can use:
git remote show origin

# delete remote branch
git push origin --delete <branch-name>

or:
git push remote_name :branch_name

# delete local branch
git branch -D <branch-name>

# [show diffs between branches](https://www.shellhacks.com/git-diff-between-branches/)

git diff <branch name>

# diff between 2 branchs
git diff master..staging

# only show files
git diff -name-status master..staging

# delete a submodule
https://gist.github.com/myusuf3/7f645819ded92bda6677#file-delete_git_submodule-md



# move commits to a new branch
https://stackoverflow.com/questions/1628563/move-the-most-recent-commits-to-a-new-branch-with-git
git branch <new-branch name>
git reset --keep HEAD~1 # keep the last 1 commit
git checkout <new-branch name>

# checkout a commit hash as new branch
git checkout -b <new-branch name> <commit-hash>

# show all branches
git branch
git branch -a # shows remote branches too

### [Merging](https://stackoverflow.com/questions/5308816/how-to-use-git-merge-squash)
```
git checkout master
git merge --squash bugfix
git commit
```

if you want to add to comments
git commit --amend -m "your comments"

# get one file from another branch
git checkout <other_branch_name> -- <file_name>
git restore -s <other_branch_name> -- <file_name> # doesn't restore the index
git restore -s <other_branch_name> -WS -- <file_name>

# compare file from another branch
git diff <other_branch_name> -- <file_name>
git diff <other_branch_name>:<file_name> <file_name>

# git graphing
git log --graph --oneline --all --pretty

# rm folders recursively
https://stackoverflow.com/questions/9529354/git-rm-several-files
find . -name '*.c' > filesToRemove.txt
cat filesToRemove.txt | xargs git rm -r --dry-run
or
for i in `cat filesToRemove.txt`; do git rm -r --dry-run $i; done


# git certificate issues
https://stackoverflow.com/questions/21181231/server-certificate-verification-failed-cafile-etc-ssl-certs-ca-certificates-c


# connect to github with ssh
https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh


# rename local and remote branches/
https://multiplestates.wordpress.com/2015/02/05/rename-a-local-and-remote-branch-in-git/
https://stackoverflow.com/questions/30590083/how-do-i-rename-both-a-git-local-and-remote-branch-name
git branch -m old-name new-name
git push origin :old-name new-name
git push origin -u new-name

# squash last 8 commits
git rebase -i HEAD~8
change pick to s

# undo a rebase
git reflog
git reset HEAD@{} # select the HEAD you want




# References
- [Markdown Tutorial](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  
- https://www.markdownguide.org/basic-syntax
- [suppported code highlighting](https://support.codebasehq.com/articles/tips-tricks/syntax-highlighting-in-markdown)
