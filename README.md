# Content Security Policy + XSS Exercise 

## Installation

1. Install all depndencies
```npm install```
2. Change directory to server
 ```cd server```
3. Start the node server
 ```node server```

## Usage

1. Run a live server instance of the HTML page. 
2. Run the Node server using ```node server```

## Instructions

1. The app is vulnerable to XSS. Try to inject iframes and scripts into the page.
2. Uncomment the meta tag CSP in the index.html file.
3. The website is broken because the CSP is not written correctly.
4. Delete the malicious comments from the "Database".
5. Fix the CSP so the website will work - scripts, styles, iframes, etc. 
6. Fix the XSS vulnerability using a sanitizing library of your choice. e.g: Dom Sanitizer.