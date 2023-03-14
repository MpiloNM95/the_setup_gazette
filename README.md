# The Setup Gazette 
## News Application
### Technologies used:
* Typescript -  too reduce bugs
* Tailwind CSS - styling for the site/application
* HeroIcons - icons for the site
* Stepzen - powered the entire site will also allow the introduction of graphql
* MediaStack API - api sed for the live news on the site
* Nextjs 13 - as the server component for the site
* Reactjs - language struture for typescriptjs
#### There is 2 types of data in use for the site
* Dynamic Data - This is where is built at build time
* Static Data - This where every request we go and generate the information we can also revalidation techniques in nextjs 13
#### Features of the site 
- Dark Mode (for eye sensitivity)
- Light Mode (default)
### Setting up nextjs 13 and tailwind css
We are using the tailwind css template with next js 13
```
npx create-next-app -e with-tailwindcss ./
```
The "./" applies the folder or repo you want the nextjs 13 and taildwincss to built in or otherwise you would have your project name at the end of the demand like the example below
```
npx create-next-app -e with-tailwindcss my-project-name
```