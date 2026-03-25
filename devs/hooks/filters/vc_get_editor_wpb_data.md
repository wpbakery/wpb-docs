---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_editor_wpb_data

Filters the WPBakery data array that is localized and passed to the editor JavaScript. This data is made available as the `wpbData` JavaScript object in the editor context.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | `array` | An associative array of data to be passed to the editor JavaScript. Defaults to an empty array. |

## Usage

```php
add_filter( 'vc_get_editor_wpb_data', 'wpb_add_custom_editor_data' );

function wpb_add_custom_editor_data( $data ) {
    $data['myPluginVersion'] = '1.0.0';
    $data['customEndpoint'] = rest_url( 'my-plugin/v1/data' );
    return $data;
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.9 | Introduced. |
