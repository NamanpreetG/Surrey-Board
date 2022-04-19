# Surrey Board

# First time cloning on gitlab.surrey.ac.uk

1. Generate your own SSH keys:
   `ssh-keygen -t ed25519`
2. Add your SSH key to Gitlab (for MacOS): `tr -d '\n' < ~/.ssh/id_ed25519.pub | pbcopy`
3. Go to Gitlab, On the top bar, in the top right corner, select your avatar, On the left sidebar, select SSH Keys. In the Key box, paste the contents of your public key.

Alternatively, visit this [link](https://docs.gitlab.com/ee/ssh/) for clearer instructions.

# How to run docker components

To run run the docker components, run `docker-compose up`.

# How to run the app locally

1. To run the app locally, navigate to the `front-end` directory,
   run `npm install` then run `npm start`.
2. On a new terminal, navigate to `server/authentication` and run
   run `npm install` then run `npm start`.
3. On a new terminal, navigate to `server/societies` and run
   run `npm install` then run `npm start`.
4. On a new terminal, navigate to `server/posts` and run
   run `npm install` then run `npm start`.
5. Then navigate to <http://localhost:3000>
