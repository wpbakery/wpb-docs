---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_css_class

Filters the CSS class string applied to the shortcode edit form panel container. This allows modification of the panel's CSS classes to change its appearance or behavior.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$css_class` | string | The CSS class string for the edit form panel. Default `vc_panel vc_shortcode-edit-form vc_media-xs`. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_css_class', 'my_custom_edit_form_panel_class' );

function my_custom_edit_form_panel_class( $css_class ) {
    // Add a custom class to the edit form panel
    $css_class .= ' my-custom-panel-class';
    return $css_class;
}
```

## Source

File: `include/templates/editors/popups/panel_shortcode_edit_form.tpl.php`
