---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_enqueue\_backend\_editor\_js

Filters the list of JavaScript handles to enqueue in the backend editor. This allows adding or removing scripts that are loaded when the WPBakery backend editor is active.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dependencies` | array | An indexed array of registered script handles to enqueue. |

## Usage

```php
<?php
add_filter( 'wpb_enqueue_backend_editor_js', 'my_backend_editor_js' );

function my_backend_editor_js( $dependencies ) {
    // Register and add a custom script
    wp_register_script( 'my-backend-script', plugins_url( 'js/backend.js', __FILE__ ) );
    $dependencies[] = 'my-backend-script';
    return $dependencies;
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.0 | Introduced. |
