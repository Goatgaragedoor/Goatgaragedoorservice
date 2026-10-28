# Goat Garage Door Service

Marketing site for Goat Garage Door Service in Fishers, Indiana. Built with Astro and Vite, and set up for Netlify.

## Develop

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static site is written to `dist/`.

## Deploy on Netlify

`netlify.toml` sets the build command to `npm run build` and the publish directory to `dist`. Use Node 22 or newer.

Connect this repository in Netlify, or deploy the project folder with the Netlify CLI. Point the custom domain at `goatgaragedoorindy.com`. Visits to `www` redirect to the apex domain.

The service request form is plain HTML with `data-netlify="true"` and the form name `service-request`, so Netlify can detect it when the site is deployed. After the first production deploy, confirm **service-request** is listed under Forms. You can turn on email notifications to Goatgaragedoorservice@gmail.com from that form’s settings.
