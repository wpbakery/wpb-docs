---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_tta_section_param_heading_tag

Filters the HTML heading tag used for TTA section titles (e.g., accordion panel or tab heading).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$heading_tag` | string | The HTML heading tag. Default `h4`. |
| `$atts` | array | The section shortcode attributes. |

## Usage

```php
<?php
add_filter( 'vc_tta_section_param_heading_tag', 'my_section_heading_tag', 10, 2 );

function my_section_heading_tag( $heading_tag, $atts ) {
    // Use h3 for all TTA section headings.
    return 'h3';
}
```

## Source

File: `include/classes/shortcodes/vc-tta-section.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.6 | Introduced. |
