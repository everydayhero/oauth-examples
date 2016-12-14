# Getting an Authorisation Token from the everydayhero client-side flow

## First get an everydayhero account and create a test oauth application

Refer to the [main README](https://github.com/everydayhero/oauth-examples/blob/master/README.md) for details.

## Step 1. Clone the project and change directory to `./client-side-javascript`

```
$ git clone git://github.com:everydayhero/oauth-examples.git
$ cd oauth-examples/client-side-javascript
```

## Step 2. Create an `./env.js` file from `./env.js.example`

```
$ cp ./env.js.example ./env.js
```

Copy your client_id from https://everydayhero-staging.com/developers/oauth_applications and paste it in the appropriate location into your `.env.js` file in the root of this project.

## Step 3. Start the app

You can either just open `./index.html` (in a modern browser of your choosing) or start a static file server in this directory.

E.G. You can use the python simple http server which ships with OSX by default

```
$ python -m SimpleHTTPServer
```

