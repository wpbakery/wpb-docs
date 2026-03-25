---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_init\_autoload

Fires after the autoload manager has been initialized. This hook runs inside the `Vc_Manager::autoload()` method, after the `Vc_Autoload_Manager` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_autoload', 'wpb_after_autoload_init' );

function wpb_after_autoload_init() {
    // Run custom logic after the autoload manager is ready
    // e.g., register additional autoload paths
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
