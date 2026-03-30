---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_wpbakery_shortcode_get_column_controls_modular_template

Filters the template file path used for rendering modular column controls in the backend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_file` | string | The template file path relative to the templates directory. Default `editors/partials/backend_controls.tpl.php`. |

## Usage

```php
<?php
add_filter( 'vc_wpbakery_shortcode_get_column_controls_modular_template', 'my_custom_controls_template' );

function my_custom_controls_template( $template_file ) {
    // Use a custom controls template for the backend editor.
    return 'my-plugin/templates/custom-controls.tpl.php';
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
