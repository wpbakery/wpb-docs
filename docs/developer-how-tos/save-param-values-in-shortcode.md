---
id: save-param-values-in-shortcode
title: Save Param Values in Shortcode String
sidebar_label: Save Param Values in Shortcode String
sidebar_position: 24
hide_table_of_contents: true
slug: /developers-how-tos/save-param-values-in-shortcode-string
---

# Save Param Values in Shortcode String

In order to always save param value in shortcode string, it is required to use param key from `vc_map` – `save_always`. This param key has boolean type values with "false" set as default and need to be changed.

**Important:** If param has dependency it will not be saved if parent param is not triggered to call this dependency by default.

In the example below `save_always` is applied to `full_width` param and once the row is added/saved the `full_width` param will be saved and displayed in shortcode string.

```php
vc_map( array(
 'name' => __( 'Row', 'js_composer' ),
 'base' => 'vc_row',
 'is_container' => true,
 'icon' => 'icon-wpb-row',
 'show_settings_on_create' => false,
 'category' => __( 'Content', 'js_composer' ),
 'description' => __( 'Place content elements inside the row', 'js_composer' ),
 'params' => array(
 array(
 'type' => 'dropdown',
 'heading' => __( 'Row stretch', 'js_composer' ),
 'param_name' => 'full_width',
 'value' => array(
 __( 'Default', 'js_composer' ) => '',
 __( 'Stretch row', 'js_composer' ) => 'stretch_row',
 __( 'Stretch row and content', 'js_composer' ) => 'stretch_row_content',
 __( 'Stretch row and content (no paddings)', 'js_composer' ) => 'stretch_row_content_no_spaces',
 ),
 'save_always' => true,
 'description' => __( 'Select stretching options for row and content (Note: stretched may not work properly if parent container has "overflow: hidden" CSS property).', 'js_composer' )
 )
...
```

## The common problem with saving standards

The common problem with saving standards is that template is not synced with `vc_map` values.

**Example of template:**

```php
shortcode_atts(array(
 size = big
 color = red
 align = center
))
```

**Example of vc_map:**

```php
vc_map(array(
 ...
 params = array(
 array(
 type = textfield
 param_name = size
 value = small
 ),
 array(
 type = dropdown
 param_name = color
 value = array(
 white,
 blue,
 red
 ),
 ),
 array(
 type = dropdown
 param_name = align
 value = array(
 left
 right
 center
 )
 std = right
 )
 )
));
```

As you can see there is the following issue: default in template is different from `vc_map` resulting in problems when rendering/saving shortcode in version 4.6 or higher.

## To avoid this issue use one of the proposed solutions:

1. Sync all defaults
2. In template skip using of `shortcode_atts`, instead use `$atts = vc_map_get_attributes( 'shortcode_name', $atts );` // recommended
3. Update `vc_map` and add `save_always` key for all params (not recommended but in some cases it can help if shortcode does not have a default value – for example default value is dynamically received such as LayerSlides, posts_id and etc.)
