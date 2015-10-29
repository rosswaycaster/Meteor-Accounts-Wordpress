Package.describe({
  name: 'rosswaycaster:meteor-accounts-wordpress',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor login service for self-hosted WordPress accounts with a little more customization',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rosswaycaster/Meteor-Accounts-Wordpress',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function(api) {
    api.versionsFrom('METEOR@0.9.4');
    api.use('accounts-base', [ 'client', 'server' ]);
    api.imply('accounts-base', [ 'client', 'server' ]);
    api.use('accounts-oauth', [ 'client', 'server' ]);
    api.imply('accounts-oauth', [ 'client', 'server' ]);

    api.use('oauth', [ 'client', 'server' ]);
    api.use('oauth2', [ 'client', 'server' ]);
    api.use('http', [ 'server' ]);
    api.use('templating', 'client');
    api.use('underscore', 'server');
    api.use('random', 'client');
    api.use('service-configuration', [ 'client', 'server' ]);

    api.addFiles('wordpress_client.js', 'client');
    api.addFiles('wordpress_server.js', 'server');
    api.addFiles("wordpress.js");

    api.export('WordPress');

    api.addFiles([
        'wordpress_configuration.html',
        'wordpress_configuration.js'
    ], 'client');
});