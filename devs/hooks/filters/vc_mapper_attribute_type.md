---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_mapper_attribute_\{type\}

Filters a shortcode param attribute by its type during mapping. The dynamic portion of the hook name, `{type}`, refers to the parameter type (e.g., `textfield`, `dropdown`, `textarea_html`). This allows modifying parameter attributes for all params of a given type when shortcodes are mapped.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$attribute` | array | The parameter attribute array containing keys like `type`, `param_name`, `heading`, etc. |
| `$shortcode_tag` | string | The shortcode base tag being mapped (e.g., `vc_column_text`). |

## Usage

```php
<?php
add_filter( 'vc_mapper_attribute_textfield', 'my_modify_textfield_params', 10, 2 );

function my_modify_textfield_params( $attribute, $shortcode_tag ) {
    // Add a default description to all textfield params
    if ( empty( $attribute['description'] ) ) {
        $attribute['description'] = 'Enter a text value.';
    }
    return $attribute;
}
```

## Source

File: `include/classes/core/class-wpb-map.php`
