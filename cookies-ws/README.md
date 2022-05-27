# cookies-ws

Based on FAC [original workshop](https://github.com/foundersandcoders/ws-cookies).

---
__Learning Outcomes__

- What are cookies?
- Why do we use them?
- How do we set and remove cookies using headers?
- How do we check whether or not a request contains a cookie?

<br><br>

:cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie:

<br><br>

### Remembering the browser

So now that you know how to [store a user's password safely](https://github.com/foundersandcoders/ws-password-management), the question is: just how *does* your server remember a browser?

A [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) is a **piece of data** that your server, hosted on a certain domain (`localhost`, `google.com` etc) sends back to the browser, which the browser will then keep, and attach to every future request _to that domain_. An `amazon.com` cookie will not be attached to a request to an `ebay.com` domain, for example.

(If you open up DevTools, and go to the 'Application' tab you will be able to see all the cookies attached to the domain you are currently on.)

![dev tools cookies](https://user-images.githubusercontent.com/9598261/32705742-2166ff4e-c80f-11e7-84a8-2212ce48236c.gif)

<br><br>

:cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie:

<br><br>

Cookies are useful as they allow us to store information about a client. As the client keeps hold of the cookie the server can simply check the cookies has the correct information. You **send** cookies to the frontend via the response object and **read** a clients cookie on server via the request object.

<br><br>

:boom: WARNING :boom:

Here we are setting a very simple cookie with a name of `logged` for an exapmle and a value of `true`.
  ```js
  // Cookie: logged=true
  
  ```
  It will do for now as we are focusing purely on how to transmit cookies, but in reality there are two problems.

1. If you have multiple users, there is no way of telling the difference between them.
2. There is NO SECURITY in place. Cookies can very easily be edited in Devtools. For example, if you have a cookie of `admin=false`, it is very easy to change that to `admin=true`! The different ways to protect cookies from tampering will be in workshop 3...

:star2: WARNING OVER :star2:

<br><br>

:cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie: :cookie:

<br><br>


### Cookie flags
You can also add 'flags' to the cookie header to enable certain behaviour. Some of the more important ones are:

Flag | Description
---|---
`HttpOnly` | This stops your cookie being accessed by the browser's Javascript (**including your own front-end code**). Without this flag, an attacker could intercept the user's cookies in a process known as Cross-Site Scripting (XSS). With the cookies of the legitimate user at hand, the attacker is able to act as the user in his/her interaction with a website - effectively identity theft.
`Secure` | This means the cookie will only be set over a HTTPS connection. This prevents a man-in-the-middle attack.
`Max-Age` | This sets the cookie lifetime in seconds in node and milliseconds in express.

More flags can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie).

### Exercise

### Set up
+ Clone this repo
+ `$ npm i`
+ `$ npm run dev`
+ Navigate to `localhost:3000`

You will see that `index.html` has three buttons, now you must implement the cookie logic on the server side:

_Note: Click on the relevant button to check that you have implemented the cookie logic correctly_

Check [express docs](http://expressjs.com/en/4x/api.html) to know how to add, remove and read a cookie.

Endpoint | Action
---|---
`/login` | Should add a cookie and **redirect** to `/`
`/logout` | Should remove the cookie and **redirect** to `/`
`/auth-check` | Based on the validity of the cookie, should send back a 200 or 401 response, and an informative message!


![Two Cookie](https://media.giphy.com/media/nqEztrBh06uti/giphy.gif)
