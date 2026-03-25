---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_get_all_templates

Filters the complete list of grid item templates available in the grid item template picker. This includes both predefined and custom templates organized by category.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | array | An array of template category arrays. Each category array contains a `category` key (with `name` and `weight`) and a `templates` key (array of template definitions). |

## Usage

```php
<?php
add_filter( 'vc_grid_get_all_templates', 'my_custom_grid_templates', 10, 1 );

function my_custom_grid_templates( $data ) {
    // Add a custom template category
    $data[] = array(
        'category' => array(
            'name' => esc_html__( 'My Templates', 'my-theme' ),
            'weight' => 100,
        ),
        'templates' => array(
            array(
                'name' => esc_html__( 'Custom Grid Layout', 'my-theme' ),
                'template' => '[vc_gitem][vc_gitem_animated_block][vc_gitem_zone_a]...[/vc_gitem_zone_a][/vc_gitem_animated_block][/vc_gitem]',
            ),
        ),
    );
    return $data;
}
```

## Source

File: `include/params/vc_grid_item/editor/popups/class-vc-templates-editor-grid-item.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
