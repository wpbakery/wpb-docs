---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_layer_controls

Filters the HTML output of a specific layer's input controls in the CSS Editor (Design Options) onion layout. Each layer (margin, border, padding) has four directional input fields (top, right, bottom, left).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The HTML markup containing the label and directional input fields for the layer. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_layer_controls', 'my_custom_layer_controls' );

function my_custom_layer_controls( $output ) {
    // Add a tooltip icon next to the layer controls
    $output .= '<span class="vc_description" title="Enter values in pixels">?</span>';
    return $output;
}
```

## Source

File: `include/params/css_editor/css_editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
