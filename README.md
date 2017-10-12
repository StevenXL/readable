# Readable

## Purpose

A barebones Reddit clone that allows user to create posts in categories,
comment on the posts, and upvote / downvote posts and categories.

## Installation

This application can be installed with the following command:

```bash
npm install
```

## Startup

The front-end application **assumes** there is a server back-end running on port
`3001`. To change this configuration, please take a look at the `proxy` property
of the `package.json` file. Please see the section titled `Server` below for
starting a back-end that can communicate with the front-end.

After starting your back-end, you can run `npm start` to start the front-end
application.

## Server

This project does not ship with the back-end application. The back-end
application can be found [at this
repo](https://github.com/udacity/reactnd-project-readable-starter).

Within the repository above, there is the main `README.md` file, as well as
[separate
README.md](https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md)
outlining the api endpoints of the server.
