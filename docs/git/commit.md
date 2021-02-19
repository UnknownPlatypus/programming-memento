# **Undo commits & changes**
--- 

## **Revert a commit (Doesn't change history)**
*Revert every changes made in a commit with a new 'revert' commit*

=== "Full Commit"

    ``` sh
    git revert 7921a1e
    ```

=== "Specific File"

    ``` sh
    git revert 7921a1e index.html
    ```

## **Revert changes made after last commit **

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

    !!! warning
            You permanently lose every changes made locally since last commit


## **Revert to specific commit **

*Use Case #1 : How to reset last terrible commit (Last good commit is 32e4fc4)) ?*  
*Use Case #2 : How to rewrite history since commit 47e9cf6 ?*


=== "Case #1"
    ``` sh
    git reset 32e4fc4
    # Edit files as necessary
    git commit -a -m "Fix terrible bug"
    ```

    !!! info
        Go in the past, make changes to fix bug and then commit to rewrite history.
        

=== "Case #2"
    ``` sh
    git reset 47e9cf6
    git commit -a -m "History rewritten, changes retains"
    ```

    !!! info
        We go back to commit 47e9cf6. History is removed but files are not modified locally.
        Then we commit changes, history between commit and master has been rewritten.

## **Remove a specific commit **

*Use Case : You leaked information in a specific commit and you want to completely remove this commit ?*  


=== "Remove commit from history"
    ``` sh
    git rebase -i HEAD~x
    # x is the number of commits
    # Enter "drop" besides the commit you want to drop
    
    git  push --force-with-lease
    ```

    !!! danger
        Don't forget to first copy changes you made in the commit if you want to reupoad a fixed version in a new commit after
        


## **Amend**

Combine few commits

=== "Default (Confirm commit message)"

    ``` sh
    git commit --amend
    ```

=== "Change commit message"

    ``` sh
    git commit --amend -m "New commit message"
    ```

!!! warning
    Only do this locally on commits we haven't push to remote yet !