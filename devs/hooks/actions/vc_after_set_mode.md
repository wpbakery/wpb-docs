---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_after_set_mode

Fires after the WPBakery Page Builder editor mode has been determined and set. This hook runs inside the `Vc_Manager::init()` method, immediately after `setMode()` is called. The mode determines whether WPBakery is operating in admin, frontend editor, or page view context.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_after_set_mode', 'wpb_check_editor_mode' );

function wpb_check_editor_mode() {
    // Check the current VC mode and act accordingly
    $mode = vc_mode();

    if ( 'admin_frontend_editor' === $mode ) {
        // Frontend editor is active
        add_action( 'wp_enqueue_scripts', 'my_frontend_editor_scripts' );
    }
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
