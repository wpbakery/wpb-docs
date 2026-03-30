---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_css_editor_background_image_control

Filters the HTML output of the background image control in the CSS Editor (Design Options). This control renders the image upload button and attached image preview area.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The HTML markup for the background image control, including the image wrapper and upload button. |

## Usage

```php
<?php
add_filter( 'vc_css_editor_background_image_control', 'my_custom_bg_image_control' );

function my_custom_bg_image_control( $value ) {
    // Add an additional note about recommended image sizes
    $value .= '<p class="description">Recommended size: 1920x1080px</p>';
    return $value;
}
```

## Source

File: `include/params/css_editor/css_editor.php`
