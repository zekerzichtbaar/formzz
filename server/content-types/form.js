module.exports = {
    "kind": "collectionType",
    "collectionName": "forms",
    "info": {
      "singularName": "form",
      "pluralName": "forms",
      "displayName": "Form",
      "description": ""
    },
    "options": {
      "draftAndPublish": true
    },
    "pluginOptions": {},
    "attributes": {
      "Fields": {
        "type": "dynamiczone",
        "components": [
          "input-fields.email",
          "input-fields.text",
          "input-fields.select",
          "input-fields.textarea",
          "input-fields.telephone"
        ],
        "pluginOptions": {}
      },
      "Title": {
        "type": "string",
        "pluginOptions": {}
      },
      "SubmitText": {
        "type": "string",
        "pluginOptions": {}
      }
    }
  };