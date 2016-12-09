# Getting an Authorisation Token from the everydayhero client-side flow

## Step 1. Get an everydayhero account

Visit https://everydayhero-staging.com/ and click sign up.

## Step 2. Create an OAuth Application using your everydayhero account

Once you have an account visit https://everydayhero-staging.com/developers/oauth_applications

Create an oauth application.

## Step 3. Clone the project and change directory to `./client-side-javascript`

```
$ git clone git://github.com:everydayhero/oauth-examples.git
$ cd oauth-examples/client-side-javascript
```

## Step 3. Create an `./env.js` file from `./env.js.example`

```
$ cp ./env.js.example ./env.js
```

Copy your client_id from https://everydayhero-staging.com/developers/oauth_applications and paste it in the appropriate location into your `.env.js` file in the root of this project.

## Step 4. Start the app

You can either just open `./index.html` (in a modern browser of your choosing) or start a static file server in this directory.

E.G. You can use the python simple http server which ships with OSX by default

```
$ python -m SimpleHTTPServer
```

