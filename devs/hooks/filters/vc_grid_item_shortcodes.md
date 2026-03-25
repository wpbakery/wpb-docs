---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_item_shortcodes

Filters the list of shortcodes available for use within the grid item editor. These shortcodes define the elements that can be added inside grid item templates.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcodes` | array | An array of shortcode definitions loaded from the grid item shortcodes configuration file. Each entry defines a shortcode with its parameters for use in the grid item builder. |

## Usage

```php
<?php
add_filter( 'vc_grid_item_shortcodes', 'my_custom_grid_item_shortcodes', 10, 1 );

function my_custom_grid_item_shortcodes( $shortcodes ) {
    // Add a custom shortcode to the grid item editor
    $shortcodes['my_grid_element'] = array(
        'name' => esc_html__( 'My Grid Element', 'my-theme' ),
        'base' => 'my_grid_element',
        'category' => esc_html__( 'Custom', 'my-theme' ),
        'description' => esc_html__( 'A custom element for grid items.', 'my-theme' ),
        'params' => array(),
    );
    return $shortcodes;
}
```

## Source

File: `include/params/vc_grid_item/class-vc-grid-item.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
