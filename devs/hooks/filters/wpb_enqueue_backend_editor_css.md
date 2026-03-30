---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_enqueue_backend_editor_css

Filters the list of CSS stylesheet handles to enqueue in the backend editor. This allows adding or removing stylesheets that are loaded when the WPBakery backend editor is active.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dependencies` | array | An indexed array of registered stylesheet handles to enqueue. |

## Usage

```php
<?php
add_filter( 'wpb_enqueue_backend_editor_css', 'my_backend_editor_css' );

function my_backend_editor_css( $dependencies ) {
    // Register and add a custom stylesheet
    wp_register_style( 'my-backend-style', plugins_url( 'css/backend.css', __FILE__ ) );
    $dependencies[] = 'my-backend-style';
    return $dependencies;
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`
