---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings-less-variables

Filters the LESS variable definitions used for compiling custom design options colors on the WPBakery settings page. These variables map LESS variable names to setting keys and their default values.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$variables` | array | Associative array mapping LESS variable names to their configuration. Each entry can be a string (setting key) or an array with `key`, `default`, and optionally `default_key` properties. |

## Usage

```php
<?php
add_filter( 'vc_settings-less-variables', 'my_add_less_variables', 10, 1 );

function my_add_less_variables( $variables ) {
    // Add a custom LESS variable mapped to a setting
    $variables['my_custom_color'] = [
        'key' => 'wpb_js_my_custom_color',
        'default' => '#333333',
    ];
    return $variables;
}
```

## Source

File: `modules/design-options/class-vc-design-options-module-settings.php`
