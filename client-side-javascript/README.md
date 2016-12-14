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

## Step 4. Test the flows

You should be able to try different inputs to either the sign in or sign up forms and see the server response in the panel above each.

### Notes

On sign in an incorrect email address or password will result in a 404 and a `{ "message": "The resource you requested could not be found" }` body.

![Example sign in error](https://github.com/everydayhero/oauth-examples/blob/master/client-side-javascript/docs/example-sign-in-error.png?raw=true)

On sign up an existing email address _can_ be used, however if you use an incorrect password you'll receive a 422 with a `{ "field": "email", "message": "has already been taken" }` under `error.errors` in the body.

![Example sign up error](https://github.com/everydayhero/oauth-examples/blob/master/client-side-javascript/docs/example-sign-up-error.png?raw=true)
