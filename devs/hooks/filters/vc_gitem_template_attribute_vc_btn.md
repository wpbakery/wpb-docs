---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_vc_btn

Filters the rendered button output used in grid item templates, particularly for the "Load More" button in pageable grid elements.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The current button value (empty string by default). |
| `$data` | array | An associative array containing `post` (WP_Post or stdClass object) and `data` (string with button shortcode output). |

## Usage

```php
<?php
add_filter( 'vc_gitem_template_attribute_vc_btn', 'my_custom_grid_btn', 10, 2 );

function my_custom_grid_btn( $value, $data ) {
    // Customize the button output in grid items
    if ( isset( $data['data'] ) ) {
        return '<button class="my-custom-btn">' . esc_html__( 'Load More', 'my-theme' ) . '</button>';
    }
    return $value;
}
```

## Source

File: `include/classes/shortcodes/paginator/class-vc-pageable.php`
