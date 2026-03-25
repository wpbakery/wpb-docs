---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_init\_base

Fires after the base class initialization is complete. This hook runs at the end of the `Vc_Base::init()` method, after post admin initialization, body class filters, excerpt filters, meta data hooks, and admin or page initialization have all been set up.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_base', 'wpb_after_base_init' );

function wpb_after_base_init() {
    // Run custom logic after VC base initialization
    // All base hooks and filters are now registered
    // e.g., modify registered post type support
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
