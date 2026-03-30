---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_build_page

Fires when building a frontend page. This hook runs at the start of `Vc_Base::initPage()`, before template redirect actions for frontend CSS and JavaScript are registered. Use it to add custom frontend page functionality.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_build_page', 'wpb_custom_frontend_page_setup' );

function wpb_custom_frontend_page_setup() {
    // Add custom frontend functionality when WPBakery builds a page
    add_action( 'wp_enqueue_scripts', 'enqueue_my_custom_frontend_assets' );
}
```

## Source

File: `include/classes/core/class-vc-base.php`
