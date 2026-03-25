---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_admin\_inline\_editor

**Deprecated.** Use [`vc_frontend_editor_render`](/devs/hooks/actions/vc_frontend_editor_render) instead.

Fires when the frontend editor is being rendered. This hook runs inside the `Vc_Frontend_Editor::renderEditor()` method, after scripts and styles have been enqueued and the editor iframe URL has been prepared.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_admin_inline_editor', 'wpb_inline_editor_setup' );

function wpb_inline_editor_setup() {
    // Add custom functionality when the frontend editor renders
    wp_enqueue_script( 'my-inline-editor-js', plugins_url( 'js/inline-editor.js', __FILE__ ) );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
| 4.3 | Deprecated in favor of `vc_frontend_editor_render`. |
