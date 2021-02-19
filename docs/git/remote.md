# **Remote**
--- 

*Save all your git history to a remote (Github, Gitlab, ...)*

## **List**
*List every remotes or branches*
=== "Remote List"

    ``` sh
    git remote -v
    ```

    ???+ info
        List every remote available

=== "Remote Branch List"

    ``` sh
    git branch -r
    ```

    ???+ info
        List every remote branches available


## **Create**

*The template is : `git remote add <remote_name> <adress>`*

=== "Github HTTPS"

    ``` sh
    git remote add origin https://github.com/UnknownPlatypus/sound-play.git
    ```

    ???+ warning
        Untracked changes are not stashed  
        Always use `git status` first

=== "Github SSH"

    ``` sh
    git remote add origin git@github.com:User/UserRepo.git
    ```

    ???+ info
        Untracked changes are also stashed !  

=== "Local Remote"

    ``` sh
    cd C:/path/to/local/remote
    git init --bare

    cd MyGitProject
    git remote add origin C:/path/to/local/remote
    ```

    ???+ info
        Local folder can be use as a remote  

## **Clone**

*The template is : `git clone <remote_link> <local_name>`*  

=== "Default"

    ``` sh
    git clone https://github.com/UnknownPlatypus/sound-play.git
    ```

    ???+ info
        Clone repository in a 'sound-play' folder

=== "Rename"

    ``` sh
    git clone https://github.com/UnknownPlatypus/sound-play.git custom_name   
    ```

    ???+ info
        Clone repository in a 'custom_name' folder


=== "Depth limit"

    ``` sh
    git clone --depth 5 https://github.com/UnknownPlatypus/sound-play.git
    ```

    ???+ warning
        Only keep the last 5 commits in local history



## **Push**

*The template is : `git push <remote_name> <local_branch_name>`*  
*Best practice to use remote_name = origin for the main remote* 
*(it's Github default for ex)*

=== "Push branch"

    ``` sh
    git push origin master
    git push origin igloo
    ```

=== "Remove remote branch"

    ``` sh
    git remote rm igloo
    ```
 
## **Pull**

*The template is : `git pull <remote_name> <remote_branch_name>`* 

=== "Pull branch"

    ``` sh
    git pull origin master
    ```
    ???+ warning
        Might create a "Merge branch" commit if local is ahead of remote  
        Use rebase to avoid that 


=== "Pull branch & Rebase History"

    ``` sh
    git pull --rebase origin master
    ```
  
=== "Setup rebase as default"

    ``` sh
    git config --global branch.autosetuprebase always
    ```

## **Rename**

``` sh
git remote rename origin lol
```

???+ info
    Now the remote name is 'lol' instead of 'origin'  
    You can use `git remote -v` to see that


## **Git clone someone else's repository & Git push to your own repository**

=== "Linked to origin repo"

1. Create a new repository at github.com. (this is your repository)
Give it the same name as the other repository.
Don't initialize it with a README, .gitignore, or license.

2. Clone the other repository to your local machine. (if you haven't done so already)
    `git clone https://github.com/other-account/other-repository.git`

3. Rename the local repository's current 'origin' to 'upstream'. 
    `git remote rename origin upstream`

4. Give the local repository an 'origin' that points to your repository.
    `git remote add origin https://github.com/your-account/your-repository.git`

5. Push the local repository to your repository on github.
    `git push origin master`
   
  
=== "Unlinked to origin repo"

1. Create a new repository at github.com. (this is your repository)
Give it the same name as the other repository.
Don't initialize it with a README, .gitignore, or license.

2. Clone the other repository to your local machine. (if you haven't done so already)
    `git clone https://github.com/other-account/other-repository.git`

3. Change the local repository's current 'origin' to a new url. 
    `git remote set-url origin http://github.com/YOU/YOUR_REPO`

4. Push the local repository to your repository on github.
    `git push origin master`
