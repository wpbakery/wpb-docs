---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_backend_editor

Fires before the backend editor component is initialized. Use this hook to run custom code or register dependencies before the `Vc_Backend_Editor` class is instantiated.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_backend_editor', 'wpb_before_backend_editor_init' );

function wpb_before_backend_editor_init() {
    // Load custom assets or register dependencies
    // before the backend editor is created
    wp_enqueue_style( 'my-backend-editor-styles', plugins_url( 'css/backend.css', __FILE__ ) );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
