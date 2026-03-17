---
id: update-single-param-values
title: Update Single Param Values
sidebar_label: Update Single Param Values
sidebar_position: 26
hide_table_of_contents: true
slug: /developers-how-tos/update-single-param-values
---

# Update Single Param Values

After [vc_map()](/devs/inner-api/vc_map) function call all mapping data is stored in memory, if you need to modify one of the existing parameters you can use this technique. This is useful if you want to make a simple change to the existing content elements. For example: Add more color options to the color drop down in the *"Call to Action"* content element.

**Note:** Starting from WPBakery Page Builder 4.1 to update single param you should hook it to the WordPress "init" action.

```php
<?php
add_action( 'vc_after_init', 'add_cta_button_super_color' ); /* Note: here we are using vc_after_init because WPBMap::GetParam and mutateParame are available only when default content elements are "mapped" into the system */
function add_cta_button_super_color() {
 //Get current values stored in the color param in "Call to Action" element
 $param = WPBMap::getParam( 'vc_cta_button', 'color' );
 //Append new value to the 'value' array
 $param['value'][__( 'Super color', 'my-text-domain' )] = 'btn-super-color';
 //Finally "mutate" param with new values
 vc_update_shortcode_param( 'vc_cta_button', $param );
}
```
