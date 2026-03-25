---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_mapper\_init\_before

Fires before the WPBakery mapper begins initialization. This hook runs at the very start of `Vc_Mapper::init()`, before parameter definitions are loaded and before any element mapping takes place. Use it to prepare resources or register activities that should be queued before the mapping process.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_mapper_init_before', 'wpb_before_mapper_init' );

function wpb_before_mapper_init() {
    // Prepare custom configurations before element mapping begins
    // This runs before lean-map.php is loaded
    define( 'MY_PLUGIN_ELEMENTS_LOADED', true );
}
```

## Source

File: `include/classes/core/class-vc-mapper.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
