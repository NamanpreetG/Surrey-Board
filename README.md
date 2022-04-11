# Surrey Board

# First time cloning on gitlab.surrey.ac.uk

1. Generate your own SSH keys:
`ssh-keygen -t ed25519`
2. Add your SSH key to Gitlab (for MacOS): `tr -d '\n' < ~/.ssh/id_ed25519.pub | pbcopy`
3. Go to Gitlab, On the top bar, in the top right corner, select your avatar, On the left sidebar, select SSH Keys. In the Key box, paste the contents of your public key.

Alternatively, visit this [link](https://docs.gitlab.com/ee/ssh/) for clearer instructions.

## How to run the app

1. Clone the repo
   `git clone git@gitlab.surrey.ac.uk:com301424/surrey-board.git`
2. Go to surrey-board directory: `cd surrey-board`
3. Go to the front-end directory with `cd ../front-end`
4. Run `npm install`
5. Run the front-end with `npm start`
6. Open two new terminals  
7. For the first terminal go into the authentication dir with `cd ../server/authentication` and run `npm install` the `npm start`
8. For the second terminal go into the posts dir with `cd ../server/posts` and run `npm install` the `npm start`



