---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_before\_init

Fires at the very beginning of WPBakery Page Builder initialization. This hook runs as the first action inside the `Vc_Manager::init()` method, before the editor mode is set, components are loaded, or shortcodes are mapped. Use this hook for early setup tasks that need to run before any WPBakery component is initialized.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init', 'wpb_early_setup' );

function wpb_early_setup() {
    // Run logic before WPBakery initializes
    // e.g., conditionally disable features before mode is set
    if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
        // Prepare for AJAX-specific initialization
    }
}
```

## Source

File: `include/classes/core/class-vc-manager.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
