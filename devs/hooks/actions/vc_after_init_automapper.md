---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_after\_init\_automapper

Fires after the automapper component has been initialized. This hook runs inside the `Vc_Manager::automapper()` method, after the `Vc_Automapper` instance has been created and stored in the factory.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_init_automapper', 'wpb_after_automapper_init' );

function wpb_after_automapper_init() {
    // Run custom logic after the automapper is ready
    // e.g., register custom shortcode mappings
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
