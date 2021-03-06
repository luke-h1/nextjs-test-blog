---
title: force git merges 
description: "testing my git blog post" 
--- 

Isolating features into seperate branches is a really common practice for most developers. By seperating features, bug fixes or working on experiments you can avoid a lot of problems and keep your master / development branches clean.
At some point you may reach a state where you want to integrate your feature branch with the rest of your project. This is where the git merge command comes into play



I recently ran into an issue where my feature branch conflicted with the dev branch. If I tried to merge my feature into the dev branch I would have had to deal with endless conflicts. This is where I needed to force the merge into my development branch

<h1>Preparing to merge</h1>


Let's assume you want to merge branch hotfix into your master branch but the changes made in hotfix conflict with master. You know the changes in hotfix won't overwrite any important code in master and you need to get this fix deployed.


Before you touch anything ensure that your local repository (hotfix branch) is up to date with the latest changes from your remote origin with a:


```shell
git fetch && git status
# If anything shows up here move it to your desktop or stash it
```
<h1>Prepare your main / master branch</h1>

```shell
git checkout master && git pull
```


<h1>Dress up your hotfix branch</h1>


```shell
git checkout hotifx
```


```shell
git merge --strategy=ours master
# quit out of the editor when it asks you if you
# want to merge into your current branch
```

<h1>Go in for the kill 😎</h1>



```shell
git checkout master
```


```shell
git merge --no-ff hotfix
```


This merge approach will add one commit on top of your master / main branch which pastes in whatever is in your feature branch without complaining about any pre existing merge conflicts.