---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_optional_params

Filters the list of optional parameter types that should not be initialized by default in the edit form. Parameters in this list are excluded from the required initialization scripts, allowing them to be loaded on demand rather than upfront.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$optional_params` | array | Array of parameter type name strings that are considered optional for initialization. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_fields_optional_params', 'my_optional_params' );

function my_optional_params( $optional_params ) {
    // Mark a custom parameter type as optional to defer its initialization
    $optional_params[] = 'my_heavy_param';
    return $optional_params;
}
```

## Source

File: `include/params/params.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
