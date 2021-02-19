# **Use Cases**
--- 

*Classic git use cases*


## **Use Case #1 : Git clone someone else's repository & Git push to your own repository**

=== "Linked to origin repo"

    1. Create a new repository at github.com. (this is your repository)  
    *Give it the same name as the other repository.*    
    *Don't initialize it with a README, .gitignore, or license.*    

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

## **Use Case #2 : Undo last git push**

=== "Template"

    ``` sh
    git push -f origin last_known_good_commit:branch_name

    ```  

=== "Usual (master branch)"

    ``` sh
    git push -f origin full_commit_code:master

    ```  
    
      
  

## **Use Case #3 : Move git folder to child folder**

1. Manually move your .git folder to the place you want it (target_dir)   

2. Navigate to that folder    
```sh
cd target_dir
```

3. Then add all the changes to the staging area. Git will detect these files as renamed versions of old files that were 'lost' and so no history will be lost.    
```
git add .
```



4. Commit all the changes with the -a command. The -a command stands for all. It tells the commit command to automatically stage files that have been modified and deleted whilst new files that you have not told Git about are not affected.  
```
git commit -a -m "move git folder fix"
```

5. Finally, push the changes to your repo.  
```
git push
```

??? warning
    You may receive the following git merge error message: "Please enter a commit message to explain why this merge is necessary, especially if it merges an updated upstream into a topic branch"

    To solve this:

        Press “i”
        Write your merge message
        Press the “esc” key.
        Type “:wq”
        Then press enter

    You will then to git push again and you're done!


## **Use Case #4 : Duplicate a repo**

1. Move to a scratch dir  
```sh
mkdir foo
cd foo
```

2. Make a bare clone of the repository    
```sh
git clone --bare https://github.com/exampleuser/old-repository.git
```

3. Mirror-push to the new repository  
```sh
cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git
```

4. Manually delete the old "foo" folder    