---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_get_ai_icon_template

Filters the template path used to render the AI icon for a given field. This allows replacing the default AI icon template with a custom one.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The template file path relative to the templates directory. Default `editors/partials/icon-ai.tpl.php`. |
| `$type` | string | The parameter type (e.g., `textarea_html`, `textfield`). |
| `$field_id` | string | The ID of the field the AI icon is attached to. |

## Usage

```php
<?php
add_filter( 'wpb_get_ai_icon_template', 'my_custom_ai_icon_template', 10, 3 );

function my_custom_ai_icon_template( $template, $type, $field_id ) {
    // Use a custom template for textarea fields
    if ( 'textarea' === $type ) {
        return 'my-plugin/ai-icon-custom.php';
    }
    return $template;
}
```

## Source

File: `modules/ai/helpers.php`
