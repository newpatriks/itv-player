ITV PLAYER
=========

1. Introduction
--

This is an application developed using BackboneJS and Underscore. I also used less and jquery. To manipulate the grid and the responsive behaviour I used the Bootstrapp library.

The application calls the ITV Player API passing a string parameter. The API returns all the programs that starts with the letters inside the string parameter sent.


2. Problems
--

When I call the API from the Backbone application it returned an error:

```sh
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://mercury.itv.com/api/json/dotcom/programme/searchatoz/a. This can be fixed by moving the resource to the same domain or enabling CORS.
```


3. Solutions
--

 There are some solutions:

- Give permit to my domain to let it to connect to the API
- Make an authentication with a product key before make the call, or with a user/password account. (the best one)
- I implemented a php file that reads the API from my domain (localhost or public one) with the cURL function. After that shows another time all the content parsed to json.