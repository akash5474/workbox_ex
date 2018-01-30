Example project demonstrating issues with GoogleChrome/Workbox v3.0.0-alpha.6

### Run Project

```
git clone -b reloadCantReach https://github.com/akash5474/workbox_ex.git

npm install
npm start
```

### Steps to reproduce

1. Open `http://localhost:8080` in Chrome (I recommend an icognito window)
2. Refresh the page


### Workarounds

Add `templatedUrls: '/'` to `GenerateSW` config options (currently commented in `webpack.config.js`)


or


Manually edit the entry for the generated index.html in the precache-manifest file
from `"url": "/static/app/index.html"` to `"url": "/"`



#### Note

**If you re-run the build (`npm run build`) remember to manually edit the service worker from:**

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