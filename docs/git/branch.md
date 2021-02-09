# **Git branch**
--- 
*In this exemple we take :  `branch_name = igloo`*

## **Create**
```shell
git branch igloo
```

## **Checkout**

*Move to a specific branch*

=== "Move to Igloo"

    ``` sh
    git checkout igloo
    ```

=== "Move to master"

    ``` sh
    git checkout master
    ```


## **Merge**

*Merch branch with Master branch*

=== "Merge"

    ``` sh
    git checkout master
    git merge igloo
    ```

    ???+ warning
        **This might create a "Merge branch" commit if master was ahead of branch**  
        When master branch is ahead, use rebase

=== "Merge & Rebase history"

    ``` sh
    git checkout igloo
    git rebase master
    git checkout master
    git merge igloo
    ```

    ???+ info
        `git rebase master` : redesign branch now start from last master commit (even if he was ahead before)  
        **Igloo Branch history is added to master branch history **

=== "Interactive"

    ``` sh
    git checkout igloo
    git rebase -i master
    ```

    ???+ Tip
        **pick **= use commit   
        **squash **= use commit, but meld into previous commit  
        **fixup **= like "squash", but discard the commit's log message  
    
    ```
    git checkout master
    git merge igloo
    ```


## **Delete**
 
*Delete branch after successful merge*
```shell
git branch -d igloo
```

## **List**
 
*List local and remote branches*
```shell
git branch -a
```