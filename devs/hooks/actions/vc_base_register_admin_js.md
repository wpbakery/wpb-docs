---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_base\_register\_admin\_js

Fires during admin JavaScript registration. This hook runs inside the `Vc_Base::registerAdminJavascript()` method, allowing you to register additional JavaScript files for the WordPress admin dashboard alongside WPBakery's admin scripts.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_base_register_admin_js', 'wpb_register_custom_admin_js' );

function wpb_register_custom_admin_js() {
    // Register custom admin JavaScript files
    wp_register_script(
        'my-vc-admin-js',
        plugins_url( 'js/admin.js', __FILE__ ),
        array( 'jquery-core' ),
        '1.0.0',
        true
    );
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
