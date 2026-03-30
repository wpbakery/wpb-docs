---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_post_custom_layout_name

Filters the custom layout name for the current post. The layout name determines which template layout (e.g., "blank", "default") is used for rendering. Use this to programmatically override the layout selection.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$layout_name` | string | The layout name string. Common values include `'default'` and `'blank'`. Empty string if no layout is set. |

## Usage

```php
<?php
add_filter( 'vc_post_custom_layout_name', 'my_override_layout_name', 10, 1 );

function my_override_layout_name( $layout_name ) {
    // Force blank layout for all pages
    if ( is_page() ) {
        return 'blank';
    }
    return $layout_name;
}
```

## Source

File: `modules/post-custom-layout/module.php`
