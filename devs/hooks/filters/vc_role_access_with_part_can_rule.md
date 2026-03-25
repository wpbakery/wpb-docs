---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_role\_access\_with\_\{part\}\_can\_\{rule\}

Filters a specific rule check for a role access part. The dynamic portions of the hook name, `{part}` and `{rule}`, refer to the access part (e.g., `shortcodes`) and the specific rule (e.g., `vc_column_text_all`) being checked.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$result` | bool | The result of the capability check for this specific rule. |
| `$role` | string | The WordPress role being checked. |

## Usage

```php
<?php
add_filter( 'vc_role_access_with_shortcodes_can_vc_column_text_all', 'my_shortcode_rule_access', 10, 2 );

function my_shortcode_rule_access( $result, $role ) {
    // Grant access to the vc_column_text shortcode for authors
    if ( 'author' === $role ) {
        return true;
    }
    return $result;
}
```

## Source

File: `include/classes/core/access/class-vc-role-access-controller.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.4 | Introduced. |
