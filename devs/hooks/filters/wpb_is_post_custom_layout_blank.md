---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_is_post_custom_layout_blank

Filters whether the current post uses a blank custom layout. This is used in the page settings tab to determine if the layout should be treated as blank (no header/footer).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$is_blank` | bool | Whether the post custom layout is blank. Default `false`. |

## Usage

```php
<?php
add_filter( 'wpb_is_post_custom_layout_blank', 'my_force_blank_layout' );

function my_force_blank_layout( $is_blank ) {
    // Force blank layout for a specific post type
    if ( 'landing_page' === get_post_type() ) {
        return true;
    }
    return $is_blank;
}
```

## Source

File: `include/templates/editors/popups/page-settings/page-settings-tab.tpl.php`
