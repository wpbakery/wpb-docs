---
sidebar_position: 27
---

# vc_add_shortcode_param()

SINCE 4.4

```php
<?php vc_add_shortcode_param($name, $form_field_callback, $script_url = null)?>
```

Helper function to register a new shortcode attribute.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $name | String | Yes | Attribute name. |
| $form_field_callback | Callable | Yes | The callback will be called when the settings form is shown and the attribute is added to the shortcode. |
| $script_url | String | No | JavaScript file URL, which will be attached at the end of the settings form. |

### Example

To see an example of how to create a new param type shortcode param, please visit our [developers “How To’s”](/devs/developer-tutorials/create-new-param-type) section.
