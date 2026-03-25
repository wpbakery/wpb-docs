---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_menu\_page\_build

Fires after the main WPBakery Page Builder admin menu page has been registered. Use this hook to add submenu pages under the WPBakery menu in the WordPress admin dashboard.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_menu_page_build', 'wpb_add_custom_submenu' );

function wpb_add_custom_submenu() {
    add_submenu_page(
        VC_PAGE_MAIN_SLUG,
        esc_html__( 'My Custom Page', 'my-plugin' ),
        esc_html__( 'My Custom Page', 'my-plugin' ),
        'manage_options',
        'my-custom-vc-page',
        'wpb_render_custom_page'
    );
}

function wpb_render_custom_page() {
    echo '<div class="wrap"><h1>My Custom Page</h1></div>';
}
```

## Source

File: `include/autoload/vc-pages/pages.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
