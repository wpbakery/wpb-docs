---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_settings_wpb_data

Filters the WPBakery data array that is localized and passed to the settings page JavaScript. This data is made available as the `wpbData` JavaScript object on the WPBakery settings page.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | `array` | An associative array of data to be passed to the settings page JavaScript. Defaults to an empty array. |

## Usage

```php
add_filter( 'vc_get_settings_wpb_data', 'wpb_add_custom_settings_data' );

function wpb_add_custom_settings_data( $data ) {
    $data['customSettingEndpoint'] = admin_url( 'admin-ajax.php' );
    $data['nonce'] = wp_create_nonce( 'my_settings_nonce' );
    return $data;
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`
