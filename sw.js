<!--

Copyright 2015 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>App Shell</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta id="theme-color" name="theme-color" content="#4527A0">

    <link rel="manifest" href="/manifest.json">
    <link rel="icon" href="/images/chrome-touch-icon-192x192.png" sizes="192x192" type="image/png">

    <style type="text/css">/*!
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
.empty-set-cta,body{display:-ms-flexbox}body,body:after,html{width:100%;height:100%}.side-nav:before,body:after{content:''}.side-nav,html{overflow:hidden}*,.card,.loader #spinner{box-sizing:border-box}.card{padding:16px;position:relative;background:#fff;border-radius:2px;margin:16px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}body,html{padding:0;margin:0;font-family:Helvetica,Verdana,sans-serif;font-weight:400;font-display:optional;color:#444;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{display:-webkit-flex;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;background:#ececec}body:after{position:fixed;top:0;left:0;pointer-events:none;background:#FAFAFA;opacity:0;will-change:opacity;transition:opacity 333ms cubic-bezier(0,0,.21,1) .4s}h1,h2,h3,h4,h5,h6{font-family:Roboto,Helvetica,Verdana,sans-serif}.app-deeplink:after{opacity:1;pointer-events:auto}a{color:#FF4081}.is-hidden{display:none}button::-moz-focus-inner{border:0}@media (min-width:600px){.view-underpanel{top:0;right:0;position:fixed;width:400px;height:100%;overflow:hidden;pointer-events:none}.view-underpanel__block{position:absolute;top:0;right:0;width:360px;height:100%;background:#FAFAFA;box-shadow:0 0 14px rgba(0,0,0,.24),0 14px 28px rgba(0,0,0,.48);-webkit-transform:translateX(105%);transform:translateX(105%);transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1) 40ms,opacity 213ms cubic-bezier(0,0,.21,1) 40ms;transition:opacity 213ms cubic-bezier(0,0,.21,1) 40ms,-webkit-transform 233ms cubic-bezier(0,0,.21,1) 40ms;transition:transform 233ms cubic-bezier(0,0,.21,1) 40ms,opacity 213ms cubic-bezier(0,0,.21,1) 40ms;transition:transform 233ms cubic-bezier(0,0,.21,1) 40ms,opacity 213ms cubic-bezier(0,0,.21,1) 40ms,-webkit-transform 233ms cubic-bezier(0,0,.21,1) 40ms;will-change:transform;opacity:0}.view-underpanel__block:after{content:'';height:144px;width:100%;display:block;background:#303F9F;position:absolute;top:0;left:0}.view-underpanel--locked .view-underpanel__block,.view-underpanel--visible .view-underpanel__block{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.dialog-view,.side-nav:before{will-change:opacity;width:100%}@media (min-width:960px){.view-underpanel{margin-top:56px;left:46%;right:auto;position:fixed;width:520px;height:100%;overflow:hidden;pointer-events:none}.view-underpanel__block{opacity:.0001;width:504px;left:8px;-webkit-transform:translateY(50px);transform:translateY(50px);transition:opacity 213ms cubic-bezier(0,0,.21,1) 40ms,-webkit-transform 233ms cubic-bezier(0,0,.21,1) 40ms;transition:transform 233ms cubic-bezier(0,0,.21,1) 40ms,opacity 213ms cubic-bezier(0,0,.21,1) 40ms;transition:transform 233ms cubic-bezier(0,0,.21,1) 40ms,opacity 213ms cubic-bezier(0,0,.21,1) 40ms,-webkit-transform 233ms cubic-bezier(0,0,.21,1) 40ms;box-shadow:0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)}.view-underpanel__block:after{height:288px}.view-underpanel--locked .view-underpanel__block,.view-underpanel--visible .view-underpanel__block{opacity:1}}.dialog-view{background:rgba(0,0,0,.57);position:fixed;left:0;top:0;height:100%;opacity:0;pointer-events:none;transition:opacity 333ms cubic-bezier(0,0,.21,1)}.dialog-view--visible{opacity:1;pointer-events:auto}.dialog-view__panel{background:#FFF;border-radius:2px;box-shadow:0 0 14px rgba(0,0,0,.24),0 14px 28px rgba(0,0,0,.48);min-width:280px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) translateY(30px);transform:translate(-50%,-50%) translateY(30px);transition:-webkit-transform 333ms cubic-bezier(0,0,.21,1) 50ms;transition:transform 333ms cubic-bezier(0,0,.21,1) 50ms;transition:transform 333ms cubic-bezier(0,0,.21,1) 50ms,-webkit-transform 333ms cubic-bezier(0,0,.21,1) 50ms}.dialog-view--visible .dialog-view__panel{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.dialog-view__panel-header{padding:24px}.dialog-view__panel-footer{padding:8px;text-align:right}.dialog-view__panel-button{height:36px;text-transform:uppercase;color:#FF4081;font-size:15px;font-weight:500;background:0 0;border:none;padding:0 8px;line-height:1}.dialog-view__panel-title{line-height:32px;font-size:24px;color:#000;opacity:.87;font-weight:500;margin:0}.dialog-view__panel-message{font-size:16px;line-height:24px;margin:20px 0 0;opacity:.54}.side-nav{width:100%;height:100%;position:fixed;pointer-events:none;top:0;left:0}.side-nav:before{height:100%;background:#000;opacity:0;display:block;position:absolute;transition:opacity 233ms cubic-bezier(0,0,.21,1)}.side-nav--visible{pointer-events:auto}.side-nav--visible:before{opacity:.7}.side-nav__content{background:#FAFAFA;width:304px;height:100%;overflow:hidden;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);will-change:transform;-webkit-transform:translateX(-102%);transform:translateX(-102%)}.side-nav__content--animatable{transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1),-webkit-transform 233ms cubic-bezier(0,0,.21,1)}.side-nav__header{background:url(/images/side-nav-bg@2x.jpg) #3F51B5;background-size:cover;width:100%;height:171px;position:relative}.side-nav__title{font-size:16px;line-height:1;color:#FFF;position:absolute;bottom:8px;left:16px;height:16px;font-weight:500}.side-nav__body{padding-top:8px}.side-nav__version{position:absolute;bottom:16px;right:16px;font-size:14px;opacity:.54}.side-nav__blog-post,.side-nav__delete-all,.side-nav__delete-memos,.side-nav__file-bug-report{font-family:Roboto;font-size:14px;outline:0;height:48px;padding-left:72px;width:100%;text-align:left;display:block;border:none;background:url(/images/ic_delete_24px.svg) 16px 12px no-repeat;color:rgba(0,0,0,.87);cursor:pointer}.side-nav__delete-all{background-image:url(/images/ic_restore_24px.svg)}.side-nav__blog-post{background-image:url(/images/ic_info_outline_24px.svg);line-height:48px;text-decoration:none}.side-nav__blog-post:focus{background-color:#eee;outline:0}.side-nav__file-bug-report{background-image:url(/images/ic_feedback_24px.svg);line-height:48px;text-decoration:none}.side-nav__blog-post.active{font-weight:700;background-color:rgba(0,0,0,.05)}.main{padding-top:72px;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.superfail .main{background:url(/images/superfail.svg) center center no-repeat}.empty-set-cta{color:#3F51B5;font-size:20px;position:fixed;left:0;top:0;width:100%;height:100%;background:#FAFAFA;opacity:0;will-change:opacity;pointer-events:none;transition:opacity 333ms cubic-bezier(0,0,.21,1);display:-webkit-flex;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.header,.toast-view{will-change:transform;position:fixed}.empty-set-cta--visible{opacity:1}@media (min-width:600px){.main{padding-top:160px}}@media (min-width:960px){.main__inner{width:960px;margin:0 auto}}.header{width:100%;height:56px;color:#FFF;background:#3F51B5;font-size:20px;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 9px 1px rgba(0,0,0,.12),0 4px 2px -2px rgba(0,0,0,.2);padding:16px 16px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center;transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1) .1s;transition:transform 233ms cubic-bezier(0,0,.21,1) .1s;transition:transform 233ms cubic-bezier(0,0,.21,1) .1s,-webkit-transform 233ms cubic-bezier(0,0,.21,1) .1s;z-index:2}.header--collapsed{transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1) .13s;transition:transform 233ms cubic-bezier(0,0,.21,1) .13s;transition:transform 233ms cubic-bezier(0,0,.21,1) .13s,-webkit-transform 233ms cubic-bezier(0,0,.21,1) .13s;-webkit-transform:translateY(-56px);transform:translateY(-56px)}.header__menu{background:url(/images/ic_menu_24px.svg) center center no-repeat;width:24px;height:24px;margin-right:16px;text-indent:-30000px;overflow:hidden;opacity:.54;transition:opacity 333ms cubic-bezier(0,0,.21,1);border:none;outline:0}.header__menu:focus,.header__menu:hover{opacity:1;border:1px solid #fff}.header__title{font-weight:400;font-size:20px;margin:0;-webkit-flex:1;-ms-flex:1;flex:1}@media (min-width:600px){.header{padding:16px 32px 0 24px;height:144px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.header__menu{margin:4px 0 20px}.header__title{font-size:34px;height:80px;line-height:80px}.header--collapsed{transition:none;-webkit-transform:none;transform:none}}@media (min-width:960px){.header__title{width:888px;margin:0 auto}}.loader{left:50%;top:50%;position:fixed;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loader #spinner{stroke:#673AB7;stroke-width:3px;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:line 1.6s cubic-bezier(.4,0,.2,1) infinite,rotate 1.6s linear infinite;animation:line 1.6s cubic-bezier(.4,0,.2,1) infinite,rotate 1.6s linear infinite}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes line{0%{stroke-dasharray:2,85.964;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dasharray:65.973,21.9911;stroke-dashoffset:0}100%{stroke-dasharray:2,85.964;stroke-dashoffset:-65.973;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}@keyframes line{0%{stroke-dasharray:2,85.964;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dasharray:65.973,21.9911;stroke-dashoffset:0}100%{stroke-dasharray:2,85.964;stroke-dashoffset:-65.973;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.main{z-index:0}.new-appshelling-btn{z-index:3}.view-underpanel{z-index:4}.details-view{z-index:6}.edit-view__circular-reveal-container{z-index:10}.appshell-view,.details-view__box-reveal{z-index:5}.details-view__panel{z-index:6}.details-view__playback{z-index:1}.edit-view__panel{z-index:7}body:after{z-index:100}.side-nav{z-index:200}.dialog-view{z-index:250}.toast-view{z-index:300;background-color:#404040;border-radius:3px;box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);color:#fff;line-height:20px;margin-top:8px;padding:16px;transition:opacity .2s,-webkit-transform .3s cubic-bezier(.165,.84,.44,1);transition:opacity .2s,transform .3s cubic-bezier(.165,.84,.44,1);transition:opacity .2s,transform .3s cubic-bezier(.165,.84,.44,1),-webkit-transform .3s cubic-bezier(.165,.84,.44,1);white-space:nowrap;opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);left:16px;bottom:16px}.loader{z-index:400}.toast-view--visible{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}</style>
</head>
<body>

  <header class="header">
      <button role="tab" class="header__menu js-toggle-menu">
        Toggle nav menu
      </button>

      <h1 class="header__title">App Shell</h1>
  </header>
<main class="main js-global-main" aria-role="main">

</main>

  <aside class="toast-view js-toast-view"></aside>

  <!-- Loading Dialog For use by Activities -->
  <div class="loader js-global-loader is-hidden">
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
    </svg>
  </div>

  <section class="side-nav js-side-nav">
    <div class="side-nav__content js-side-nav-content">
      <div class="side-nav__header">
        <h1 class="side-nav__title">App shell</h1>
      </div>
  
      <div class="side-nav__body">
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/">Index</a>
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/url-1">URL 1</a>
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/url-2">URL 2</a>
      </div>
  
      <div class="side-nav__version">Version @VERSION@</div>
    </div>
  </section>
  
  <aside class="toast-view js-toast-view"></aside>
  
  <script>
    var remoteStyles = [
      'https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic',  ];
  
    // Asynchronously load CSS with a Request Animation Frame
    // For older browser support see this for a simple shim
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimationFrame(function() {
      var elementToInsertLinkBefore =
        document.getElementsByTagName('script')[0];
      for (var i = 0; i < remoteStyles.length; i++) {
        var linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.media = 'all';
        linkElement.href = remoteStyles[i];
  
        elementToInsertLinkBefore.parentNode.insertBefore(linkElement,
          elementToInsertLinkBefore);
      }
    });
  </script>
  
  <!-- In case the browser has JS disabled -->
  <noscript>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic" rel="stylesheet" property="stylesheet" media="all"></noscript>
  <script src="/scripts/core.js" async></script></body>
  </html>
