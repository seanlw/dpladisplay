DPLA Display
============

The DPLA Display is a proof of concept for using the DPLA API along with Web Sockets.
This small web application displays images, much like a picture floating screensaver, on
a remote display, while you controle the images being viewed from a mobile device.

Requirements
------------

* You must have Node.js (http://nodejs.org/) installed.
* You will need to request a API Key from DPLA (http://dp.la/info/developers/codex/policies/#get-a-key).

Installation
------------

1. Rename config.default.js to config.js
2. Open config.js and put in your DPLA API key along with the IP address or hostname that will be running DPLA Display.
You can use localhost, however, mobile devices may not be able to connect to the display server.
3. Run the node.js server by running the following command:

    node app.js

4. Now open a browser and go to http://<ip address or hostname>:8080/display.html
Don't worry if all you see is black, that's a good thing :). This will be your image display.
If you chose a different port number in config.js use that number instead of 8080.
5. Open up a new browser window or point your mobile browser to http://<ip address or hostname> and
make a search. Select images and watch the display.

Note
----

This is for proof of concept only and should not be used for production environments. Use at your own risk.