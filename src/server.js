import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
            <html lang="">
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charset="utf-8" />
                  <title>Bhaswanth Chiruthanuru &#8212; | Freelancer | Daily Musings of Web Developer.</title>
                  
                  <link rel="icon" href="./logo-icon.png" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta name="theme-color" content="#000000" />
                  <link rel="apple-touch-icon" href="./logo-icon.png" />

                  <link rel="manifest" href="./manifest.json" />
                  <link rel="alternate" href="http://bhaswanth.com/" hreflang="en-in" />
                  
                  <meta name="viewport" content="width=device-width, initial-scale=1">

                  <meta name="title" content="Bhaswanth Chiruthanuru">
                  <meta name="description" content="I'm a passionate full-stack developer known for the quality apps produced for Companies around the globe to make their business ideas come true.">
                  <meta name="keywords" content="Bhaswanth, Bhaswanth Chiruthanuru, Chiruthanuru, Web Developer, Full Start Developer, Freelancer, Web Development, Programming, bhaswanth, bhaswanth chiruthanuru, php developer, javascript developer, web designer, web developer, freelancer, nodejs developer, laravel developer">
                  <meta name="robots" content="index, follow">
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <meta name="language" content="English">
                  <meta name="revisit-after" content="1 days">
                  <meta name="author" content="Bhaswanth Chiruthanuru">

                  <meta property="og:type" content="website">
                  <meta property="og:url" content="http://bhaswanth.com/">
                  <meta property="og:title" content="Bhaswanth Chiruthanuru | Programming | Freelancer | Daily Musings of Web Developer.">
                  <meta property="og:description" content="I'm a passionate full-stack developer known for the quality apps produced for Companies and Entrepreneurs around the globe to make their business ideas come true.">
                  <meta property="og:image" content="http://bhaswanth.com/banner.jpg">

                  <meta name="twitter:card" content="summary_large_image">
                  <meta name="twitter:url" content="http://bhaswanth.com/">
                  <meta name="twitter:title" content="Bhaswanth Chiruthanuru | Programming | Freelancer | Daily Musings of Web Developer.">
                  <meta name="twitter:description" content="I'm a passionate full-stack developer known for the quality apps produced for Companies and Entrepreneurs around the globe to make their business ideas come true.">
                  <meta name="twitter:image" content="http://bhaswanth.com/banner.jpg">
                  <meta name="twitter:site" content="bhaswanth">

                  ${
                    assets.client.css
                      ? `<link rel="stylesheet" href="${assets.client.css}">`
                      : ''
                  }
                  ${
                    process.env.NODE_ENV === 'production'
                      ? `<script src="${assets.client.js}" defer></script>`
                      : `<script src="${assets.client.js}" defer crossorigin></script>`
                  }

                  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                  <script type="text/javascript">
                    window._idl = {};
                    _idl.variant = "modal";
                    (function() {
                        var idl = document.createElement('script');
                        idl.async = true;
                        idl.src = 'https://members.internetdefenseleague.org/include/?url=' + (_idl.url || '') + '&campaign=' + (_idl.campaign || '') + '&variant=' + (_idl.variant || 'modal');
                        document.getElementsByTagName('body')[0].appendChild(idl);
                    })();
                  </script>

                  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175692329-1"></script>
                  <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-175692329-1');
                  </script>
              </head>
              <body>
                  <noscript>You need to enable JavaScript to run this app.</noscript>
                  <div id="root">${markup}</div>

                  <script type="application/ld+json">
                    {
                      "@context": "https://schema.org/",
                      "@type": "Person",
                      "name": "Bhaswanth Chiruthanuru",
                      "url": "http://bhaswanth.com/",
                      "image": "https://avatars0.githubusercontent.com/u/19569771?s=400&u=d746b7cc5b07092c350b1db3e4689066c78a125f&v=4",
                      "sameAs": [
                        "https://www.facebook.com/bhaswanth.kumar.9",
                        "https://twitter.com/bhaswanth4?lang=en",
                        "https://www.instagram.com/its_me_man_of_attitude/?hl=en",
                        "https://www.youtube.com/channel/UCFCaYqsBSamJOI1I9bcMu5w",
                        "https://linkedin.com/in/bhaswanthchittanoor",
                        "https://github.com/bhaswanth53",
                        "http://bhaswanth.com/",
                        "https://bhaswanthchiruthanuru.tumblr.com/"
                      ],
                      "jobTitle": "Full-Stack Web Developer",
                      "worksFor": {
                        "@type": "Organization",
                        "name": "Freelancer"
                      }  
                    }
                  </script>
              </body>
        </html>`
      );
    }
  });

export default server;
