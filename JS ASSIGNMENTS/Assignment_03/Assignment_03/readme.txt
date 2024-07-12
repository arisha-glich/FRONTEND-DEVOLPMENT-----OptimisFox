STEP OF RUNNING AXIOS 

1: npm install AXIOS
(makesure [nodemodules(Folder) +package.json+package-lock.json] is created)


2: write ("type"="module") in devdependices in package.json file


3: Then attach html with axios by providing link in script tag 
e.g:
 <script src="/node_modules/axios/dist/axios.min.js"></script>

 
4: make sure the squence of providing script that is that if we are working in Folders
then we have to provide the script in the order of the folder in which we are working
because we have to load axios library then implement it in js file
e.g:

        a: first of all attach this link 
            e.g  (<script src="/node_modules/axios/dist/axios.min.js"></script>)
        b: then attach the link of the js file that is to be used in the html file 
            e.g  ( <script src="../JS/q4.js"></script>)