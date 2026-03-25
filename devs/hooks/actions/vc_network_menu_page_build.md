---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_network\_menu\_page\_build

Fires after the WPBakery Page Builder network admin menu page has been registered in a WordPress multisite environment. Use this hook to add submenu pages under the WPBakery menu in the network admin dashboard.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_network_menu_page_build', 'wpb_add_network_submenu' );

function wpb_add_network_submenu() {
    add_submenu_page(
        VC_PAGE_MAIN_SLUG,
        esc_html__( 'Network Settings', 'my-plugin' ),
        esc_html__( 'Network Settings', 'my-plugin' ),
        'manage_network_options',
        'my-network-vc-page',
        'wpb_render_network_page'
    );
}

function wpb_render_network_page() {
    echo '<div class="wrap"><h1>Network Settings</h1></div>';
}
```

## Source

File: `include/autoload/vc-pages/pages.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
