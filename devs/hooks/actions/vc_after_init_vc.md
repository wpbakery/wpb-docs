---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_init\_vc

Fires after the main WPBakery Page Builder instance has been initialized. This hook runs inside the `Vc_Manager::vc()` method, after the `Vc_Base` instance has been created and configured with its template panel editor, shared templates, edit form, and preset panel editor dependencies.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_vc', 'wpb_after_vc_instance_init' );

function wpb_after_vc_instance_init() {
    // Run custom logic after the main VC instance is ready
    // The Vc_Base object and its editors are now available
    // e.g., modify template panel editor behavior
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
