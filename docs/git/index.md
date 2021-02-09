# **Essentials**

## **Introduction**

*Git is a decentralized version management software: It allows to store data remotely but also locally.
Git does not rely on a centralized server, but uses a peer-to-peer connection system. The developed computer code is stored not only on the computer of each project contributor, but it can also be stored on a dedicated server (Remote).*

## **Git init** 
---
*Initialize a .git repository.
It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.*

~~~console
git init
~~~

## **Git config**
--- 

*Setup user details.
Git will associate them with locally created commits.*

~~~posh 
git config --global user.email "myemail@gmail.com"
git config --global user.name "MyUsername"
~~~

*To see current config :*

```shell
git config --list 
```

??? exemple "Result"
    ```sh
    user.name=MyUsername
    user.email=myemail@gmail.com
    ```

## **Git status**
---

*Get informations about the current git directory (Untracked/new/changed/removed files)*
```shell
git status 
```

## **Git add/reset**
---
Add/remove files from git tracking
### **Git add**

*Add to tracking (Stage changes)*

=== "Single File"

    ``` sh
    git add readme.md 
    ```

    ???+ info
        readme.md file is staged


=== "Every HTML Files"

    ``` sh
    git add *.html
    ```

    ???+ info
        Every HTML files are staged

=== "All Files"

    ``` sh
    git add --all
    ```   

    ???+ Tip 
        Every available files are staged.  
        You should `git status` first to make sure you are not tracking unwanted files.

### **Git reset**

*Remove files from git tracking*

=== "Single File"

    ``` sh
    git reset HEAD readme.md 
    ```

    ???+ info
        readme.md file is not tracked anymore (But changes made to the file remain unchanged)


=== "All Files"

    ``` sh
    git reset HEAD
    ```

    ???+ info
        Cancels all last git add (Unstage all)



## **Git commit**
---
*Commit changes to git. Only tracked files are committed.
You can add files and commit with the same command line*

=== "Commit"

    ```shell
    git commit -m "Mon premier commit"
    ```

=== "Add + Commit"

    ``` sh
    git commit -a -m "Premiere modif"
    ```

## **Git log**
---
*Git logging to see details about commits.*

*   **Git log :** Basic operation
*   **Oneline :** Use One-line Display
*   **File Specific :** Display commits associated with a specific file

=== "Git log"
    ```sh
    git log  # Shows last commits
    git log -n 2 # Shows the last 2 commits
    ```

=== "Oneline"
    ```sh
    git log --oneline 
    ```

    ???+ exemple 
        ``` sh
        1653f44 Create README.md
        8f3add2 Add requirements.txt
        1a5c42c New theme material
        3af103e First commit
        ```

=== "File specific"
    ```sh
    git log -p readme.md 
    ```

## **Git diff**
---
*Display what changed since last commit*

```
git diff
```

## **Gitignore**
---
*Setup files to ignore when versioning with a .gitignore file*

```sh
*.tmp        # Ignore tout les fichiers .tmp
log.txt      # Ignore le fichier log.txt
tmp/*        # Ignore tout les fichiers du dossier tmp
```

## **Sources**
--- 
[^1]: [Git Docs](https://git-scm.com/docs)

