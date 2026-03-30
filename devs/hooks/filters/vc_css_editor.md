---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor

Filters the complete HTML output of the CSS Editor (Design Options) parameter field. This allows customization of the entire CSS editor interface rendered in the shortcode edit form.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The complete HTML output of the CSS editor field. |

## Usage

```php
<?php
add_filter( 'vc_css_editor', 'my_custom_css_editor' );

function my_custom_css_editor( $output ) {
    // Add a custom help text below the CSS editor
    $output .= '<p class="description">Use this editor to customize spacing, borders, and background.</p>';
    return $output;
}
```

## Source

File: `include/params/css_editor/css_editor.php`
