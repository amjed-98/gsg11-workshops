# Stateless vs stateful authentication

## A- What stateful meanes

stateful protocol means server-side store information and recording the state of the current transaction and waiting for the next instructions.

## session based authentication

### sessions

- A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit.

### what is session based authentication?

- In the session based authentication, the server will create a session for the user after the user logs in. The session id is then stored on a cookie on the user’s browser. While the user stays logged in, the cookie would be sent along with every subsequent request. The server can then compare the session id stored on the cookie against the session information stored in the memory to verify user’s identity and sends response with the corresponding state!

### images

![](https://i.imgur.com/mHyFwN5.png)

## B- What statless meanes

stateless protocol means each time a client retrieves a Webpage, the client opens a separate connection to the Web server and the server automatically does not keep any record of previous client request.

## token based authentication

### tokens

- JSON Web Token (JWT) defines a self-contained way to securely transmit information between parties as a JSON Object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair.

### What is token based authentication

- Many web applications use JSON Web Token (JWT) instead of sessions for authentication. In the token based application, the server creates JWT with a secret and sends the JWT to the client. The client stores the JWT and includes JWT in the header with every request. The server would then validate the JWT with every request from the client and sends response.

![](https://i.imgur.com/5RKbkW9.png)

# Advantages and Disadvantages

![](https://i.imgur.com/Cd4RCHn.png)

# resourses

- `https://sherryhsu.medium.com/session-vs-token-based-authentication-11a6c5ac45e4#:~:text=Session%20based%20authentication%3A%20Because%20the,stored%20on%20the%20client%20side`
- `https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies`
- `https://www.virtasant.com/blog/stateful-vs-stateless-architecture-why-stateless-won#:~:text=Stateful%20services%20keep%20track%20of,resources%2C%20rather%20than%20the%20state`
