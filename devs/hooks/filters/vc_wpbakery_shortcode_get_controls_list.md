---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_wpbakery_shortcode_get_controls_list

Filters the list of control actions available for a shortcode element in the backend editor (e.g., edit, clone, copy, delete).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$controls_list` | array | Array of control action strings. Default includes `edit`, `clone`, `copy`, `delete`. |
| `$shortcode` | string | The shortcode tag name. |

## Usage

```php
<?php
add_filter( 'vc_wpbakery_shortcode_get_controls_list', 'my_modify_controls_list', 10, 2 );

function my_modify_controls_list( $controls_list, $shortcode ) {
    // Remove the clone and copy controls for a specific element.
    if ( 'vc_custom_heading' === $shortcode ) {
        $controls_list = array_diff( $controls_list, [ 'clone', 'copy' ] );
    }

    return $controls_list;
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
