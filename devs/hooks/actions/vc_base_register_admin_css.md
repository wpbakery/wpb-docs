---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_base\_register\_admin\_css

Fires during admin CSS registration. This hook runs inside the `Vc_Base::registerAdminCss()` method, allowing you to register additional CSS stylesheets for the WordPress admin dashboard alongside WPBakery's admin styles.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_base_register_admin_css', 'wpb_register_custom_admin_css' );

function wpb_register_custom_admin_css() {
    // Register custom admin stylesheets
    wp_register_style(
        'my-vc-admin-css',
        plugins_url( 'css/admin.css', __FILE__ ),
        array(),
        '1.0.0'
    );
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
