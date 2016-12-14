# Getting an Authorisation Token from the everydayhero OAuth flow

Each of the following examples will guide you through getting an authorisation token for use with the everydayhero api.

These tokens operate on behalf of an individual user, you'll be asking users to authenticate with everydayhero in some way, and everydayhero will return to your application a token representing that user.

Each example should make it clear when you have aquired a user's token, in order to use it you need only provide it in an authorisation header for each request:

```
Authorization: Bearer <TOKEN>
```

When you provide a valid token in this way you'll be able to do anything that user can do E.G:
* [Create pages](http://developer.everydayhero.com/pages/)
* [Get / update that user's account information](http://developer.everydayhero.com/users/)

## Step 1. Get an everydayhero account

Visit https://everydayhero-staging.com/ and click sign up.

## Step 2. Create an OAuth Application using your everydayhero account

Once you have an account visit https://everydayhero-staging.com/developers/oauth_applications

Create an oauth application.

Set the Redirect URI and Application URI settings for local testing:

![Example settings](https://github.com/everydayhero/oauth-examples/blob/master/docs/example-application-settings.png?raw=true)

## Continue with a specific language example

* [node](https://github.com/everydayhero/oauth-examples/tree/master/node)
* [client-side javascript](https://github.com/everydayhero/oauth-examples/tree/master/client-side-javascript)
