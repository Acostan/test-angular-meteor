Package.describe({
    name: 'test:package',
    version: '0.0.1',
    summary: 'Test Package',
    git: '',
    documentation: null // By default, Meteor will default to using README.md for documentation. To avoid submitting documentation, set this field to null.
});

Package.onUse(function(api) {

    api.versionsFrom('1.2.1');

    api.use([
        'angular-with-blaze@1.2.0',
        'ecmascript',
        'less'
    ]);

    api.addFiles(['routes.ng.js'], 'client');
    api.addAssets('lib/index.ng.html', 'client');

});