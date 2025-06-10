PS C:\Users\kinrg\Documents\workspace\cts> gh repo create cts --public --source=. --push
✓ Created repository kinrgdev/cts on GitHub
  https://github.com/kinrgdev/cts
X Unable to add remote "origin"
PS C:\Users\kinrg\Documents\workspace\cts> git status
On branch main
nothing to commit, working tree clean
PS C:\Users\kinrg\Documents\workspace\cts> git init
Reinitialized existing Git repository in C:/Users/kinrg/Documents/workspace/cts/.git/
PS C:\Users\kinrg\Documents\workspace\cts> echo "# cts" > README.md
PS C:\Users\kinrg\Documents\workspace\cts> git add .
PS C:\Users\kinrg\Documents\workspace\cts> git status
On branch main
PS C:\Users\kinrg\Documents\workspace\cts> git remote -v
origin  https://github.com/kinrgdev/cts.git (fetch)
origin  https://github.com/kinrgdev/cts.git (push)
PS C:\Users\kinrg\Documents\workspace\cts> git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 224 bytes | 112.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/kinrgdev/cts.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\kinrg\Documents\workspace\cts> git pull origin main
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 900 bytes | 40.00 KiB/s, done.
From https://github.com/kinrgdev/cts
 * branch            main       -> FETCH_HEAD
   cf5a0a7..5e3edbe  main       -> origin/main
Updating cf5a0a7..5e3edbe
Fast-forward
 README.md | Bin 16 -> 15 bytes
 1 file changed, 0 insertions(+), 0 deletions(-)
PS C:\Users\kinrg\Documents\workspace\cts> 
PS C:\Users\kinrg\Documents\workspace\cts> gh repo edit --description "Repositorio puente para los ejercicios de CTS"