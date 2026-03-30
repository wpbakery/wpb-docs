---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_load_default_templates_action

Fires after the default templates have been loaded and the `vc_load_default_templates` filter has been applied. Use this hook to perform additional actions once all default templates are available, such as logging or modifying global state.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_load_default_templates_action', 'wpb_after_default_templates_loaded' );

function wpb_after_default_templates_loaded() {
    // Perform actions after default templates are loaded
    // For example, register additional template categories
    error_log( 'WPBakery default templates have been loaded.' );
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`
