---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc-tta-get-params-tabs-list

Filters the TTA (Tabs, Tours, Accordions) tabs list HTML output before it is returned.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$html` | array | Array of HTML strings for each tab list item. |
| `$atts` | array | The shortcode attributes. |
| `$content` | string | The shortcode content. |
| `$this` | object | The WPBakeryShortCode_Vc_Tta_Tabs instance. |

## Usage

```php
<?php
add_filter( 'vc-tta-get-params-tabs-list', 'my_custom_function', 10, 4 );

function my_custom_function( $html, $atts, $content, $instance ) {
    // Modify the tabs HTML to add custom classes
    foreach ( $html as &$tab_html ) {
        $tab_html = str_replace( 'vc_tta-tab', 'vc_tta-tab my-custom-class', $tab_html );
    }
    return $html;
}
```

## Source

File: `include/classes/shortcodes/vc-tta-tabs.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
