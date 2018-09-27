module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    websiteUrl: {
      'type': 'string',
      'message': 'The final website url, used for sitemap infos.',
      'default': 'http://localhost:3000'
    },
    contentfulSpaceId: {
      'type': 'string',
      'required': false,
      'message': 'The Contentful Space ID'
    },
    contentfulApiKey: {
      'type': 'string',
      'required': false,
      'message': 'The Contentful API key'
    },
    herokuAppName: {
      'type': 'string',
      'required': false,
      'message': 'Heroku app name'
    },
    pivotalProjectNumber: {
      'type': 'string',
      'required': false,
      'message': 'Pivotal project number'
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};

