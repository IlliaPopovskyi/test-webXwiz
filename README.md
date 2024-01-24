# test-webXwiz
Node installing:
    Windows nvm:
        install nvm: https://github.com/coreybutler/nvm-windows/releases
    Linux or mac, nvm:
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        --or--
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    After installing nvm, install node lts version:
        nvm install lts
        nvm use lts

When you are clonned git repository, need install node_modules by command: npm install
Then create .env file by .env_example with valid DB_URI


