---
id: add-animation-param-to-the-element
title: Add animation param to the element
sidebar_label: Add animation param to the element
sidebar_position: 1
hide_table_of_contents: true
slug: /developer-tutorials/add-animation-param-to-the-element
---

# Add animation param to the element

WPBakery Page Builder allows you to add an `animation` parameter type to your custom elements, enabling users to select an animation for the element from the predefined list of animations.

To add an animation parameter to the element, please use the `vc_map_add_css_animation` in the params array.

Here is an example:

```php
// Example params array entries
[
   // Example alignment parameter
    [
       'type' => 'dropdown',
       'heading' => esc_html__( 'Alignment', 'js_composer' ),
       'param_name' => 'align',
       'value' => [
          esc_html__( 'Left', 'js_composer' ) => 'left',
          esc_html__( 'Center', 'js_composer' ) => 'center',
          esc_html__( 'Right', 'js_composer' ) => 'right',
       ],
       'description' => esc_html__( 'Select icon alignment.', 'js_composer' ),
    ],

    // This line will output the animation dropdown
    vc_map_add_css_animation(),
]
```
