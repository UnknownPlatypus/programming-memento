# **Fork, Issues & Pull Request**
--- 

*Might be usefull to have a SSH connection setup*    
*(Use `ssh-keygen -t rsa -C "youremail@gmail.com"` and add the public key to your Github account)*

## **Close an issue**

*you can close an issue with a special syntaxe in your bug solving commit*

``` sh
git commit -a -m "fixes #12 Solve Issue n°12"
```

???+ tip
    You can replace “fixes” keyword with any in this list :  
    “Fixed”, “Fix”, “Closes”, “Closed”, or “Close” 
    

## **Fork a repository**

*Allow user to work on his own version of a repository*  
*Validation is needed to add changes to the main project via a pull request*

???+ danger
    Never do commits to your fork master. Always work on a branch  
    Master branch should only be used to synchronize your fork with owner repository    

### **Initial Fork**
*Just go to a Github repository and click the “Fork” option* 
*This also import repository history*

Now clone this, do your changes and push it to a remote branch

``` sh
git clone https://github.com/UnknownPlatypus/youtube-dl.git
git branch readme-fix
git checkout readme-fix
git commit -a -m "Wonderful readmefix.md"
git push origin readme-fix
```

???+ tip
    Always create a new branch because you don't want to do pull request on master since the main project master might have changed in between.

### **Upstream Fork**
*If you want to update your fork with owner changes*
*Checkout master branch*

``` sh
git remote add upstream https://github.com/ytdl-org/youtube-dl.git
git remote -v
```

??? info
    You should see this :
    ``` sh
    origin  https://github.com/UnknownPlatypus/youtube-dl.git (fetch)
    origin  https://github.com/UnknownPlatypus/youtube-dl.git (push)
    upstream  https://github.com/ytdl-org/youtube-dl.git (fetch)
    upstream  https://github.com/ytdl-org/youtube-dl.git (push)
    ```

*Now you need to collect code from the upstream remote :*

``` sh
git fetch upstream
git branch -a
```

??? info
    You should get a `remotes/upstream/master`

*Now merge with your local master :*

``` sh
git merge upstream/master
```

## **Pull request**

*Do this on Github with the “Pull Request” option*   
*Repo owner will get a notification and accept or not your request*  
*A pull request  conversation is created to discuss about potential changes to make*


