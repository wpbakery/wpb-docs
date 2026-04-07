---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_map_get_param_defaults

Filters the default value resolved for an individual shortcode parameter. Called once per parameter when building the defaults array for a mapped shortcode.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | mixed | The resolved default value for the parameter. |
| `$param` | array | The full parameter definition array, including keys like `param_name`, `type`, `value`, etc. |

## Usage

```php
<?php
add_filter( 'vc_map_get_param_defaults', 'my_override_param_default', 10, 2 );

function my_override_param_default( $value, $param ) {
    // Change the default value for a specific parameter
    if ( 'css_animation' === $param['param_name'] ) {
        $value = 'fadeIn';
    }
    return $value;
}
```

## Source

File: `include/helpers/helpers.php`
