# Gridsome Remark Twitter

Embed Tweet and Moment cards in Gatsby markdown.

## Install

```bash
npm install gridsome-plugin-remark-twitter
```

## How to use

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-twitter']
          ]
        }
      }
    }
  ]
}
```



If you want to get debug output, turn on the `debug` option in the plugin options.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-twitter', {
                debug: true
            }]
          ]
        }
      }
    }
  ]
}
```

These other options are also available, to control how the widget is rendered:

- **hideThread** Default `true`.  Set to `false` to also show the
  tweet that a tweet is in reply to.  (This is enabled by default
  because typically you'd just embed both tweets, and it gets really
  noisy when embedding entire twitter threads in a post.)
- **hideMedia** Default `false`.  Set to `true` to hide media that is
  included in a tweet.  For example, if a tweet has a photo or a video
  embedded, this means that the user has to click through to view it.
- **align** Set to `'left'`, `'right'` or `'center'` to make the
  embedded tweet float left, right, or be center-aligned.  (The
  default is left-aligned, but not floated.)
- **theme** Set to `'dark'` to use the dark theme.
- **linkColor** Set to a valid RGB value to specify link colors.
- **widgetType** Set to `'video'` to return a Twitter Video embed for
  the given Tweet.


## Usage

```markdown
# Blog post title

This is an example of embedding a single tweet card.
Add any markdown as you normally do, and then insert a valid
Tweet link anywhere to automatically transform it into an
embed card.

https://twitter.com/gridsome/status/1088777983987335170

You can embed several tweets

https://twitter.com/therealdanvega/status/1093481502283841538

https://twitter.com/therealdanvega/status/1092077147370356736

Or a moment

https://twitter.com/i/moments/650667182356082688

```

> __NOTE:__ Make sure to copy the Tweet link instead of the embed code.

## How this looks like
<p align="center"><img src="https://i.imgur.com/yE2mWtl.png"/></p>

## License

MIT

## Open Source Love

I wish I could take credit for this plugin but all the credit in the world goes to weknowinc. Instead of reinventing the wheel I borrowed what they did for Gatsby. Thank you!

https://github.com/weknowinc/gatsby-remark-twitter

