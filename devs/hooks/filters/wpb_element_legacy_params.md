---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_element_legacy_params

With this filter theme and plugin authors can deprecate element params that were removed from the element config but should stay for backward compatibility. WPBakery keeps them as hidden params.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$legacy_params` | array | An indexed array of legacy parameter definitions. Each item is an associative array with `element` (the shortcode tag), `param_name` (the deprecated parameter name), and `deprecated` (the version the parameter was deprecated in). |

## Usage

```php
<?php
add_filter( 'wpb_element_legacy_params', 'my_custom_legacy_params' );

function my_custom_legacy_params( $legacy_params ) {
    // Deprecate a renamed param on a custom element so old content
    // saved with the previous attribute name keeps rendering correctly.
    $legacy_params[] = [
        'element'    => 'my_custom_element',
        'param_name' => 'old_color',
        'deprecated' => '1.2',
    ];

    return $legacy_params;
}
```

## Source

File: `include/classes/migrations/class-wpb-template-attributes-migration.php`
