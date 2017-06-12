Downloads one Scrollytelling story to local files

# Installing

```
npm install
```

# Using

```
node index.js
cd story.example.com
http-server # to check if all assets are present in the bundle
```

# How it works / how it should work

Say, you want to download `https://jaaroverzicht.radio1.nl/jaaroverzicht`, which is an actual Scrollytelling URL, and I will probably come to regret putting a working URL in there, but oh well. Let's call it a ghetto load test.

You put that in `index.js` as your starting URL. It should:

1. [x] create a folder named `jaaroverzicht.radio1.nl`
2. [x] create a file called `jaaroverzicht.html` in that folder
3. [x] this file should contain the HTML source returned on the starting URL
4. [ ] inside, create a folder named `scrollytelling.link`
5. [ ] inside that, the app javascript, a-la `assets/pageflow/application-[hash].js`
6. [ ] and also the app stylesheet, a-la `assets/pageflow/application-[hash].css`
7. [ ] and also the theme stylesheet, a-la `assets/pageflow/themes/radio1-[hash].css`
