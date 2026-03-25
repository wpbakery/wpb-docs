---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_enqueue_frontend_editor_js

Filters the array of JavaScript dependency handles that are enqueued for the WPBakery frontend editor. This allows you to add or remove script dependencies loaded when the frontend editor is active.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dependencies` | `array` | An array of registered script handles (strings) to be enqueued for the frontend editor. Includes both WordPress core dependencies and WPBakery-specific scripts. |

## Usage

```php
add_filter( 'vc_enqueue_frontend_editor_js', 'wpb_modify_frontend_editor_scripts' );

function wpb_modify_frontend_editor_scripts( $dependencies ) {
    // Add a custom script dependency
    $dependencies[] = 'my-custom-script';

    // Remove a dependency if needed
    $dependencies = array_diff( $dependencies, [ 'unwanted-script' ] );

    return $dependencies;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
