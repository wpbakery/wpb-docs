---
id: param-position-control
title: Param position control with vc_add_param
sidebar_label: Param position control with vc_add_param
sidebar_position: 20
hide_table_of_contents: true
slug: /developer-tutorials/param-position-control-with-vc_add_param
---

# Param position control with vc_add_param

WPBakery Page Builder [vc_add_param()](/devs/inner-api/vc_add_param) function allows controlling position of where added param will be placed. With the `weight` attribute it is possible to choose either param will be placed at the very bottom of param list or top (0 – place at bottom, 1 – place on top).

```php
$attributes = [
 'type' => 'dropdown',
 'heading' => "Style",
 'param_name' => 'style',
 'value' => [ "one", "two", "three" ],
 'description' => __( "New style attribute", "my-text-domain" ),
 'weight' => 1, //  default 0 - unsorted and appended to bottom, 1 - appended to top
];
vc_add_param( 'vc_message', $attributes );
```
