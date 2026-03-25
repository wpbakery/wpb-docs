---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_activation\_hook

Fires during the WPBakery Page Builder plugin activation process. This hook allows you to run custom logic when the plugin is activated, such as setting default options, creating database tables, or flushing rewrite rules.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$networkWide` | `bool` | Whether the plugin is being activated network-wide in a multisite environment. |

## Usage

```php
add_action( 'vc_activation_hook', 'wpb_on_plugin_activation' );

function wpb_on_plugin_activation( $networkWide ) {
    if ( $networkWide ) {
        // Handle network-wide activation in multisite
        return;
    }

    // Set default options on activation
    update_option( 'my_vc_extension_version', '1.0.0' );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
