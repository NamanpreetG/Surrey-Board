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
3. Install dependencies with `npm install`
4. Go to the server code with `cd server`
5. Run the server with `npm start`
6. Go to the front-end directory with `cd ../front-end`
7. Run `npm install`
8. Run the front-end with `npm start`

## Setting up the Database
***** These steps are temporary until the database is hosted on the cloud rather than locally
- Install XAMP or MAMP (don’t get the pro version)
    - MAMP is better for Mac
- Set it up, and click ‘Start’
- Go to localhost/phpMyAdmin5 in your browser
    - If it doesn’t work this might be because the port its using is 8888 rather than 80. 
    - On Mamp change this by going on ’Prefrences’ on the top left of the GUI and change the port to 80
- Add a database called ’SurreyBoard’ 
- cd to the 'server' directory with index.js (not in the front-end) and run `npm install` in the terminal
- Then run `npm start`
- You should see ‘SQL Connected’ in the terminal
- Go back to the phpMyAdmin and add a table called ‘accounts’ with the following column with the properties shown below, then save
    - id : INT, AI, and Primary Key
    - email : TEXT
    - name : TEXT
    - password : TEXT
- cd to the front-end directory through terminal and run `npm install`
- Then run `npm start`
- You should be able to to now add the user through the register input boxes, and login through the login page (the log in page currently just displays the name of the user)
