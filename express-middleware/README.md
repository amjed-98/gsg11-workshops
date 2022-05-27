# express_middleware

## What is a middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

```js
app.use(function (req, res, next) {
  console.log("HI");
  next();
});
```

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

Express middleware includes `application-level`, `router-level`, and `error handling` functionality and can be `built-in` or from a `third party`. Since Express.js has limited functionality of its own, an Express app is largely comprised of multiple middleware function calls

You could write your own middleware for Express.js, but most developers prefer to use and configure built-in and third-party tools for common tasks. In this workshop, we’ll show you how to use and create Express middlewares. But first, a short overview of how middleware functions within an app.

## What does a middleware function look like?

A middleware function from the [Express docs](https://expressjs.com/en/guide/using-middleware.html),
There are several important things to point out here:

- Middleware functions usually have 3 standard params `req`, `res`, and `next`. The first two are objects, the last is a function that will call the next middleware function, if there is one.
- Usually there is a **middleware chain**, meaning a chain of functions that are called one after the other, with the last function sending the response back to the browser. So we get the request from the browser, make any modifications and data additions, and then send a response back.
- You must call `next()` **(unless it’s the last function in the chain)** or the request will just hang and eventually timeout. In the browser this will manifest as a really long spinner before a message of “connection timed out” or similar.
- Any changes you make to `req` or `res` will be available in the next middleware function.
- `req` and `res` are unique for each request. Meaning that a user from USA result in a different req object than a user from a European country.

## How does middleware work?

Let's go through this block of code together to get the point of middlewares.
It would be useful if our server logged each incoming request to our terminal. That way we can see a log of what’s happening as we use our server locally.

Usually we match our handlers to specific routes e.g. `server.get("/about", ...)`. However we can run a handler for every route by using `server.use()`:

```js
app.use((req, res) => {
  console.log(`${req.method} ${req.url}`);
});
app.get("/", (req, res) => {
  res.json({ msg: "Hello from /" });
});
```

This will log the method and URL for every request the server receives (e.g. GET / or POST /submit). Unfortunately that’s all it will do, as this handler never tells the next handler in the chain to run. SO we'll never see the next `json` response if our endpoint was `/`, This will cause all requests to time out, since the server never sends a response using `response.send()`.

We can fix this with the third argument all handlers receive **next**. This is a function you call inside a handler when you want Express to move on to the next one.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  res.json({ msg: "Hello from /" });
});
```

This tells Express to run the logger handler before every request, then move on to whatever handler is queued for that route. E.g. if the user requests the home page (GET /) this handler will run, log the `method/URL`, then pass on to the next handler that matches GET /, which will send an HTML response.

Now it's your turn to work on other middlewares.

### Setup

- `git clone`
- Run `npm install` to install all the dependencies
- Run `npm run dev` to start the development server
- Visit http://localhost:8080 to see the workshop app.

### Workshop tasks

1. **Logger middleware**

- Add a logging middleware that logs millisecond timestamp `Date.now()` before any request to our server is handled.
- Add a logging middleware that logs millisecond timestamp `Date.now()` after every request to our server (think where to put).

2. **Parse request data**

- create a middleware to receive request data on `request.on("data", () => {})` to modify on request object So I can get this data on `request.body` on the next middlewares (POST/login)

    <details>
      <summary>How to get request body</summary>
      <p>
        
    ```js

          let allData = "";
          req.setEncoding("utf8");

          req.on("data", (chunk) => {
          allData += chunk;
          });
          req.on("end", () => {
           const params = new URLSearchParams(allData);
           const name = params.get("name");
           const email = params.get("email");
          });

  ```

  </p>
  ```

</details>

That's somehow how `express.json()`, `express.urlencoded()` work.

3. **Check user identity**

- in `POST/login` the previous step, we worked together to console.log the body, Now we want this route to direct me to the next route/middleware
- in the next middleware check the user name from `req.user` (maybe we need to add something in `POST/login` 🤔 ), then check `user.name`, If it's your name `console.log("Hello user")` else if `console.log("Not authorized")`.

## Resources

- [Using middleware](https://expressjs.com/en/guide/using-middleware.html)
