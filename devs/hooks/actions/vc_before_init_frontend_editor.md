---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_init_frontend_editor

Fires before the frontend editor component is initialized. Use this hook to run custom code or register dependencies before the `Vc_Frontend_Editor` class is instantiated.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_before_init_frontend_editor', 'wpb_before_frontend_editor_init' );

function wpb_before_frontend_editor_init() {
    // Load custom assets or set up dependencies
    // before the frontend editor is created
    wp_enqueue_script( 'my-frontend-editor-script', plugins_url( 'js/frontend.js', __FILE__ ) );
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
