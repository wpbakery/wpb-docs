---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_frontend\_editor\_hook\_load\_edit

Fires when the frontend editor loads an edit page. This hook runs during the `hookLoadEdit()` method after the `current_screen` action is registered but before admin head actions and block editor filters are set up.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_frontend_editor_hook_load_edit', 'wpb_on_frontend_editor_load_edit' );

function wpb_on_frontend_editor_load_edit() {
    // Run custom logic when the frontend editor loads an edit page
    // e.g., register custom admin actions
    add_action( 'admin_head', 'my_custom_admin_head_for_frontend_editor' );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
