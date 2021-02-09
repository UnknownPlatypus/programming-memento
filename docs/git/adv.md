# **Advanced**

## **Git branch**
--- 
*In this exemple we take :  `branch_name = igloo`*

### **Create**
```shell
git branch igloo
```

### **Checkout**

*Move to a specific branch*

=== "Move to Igloo"

    ``` sh
    git checkout igloo
    ```

=== "Move to master"

    ``` sh
    git checkout master
    ```


### **Merge**

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


### **Delete**
 
*Delete branch after successful merge*
```shell
git branch -d igloo
```


## **Undo commits & changes**
--- 

### **Revert a commit (Doesn't change history)**
*Revert every changes made in a commit with a new 'revert' commit*

=== "Full Commit"

    ``` sh
    git revert 7921a1e
    ```

=== "Specific File"

    ``` sh
    git revert 7921a1e index.html
    ```

### **Revert changes made after last commit **

*Revert every changes made after last commit. 3 modes available :*

*   ***Soft :** Keep changes, Unstage changes*
*   ***Mixed(default) :** Keep changes, Unstage changes*
*   ***Hard :** Delete changes*

=== "Mixed"
    ``` sh
    git reset --mixed
    ```

=== "Soft"
    ``` sh
    git reset --soft
    ```

=== "Hard"
    ``` sh
    git reset --hard
    ```

    ???+ warning
            You permanently lose every changes made locally since last commit


### **Revert to specific commit **

*Use Case #1 : How to reset last terrible commit (Last good commit is 32e4fc4)) ?*  
*Use Case #2 : How to rewrite history since commit 47e9cf6 ?*


=== "Case #1"
    ``` sh
    git reset 32e4fc4
    # Edit files as necessary
    git commit -a -m "Fix terrible bug"
    ```

    ???+ info
        Go in the past, make changes to fix bug and then commit to rewrite history.
        

=== "Case #2"
    ``` sh
    git reset 47e9cf6
    git commit -a -m "History rewritten, changes retains"
    ```

    ???+ info
        We go back to commit 47e9cf6. History is removed but files are not modified locally.
        Then we commit changes, history between commit and master has been rewritten.


## **Manipulate history**
--- 

### **Amend**

Combine few commits

=== "Default (Confirm commit message)"

    ``` sh
    git commit --amend
    ```

=== "Change commit message"

    ``` sh
    git commit --amend -m "New commit message"
    ```

???+ warning
    Only do this locally on commits we haven't push to remote yet !
    

## **Stash**
--- 

*Use Stash to save current changes in a temporary memory.*

### **Create**

=== "Default"

    ``` sh
    git stash
    ```

    ???+ warning
        Untracked changes are not stashed  
        Always use `git status` first

=== "Stash Untracked"

    ``` sh
    git stash -u
    ```

    ???+ info
        Untracked changes are also stashed !  

=== "Rename Stash"

    ``` sh
    git stash save My Stash cool name
    ```

    ???+ info
        Stash is saved with the name "My stash cool name"  

### **List**

``` sh
git stash list
```

???+ exemple
    Return a stash list

    ``` sh
    stash@{0}: On master : My stash cool name
    stash@{1} : WIP on master : Remove IE9 support
    ```

### **Apply**

*Bring changes back* 

=== "Most Recent Stash"

    ``` sh
    git stash apply
    ```

    ???+ info
        Apply most recent stash

=== "Specific Stash"

    ``` sh
    git stash apply stash@{1}
    ```

    ???+ info
        Apply stash n°1

### **Delete**

*Delete remaining stash*

=== "Most Recent Stash"

    ``` sh
    git stash drop
    ```

    ???+ info
        Drop most recent stash

=== "Specific Stash"

    ``` sh
    git stash drop stash@{1}
    ```

    ???+ info
        Drop stash n°1

### **Show**

*Display changes saved in stash*

=== "Most Recent Stash"

    ``` sh
    git stash show
    ```

    ???+ info
        Show most recent stash

=== "Specific Stash"

    ``` sh
    git stash show stash@{1}
    ```

    ???+ info
        Show stash n°1

=== "More details"

    ``` sh
    git stash show -p stash@{1}
    ```

    ???+ tip
        Add more details with `-p`

### **Stash to another branch**

*Use Case : Move all current changes to a new branch*

``` sh
git stash 
git stash branch iglooStash
```

???+ info
    Automatically create & move you to 'iglooStash' branch  
    Move changes to this branch  
    Remove latest stash