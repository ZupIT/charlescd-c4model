// {
//     name: '{{name}}',
//     repo: '',
//     loadSidebar: true,
//     auto2top: true,
//     homepage: 'index.md',
//     plantuml: {
//       skin: 'classic'
//     },
//     stylesheet: ''
//   }
module.exports = options => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <title>Custom Template example</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="Description">
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <link rel="stylesheet" href="${options.stylesheet}">
    </head>
    
    <body>
      <div id="app"></div>

      <nav class="language-nav">
        <div class="language-nav-head">
          <div class="language-nav-head-text">Português</div>

          <div class="language-nav-head-icon"></div>
        </div>

        <div class="language-nav-main">
          <ul class="language-nav-main-list">
            <li class="language-nav-main-list-item" data-value="pt-br">Português</li>
            <li class="language-nav-main-list-item" data-value="en">English</li>
          </ul>
        </div>
      </nav>

      <script>
        window.$docsify = ${JSON.stringify(options, null, 2)};
      </script>
      <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
      <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
      <script src="//docs.charlescd.io/c4model/theme/theme.js"></script>
    </body>
    
    </html>`;
};