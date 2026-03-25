---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_init\_base

Fires before the base class initialization begins. This hook runs at the start of the `Vc_Base::init()` method, before post admin initialization and body class filters are set up.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_base', 'wpb_before_base_init' );

function wpb_before_base_init() {
    // Run custom logic before VC base initialization
    // e.g., set up custom post type support
    add_post_type_support( 'my_custom_post_type', 'editor' );
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
