# Getting an Authorisation Token from the everydayhero OAuth flow

## First get an everydayhero account and create a test oauth application

Refer to the [main README](https://github.com/everydayhero/oauth-examples/blob/master/README.md) for details.

## Step 1. Clone the project and change directory to `./node`

```
$ git clone git://github.com:everydayhero/oauth-examples.git
$ cd oauth-examples/node
```

## Step 2. Save CLIENT_ID and CLIENT_SECRET to environment variables

Copy the client_id and client_secret from https://everydayhero-staging.com/developers/oauth_applications and paste them into an `.envrc` file in the root of this project. make sure to `source ../.envrc` before starting your app the first time. You can also use [`direnv`](http://direnv.net) to do this automatically.

## Step 3. Install dependancies and start the app

```
$ npm i
$ npm start
```

## Step 4. Test the flow

Visit [http://localhost:8080/authorize](http://localhost:8080/authorize) and follow the prompts, if all goes well you should end up at http://localhost:8080/authorize/callback with a JSON response in your browser. This response should contain a `token`.
