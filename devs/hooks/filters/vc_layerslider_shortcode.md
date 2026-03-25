---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_layerslider_shortcode

Filters the rendered output of the LayerSlider shortcode within the WPBakery LayerSlider element. Allows modification of the slider HTML before it is appended to the element output.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML output from executing the `[layerslider]` shortcode via `do_shortcode()`. |

## Usage

```php
<?php
add_filter( 'vc_layerslider_shortcode', 'my_modify_layerslider_output', 10, 1 );

function my_modify_layerslider_output( $output ) {
    // Wrap the LayerSlider output in a custom container
    return '<div class="my-layerslider-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/templates/shortcodes/layerslider_vc.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
