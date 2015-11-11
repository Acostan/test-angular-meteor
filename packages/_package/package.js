Package.describe({
    name: 'main:package',
    version: '0.0.1',
    summary: 'Main Package',
    git: '',
    documentation: null // By default, Meteor will default to using README.md for documentation. To avoid submitting documentation, set this field to null.
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.imply('test:package', ['client','server']);
});