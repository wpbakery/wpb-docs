---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_inline\_editor\_page\_view

Fires when the inline (frontend) editor page view is loaded. This hook runs during the frontend editor's `buildEditablePage()` method, after editable content parsing is set up but before frontend JS/CSS assets are enqueued.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_inline_editor_page_view', 'wpb_on_inline_editor_page_view' );

function wpb_on_inline_editor_page_view() {
    // Add custom functionality when the inline editor page view loads
    // e.g., enqueue scripts for the inline editing iframe
    add_action( 'wp_enqueue_scripts', 'my_inline_editor_scripts' );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
