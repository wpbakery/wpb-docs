---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_map_add_css_animation

Filters the CSS animation parameter data array used when registering the animation param for elements. Allows modification of the animation parameter configuration, such as adding custom animation options or changing defaults.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | array | The parameter data array containing keys like `type`, `heading`, `param_name`, `admin_label`, `value`, `settings`, and `description`. |
| `$is_admin_label` | bool | Whether the parameter should be displayed as an admin label. |

## Usage

```php
<?php
add_filter( 'vc_map_add_css_animation', 'my_modify_css_animation_param', 10, 2 );

function my_modify_css_animation_param( $data, $is_admin_label ) {
    // Change the description of the CSS animation parameter
    $data['description'] = esc_html__( 'Choose an animation effect.', 'my-theme' );
    return $data;
}
```

## Source

File: `include/classes/editors/class-vc-config-lib.php`
