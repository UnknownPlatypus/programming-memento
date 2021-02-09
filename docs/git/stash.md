# **Stash**
--- 

*Use Stash to save current changes in a temporary memory.*

## **Create**

=== "Default"

    ``` sh
    git stash
    ```

    !!! warning
        Untracked changes are not stashed  
        Always use `git status` first

=== "Stash Untracked"

    ``` sh
    git stash -u
    ```

    !!! info
        Untracked changes are also stashed !  

=== "Rename Stash"

    ``` sh
    git stash save My Stash cool name
    ```

    !!! info
        Stash is saved with the name "My stash cool name"  

## **List**

``` sh
git stash list
```

!!! exemple
    Return a stash list

    ``` sh
    stash@{0}: On master : My stash cool name
    stash@{1} : WIP on master : Remove IE9 support
    ```

## **Apply**

*Bring changes back* 

=== "Most Recent Stash"

    ``` sh
    git stash apply
    ```

    !!! info
        Apply most recent stash

=== "Specific Stash"

    ``` sh
    git stash apply stash@{1}
    ```

    !!! info
        Apply stash n°1

## **Delete**

*Delete remaining stash*

=== "Most Recent Stash"

    ``` sh
    git stash drop
    ```

    !!! info
        Drop most recent stash

=== "Specific Stash"

    ``` sh
    git stash drop stash@{1}
    ```

    !!! info
        Drop stash n°1

## **Show**

*Display changes saved in stash*

=== "Most Recent Stash"

    ``` sh
    git stash show
    ```

    !!! info
        Show most recent stash

=== "Specific Stash"

    ``` sh
    git stash show stash@{1}
    ```

    !!! info
        Show stash n°1

=== "More details"

    ``` sh
    git stash show -p stash@{1}
    ```

    !!! tip
        Add more details with `-p`

## **Stash to another branch**

*Use Case : Move all current changes to a new branch*

``` sh
git stash 
git stash branch iglooStash
```

!!! info
    Automatically create & move you to 'iglooStash' branch  
    Move changes to this branch  
    Remove latest stash