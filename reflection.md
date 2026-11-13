What is the difference between res.send() and res.sendFile()? When would you use one over the other?
res.send  sends a response in simple text while res.sendFile  will send over a complete file.

Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
It is necessary to provide a reliable foolproof path to get to the public directory. The path to the public folder can change depending on where your node commanad is ran. 

How would you add a third page (e.g., a menu page) to this server? What steps would you take?
I would create another html for the menu page then define another route handler and create a GET request to the menu page 