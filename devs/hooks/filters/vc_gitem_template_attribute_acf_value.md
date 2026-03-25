---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_acf_value

Filters the ACF (Advanced Custom Fields) field value before it is displayed in a grid item template.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The ACF field value retrieved for the current post. |

## Usage

```php
<?php
add_filter( 'vc_gitem_template_attribute_acf_value', 'my_custom_acf_value', 10, 1 );

function my_custom_acf_value( $value ) {
    // Modify the ACF field value before display
    return esc_html( $value );
}
```

## Source

File: `include/classes/vendors/plugins/acf/grid-item-attributes.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
