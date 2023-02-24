# Strapi plugin formzz

Formzz is a Strapi plugin that allows you to create forms through collection types.

## Get started
Download the .zip and extract it in *"<your_strapi_project>/src/plugins"*

`cd src/plugins/formzz && yarn run install-components`

Add the following to *"<your_strapi_project>/config/plugins.js"*
```
formzz: {
  enabled: true,
  resolve: './src/plugins/formzz',
},
```
**Strapi TODO**
- [ ] Publish plugin as npm package for strapi
- [ ] Add redirect location field
- [ ] Remove default settings page

**Nuxt TODO**
- [ ] Rewrite to composition api.
- [ ] Add 'loading please wait' after submit and before redirect.
- [ ] Make redirect location after submission dynamic.
- [ ] Publish plugin as npm package for nuxt
