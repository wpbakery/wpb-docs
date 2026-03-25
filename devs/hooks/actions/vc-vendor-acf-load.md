---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc-vendor-acf-load

Fires after the Advanced Custom Fields (ACF) vendor integration has been loaded and initialized. This hook runs at the end of the `Vc_Vendor_AdvancedCustomFields::load()` method, after all ACF-related editor actions and filters have been registered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$vendor` | `Vc_Vendor_AdvancedCustomFields` | The ACF vendor instance that was just loaded. |

## Usage

```php
add_action( 'vc-vendor-acf-load', 'wpb_extend_acf_integration' );

function wpb_extend_acf_integration( $vendor ) {
    // Extend or modify the ACF vendor integration
    // e.g., register additional shortcodes or hooks
    add_action( 'vc_backend_editor_render', 'my_custom_acf_backend_setup' );
}
```

## Source

File: `include/classes/vendors/plugins/class-vc-vendor-advanced-custom-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
