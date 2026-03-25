---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_init\_autoload

Fires before the autoload manager is initialized. This hook runs inside the `Vc_Manager::autoload()` method, before the `Vc_Autoload_Manager` class is loaded and instantiated.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_autoload', 'wpb_before_autoload_init' );

function wpb_before_autoload_init() {
    // Run custom logic before the autoload manager is created
    // e.g., define custom autoload paths
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
