---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_build_admin_page

Fires when building an admin page. This hook runs at the start of `Vc_Base::initAdmin()`, before the edit form, templates panel editor, and shared templates are initialized. Use it to add custom admin-only functionality.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_build_admin_page', 'wpb_custom_admin_page_setup' );

function wpb_custom_admin_page_setup() {
    // Add custom admin functionality when WPBakery admin page is built
    add_meta_box(
        'my_custom_meta_box',
        'Custom WPBakery Settings',
        'render_my_meta_box',
        'page',
        'side'
    );
}
```

## Source

File: `include/classes/core/class-vc-base.php`
