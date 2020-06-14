---
layout: post
---

git config --global user.name "Name"
git config --global user.email "email@domain.com"

//create folder
git init "folder name"

//create a file
git add file1.txt
git commit -m"My commit message" (-m is to add a message)

//to clone a repository
git clone https://github.com/jepierre/PRIME

//to upload changes
git push


//create repository locally
#first create the repository on github.com without a README file
echo "# project1" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jepierre/project1.git
git push -u origin master

//create repositories locally
curl -u 'USER' https://api.github.com/user/repos -d '{"name":"REPO"}'
# Remember replace USER with your username and REPO with your repository/application name!
git remote add origin git@github.com:USER/REPO.git
git push origin master

//show git branches (use one of the following commands)
git branch
git remote
git ls-remote

//to checkout differences between merges
git mergetool 


#push an exisiting repository from the command line
git remote add origin https://github.com/jepierre/catkin_ws.git
git push -u origin master

git@github.com:jepierre/catkin_ws.git

#to get git commands
git 
# to commit all known files
git commit -a

# set git to remember password
git config credential.helper store
# file stored in .git-credentials, to stop just delete .git-credentials

# to temporarily remember password
git config crediential.helper cache <timout> # default timeout 90 seconds

# to set global ignore files
git config --global core.excludesfile ~/.gitignore_global

# to delete untracked files from git
git add -u

# caching password on windows
git config --global credential.helper wincred

# git remove files after setting .gitignore
git rm --cached <file>






