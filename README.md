# test-webXwiz

Node installing:

Windows nvm:
install nvm: https://github.com/coreybutler/nvm-windows/releases

Linux or mac, nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
--or--
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

After installing nvm install node lts version:
nvm install lts
nvm use lts

Once you have are cloned the git repository, you need to install node_modules using the command: npm install
Then create .env file using .env_example with a valid DB_URI
For started server need:
npm run build - build from ts to js
npm run server - starts the built server
