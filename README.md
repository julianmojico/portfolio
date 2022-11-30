# Julian Mojico

## Personal portfolio

-Change to node version 16: `nvm use 16.9.1`  
-Run npm install if necesary: `npm i`  
-Execute locally: `npm run develop`  
Enter http://localhost:8000/ or http://localhost:8000/___graphql

## HOW TO DEPLOY

1. Push to `main` branch
2. Trigger a build in GatsbyCloud
3. After build is finished, check your changes are published in `julianmojico.com`

NOTE: If you need to add pathPrefix to URL, search for reference commits from July 22nd, 2022.
You will also have to switch github pages to github domain (not custom domain)


## REGISTER SETUP

Nic > AWS Route53 > GatsbyCloud (hosting + pipelines)
