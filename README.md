# Strapi plugin formzz

Formzz is a Strapi plugin that allows you to create forms through collection types.

## Get started
Download the .zip and extract it in *"your_project/src/plugins"*

Add the following to *"your_project/config/plugins.js"*

`formzz: {
  enabled: true,
  resolve: './src/plugins/formzz',
},`

## To Do:
- [ ] Add lifecycle.js to plugin.
- [ ] Rewrite to composition api.
- [ ] Add 'loading please wait' after submit and before redirect.
- [ ] Make redirect location after submission dynamic.
- [ ] Publish as npm package
