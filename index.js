const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const getEmbeddedTweet = async (url, opt) => {
  const apiUrl = `https://publish.twitter.com/oembed?url=${
    url
  }&hide_thread=${
    opt.hideThread !== false ? '1' : '0'
  }&align=${
    opt.align || ''
  }&hide_media=${
    opt.hideMedia ? '1' : '0'
  }&theme=${
    opt.theme || ''
  }&link_color=${
    opt.linkColor || ''
  }&widget_type=${
    opt.widgetType || ''
  }&omit_script=true&dnt=true&limit=20&chrome=nofooter`

  const response = await fetch(apiUrl);
  return await response.json();
};

const momentRegexp = /https:\/\/twitter.com\/i\/moments\/[0-9]+/i;
const tweetRegexp = /https:\/\/twitter\.com\/[A-Za-z0-9-_]*\/status\/[0-9]+/i;

// only do the embedding for a single twitter url on its own paragraph.
const isTwitterLink = node => {
  return node.children.length === 1 && node.children[0].type === 'link' &&
    (tweetRegexp.test(node.children[0].url) || momentRegexp.test(node.children[0].url))
}

module.exports = (options) => {
  const debug = options.debug ? console.log : () => {}

  return async tree => {

    const nodes = [];
    visit(tree, 'paragraph', (node) => {
      if(isTwitterLink(node)) {
        debug(`\nfound tweetLink`, node.children[0].url)
        nodes.push([node, node.children[0].url])
      }
    })

    for (let i = 0; i < nodes.length; i++) {
      const nt = nodes[i];
      const node = nt[0];
      const tweetLink = nt[1];
      debug(`\nembeding tweet: ${tweetLink}`);
      try {
        const embedData = await getEmbeddedTweet(tweetLink, options);
        node.type = 'html';
        node.value = embedData.html;
      } catch (err) {
        debug(`\nfailed to get blockquote for ${tweetLink}\n`, er)
      }
    }

  }
}