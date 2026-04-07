---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_template_custom_code

Filters the custom code data passed to the Custom Code panel UI template.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$custom_code_data` | array | Array of custom code data to be rendered in the Custom Code panel. Default empty array `[]`. |

## Usage

```php
<?php
add_filter( 'vc_template_custom_code', 'my_custom_code_data' );

function my_custom_code_data( $custom_code_data ) {
    // Add custom code entries to the Custom Code panel.
    $custom_code_data[] = [
        'label' => 'My Custom Script',
        'value' => '<script>console.log("hello");</script>',
    ];

    return $custom_code_data;
}
```

## Source

File: `include/classes/editors/popups/class-vc-custom-code.php`
