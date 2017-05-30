# Security
Security and how to secure Node/Express/REST-Backends 

#### Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them.

* Authentication - is the simplest possible way to enforce access control as it doesn't require cookies, sessions or anything else. State is held by the HTTP client (as an encoded (not encrypted) string with username and password) and sent with each request.

The Session Hijacking attack consists of the exploitation of the web session control mechanism, which is normally managed for a session token.  
Most websites use a strategy that stores a cookie in the browser. After you login this cookie contains an ID that links you to a session maintained somewhere in the server. This session knows who you are when you make a request using that cookie.

#### Explain, at a fundamental level, the technologies involved, and the steps required, to setup a SSL connection between a browser and a server, and how to use SSL in a secure way.

#### How can we "prevent" third party code used, by either our Java or NodeJS applications, from injecting dangerous code into our code base?

#### Explain about Node tools like Helmet and nsp (and the Node Security Project). What do they do, and how have you used them.

#### Explain basic security threads like: Cross Site Scripting (XSS), SQL Injection and whether something similar to SQL injection is possible with NoSQL databases like MongoDB, and DOS-attacks. Explain/demonstrate ways to cope with these problems, preferably via your suggestion for a seed.

* Cross Site Scripting (XSS) - attacks are a type of injection, in which malicious scripts are injected into otherwise trusted web sites. Attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site.
Cross-Site Scripting (XSS) attacks occur when:  
Data enters a Web application through an untrusted source, most frequently a web request.  
The data is included in dynamic content that is sent to a web user without being validated for malicious content.
```JavaScript
<script>alert("XSS attack!")</script>
```
* DOS-attacks - 

* SQL Injection - Websites can still be hacked using SQL injection

#### Explain and demonstrate ways to protect user passwords on our backend, and why this is necessary.

#### Explain about password hashing, salts and the difference between Bcrypt and older (not suited) algorithms like sha1, md5 etc.

#### Explain about JSON Web Tokens (jwt) and why they are extremely suited for a REST-based API
JSON Web Tokens are a mechanism for persisting authentication information in a verifiable and stateless way.  
This information can be verified and trusted because it is digitally signed.
JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA.  
Benefits:  
1. Compact: Because of its smaller size, JWTs can be sent through an URL, POST parameter, or inside an HTTP header.
2. The payload contains all the required information about the user, avoiding the need to query the database more than once.  
Structure:
* Header - consists of two parts: the type of the token (=JWT), and the hashing algorithm being used (HMAC SHA256 or RSA).
```JavaScript
{
  "typ": "JWT",
  "alg": "HS256"
}
```
* Payload - the second part of the token, which contains the claims. Claims are statements about an entity (typically, the user) and additional metadata. There are three types of claims: reserved, public, and private claims (next slide).
```JavaScript
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
} 
```
* Signature - is created by taking the encoded header, the encoded payload, a secret - the algorithm specified in the header, and sign that. The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.
```Terminal
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
  ```

The JWT would be represented by this pseudocode:
```javaScript
var headers = base64URLencode(myHeaders);
var claims = base64URLencode(myClaims);
var payload = header + "." + claims;
 
var signature = base64URLencode(HMACSHA256(payload, secret));
 
var encodedJWT = payload + "." + signature;
```

If you’re writing a UI that runs inside of a browser environment, you need to know the potential security issues:
1. Securing user credentials (i.e. passwords)
2. Preventing malicious code from running in your webapp
3. Using cookies, securely!  

![alt_tag](http://js-plaul.rhcloud.com/Security2/images/AppSPAAccesscontroll.png)

#### Explain and demonstrate a basic NodeJS/React application and how it handles authentication, authorization, prevents against Cross Site Scripting and other basic web-threats.
