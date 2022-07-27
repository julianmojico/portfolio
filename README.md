# Julian Mojico

## Personal portfolio

-Change to node version 16: `nvm use 16.9.1`  
-Run npm install if necesary: `npm i`  
-Execute locally: `npm run develop`  
Enter http://localhost:8000/ or http://localhost:8000/___graphql

-Deploy to Github Pages:

```
npm run build
git checkout gh-pages
rsync -a ./public/* .
git add .
git commit -m ‘build & deploy’
git push
```

NOTE: If you need to add pathPrefix to URL, search for reference commits from July 22nd, 2022.
You will also have to switch github pages to github domain (not custom domain)
