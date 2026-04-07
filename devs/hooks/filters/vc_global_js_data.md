---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_global_js_data

Filters the global JavaScript data object (`vcData`) that is localized and made available to the WPBakery settings page scripts. This data is passed to the `wpb_js_composer_settings` script via `wp_localize_script()`.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | array | An associative array containing global JS data. Default keys include `version` (string, the WPBakery version) and `debug` (bool, defaults to `false`). |

## Usage

```php
<?php
add_filter( 'vc_global_js_data', 'my_custom_js_data', 10, 1 );

function my_custom_js_data( $data ) {
    // Add custom data to the global JS object
    $data['my_custom_key'] = 'my_custom_value';
    $data['debug'] = WP_DEBUG;
    return $data;
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`
