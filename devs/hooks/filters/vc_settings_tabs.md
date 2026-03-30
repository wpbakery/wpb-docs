---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_tabs

Filters the array of settings tabs displayed on the WPBakery Page Builder settings page. Allows adding, removing, or reordering tabs.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tabs` | array | Associative array of settings tabs where keys are tab slugs and values are tab labels. |

## Usage

```php
<?php
add_filter( 'vc_settings_tabs', 'my_custom_settings_tabs' );

function my_custom_settings_tabs( $tabs ) {
    // Add a custom settings tab.
    $tabs['my-custom-tab'] = esc_html__( 'My Custom Settings', 'my-plugin' );

    return $tabs;
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`
