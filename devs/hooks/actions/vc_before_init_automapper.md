---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_init\_automapper

Fires before the automapper component is initialized. This hook runs inside the `Vc_Manager::automapper()` method, before the `Vc_Automapper` class is loaded and instantiated.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_automapper', 'wpb_before_automapper_init' );

function wpb_before_automapper_init() {
    // Run custom logic before the automapper is created
    // e.g., configure automapper behavior before initialization
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
