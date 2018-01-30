Example project demonstrating issue with [GoogleChrome/Workbox](https://github.com/googlechrome/workbox) v3.0.0-alpha.6

### Run Project

```
git clone -b reloadCantReach https://github.com/akash5474/workbox_ex.git

npm install
npm start
```

### Steps to reproduce

1. Open `http://localhost:8080` in Chrome (I recommend an incognito window)
2. Refresh the page


`webpack.config.js` has two configurations.
The first config does not cache html generated server side.
The second config can not update the revision the in preache-manifest for
`"url": "/"` entry if webpack assets' hash changes.



### Note

**If you re-run the build (`npm run build`) you will need to manually edit the service worker from:**

```javascript
importScripts(
  "precache-manifest.[hash].js",
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);
```

**to:**

```javascript
importScripts(
  "/static/app/precache-manifest.[hash].js",
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);
```

since `v3.0.0-alpha.6` does not include [#1233](https://github.com/GoogleChrome/workbox/pull/1233).
