---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_item_predefined_templates

Filters the predefined grid item templates. These are the built-in template layouts available in the grid item editor template picker.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$templates` | array | An array of predefined template definitions loaded from the templates configuration file. Each template contains `name` and `template` (shortcode string) keys. |

## Usage

```php
<?php
add_filter( 'vc_grid_item_predefined_templates', 'my_custom_predefined_templates', 10, 1 );

function my_custom_predefined_templates( $templates ) {
    // Add a custom predefined template
    $templates[] = [
        'name' => esc_html__( 'My Custom Template', 'my-theme' ),
        'template' => '[vc_gitem][vc_gitem_animated_block][vc_gitem_zone_a][vc_gitem_col width="1/1"][vc_gitem_row_inner][vc_gitem_col_inner width="1/1"]{{ post_title }}[/vc_gitem_col_inner][/vc_gitem_row_inner][/vc_gitem_col][/vc_gitem_zone_a][/vc_gitem_animated_block][/vc_gitem]',
    ];
    return $templates;
}
```

## Source

File: `include/params/vc_grid_item/class-vc-grid-item.php`
