---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_onion_layout

Filters the HTML output of the onion layout (box model diagram) in the CSS Editor (Design Options). The onion layout displays the nested margin, border, padding, and content layers visually.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The HTML markup for the onion layout containing nested margin, border, padding, and content layers with their input controls. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_onion_layout', 'my_custom_onion_layout' );

function my_custom_onion_layout( $output ) {
    // Wrap the onion layout with a custom container
    return '<div class="my-custom-onion-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/params/css_editor/css_editor.php`
