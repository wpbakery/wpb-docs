---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_font_container_output_data

Filters the rendered output data array for the font container parameter before it is assembled into the final HTML output. Each key in the data array corresponds to a font container field (e.g., tag, font_family, font_size, color, text_align, line_height) and contains its rendered HTML template.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | `array` | An associative array of rendered HTML strings, keyed by field name (e.g., `tag`, `font_family`, `font_size`, `color`, `text_align`, `line_height`). |
| `$fields` | `array` | The font container fields configuration array. |
| `$values` | `array` | The current values for each field. |
| `$settings` | `array` | The parameter settings array. |

## Usage

```php
add_filter( 'vc_font_container_output_data', 'wpb_modify_font_container_output', 10, 4 );

function wpb_modify_font_container_output( $data, $fields, $values, $settings ) {
    // Add a custom field output after the existing fields
    if ( isset( $fields['font_size'] ) ) {
        $data['font_size'] .= '<p class="description">Enter size in px, em, or rem.</p>';
    }
    return $data;
}
```

## Source

File: `include/params/font_container/font_container.php`
