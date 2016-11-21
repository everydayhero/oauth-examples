# Getting an Authorisation Token from the everydayhero OAuth flow

## Step 1. Get an everydayhero account

Visit https://everydayhero-staging.com/ and click sign up.

## Step 2. Create an OAuth Application using your everydayhero account

Once you have an account visit https://everydayhero-staging.com/developers/oauth_applications

Create an oauth application.

Set the Redirect URI and Application URI settings for this local example:

![Example settings](https://github.com/everydayhero/oauth-examples/blob/master/node/docs/example-application-settings.png?raw=true)

## Step 3. Clone the project and change directory to `./node`

```
$ git clone git://github.com:everydayhero/oauth-examples.git
$ cd oauth-examples/node
```

## Step 3. Save CLIENT_ID and CLIENT_SECRET to environment variables

Copy the client_id and client_secret from https://everydayhero-staging.com/developers/oauth_applications and paste them into an `.envrc` file in the root of this project. make sure to `source ../.envrc` before starting your app the first time. You can also use [`direnv`](http://direnv.net) to do this automatically.

## Step 4. Install dependancies

```
$ npm i
```

## Step 5. Start the app

```
$ npm start
```

## Step 6. Test the flow

Visit [http://localhost:8080/authorize](http://localhost:8080/authorize) and follow the prompts, if all goes well you should end up at http://localhost:8080/authorize/callback with a JSON response in your browser. This response should contain a `token`.
