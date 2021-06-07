export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601bd255ea14e2efea66fc94',
                  title: 'Sanity Studio',
                  name: 'plus-que-net-studio',
                  apiId: '9b62a206-f757-421c-b947-2cd5ed4c5ddc'
                },
                {
                  buildHookId: '601bd255550a64435263a330',
                  title: 'Blog Website',
                  name: 'plus-que-net',
                  apiId: 'd42bb5f0-49ae-4050-8a21-b6fc4b28f91d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koalita-corsica/plus-que-net',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://plus-que-net.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
