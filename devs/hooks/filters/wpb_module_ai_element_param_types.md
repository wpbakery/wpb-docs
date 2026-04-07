---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 11
---

# wpb_module_ai_element_param_types

Filters the list of element parameter types that display the AI icon in the editor. When a parameter's type is included in this list, the AI generation button appears next to its field, allowing users to generate or modify content with AI.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$param_types` | array | A flat array of parameter type strings. Defaults include `textarea_html`, `textarea`, `textarea_raw_html`, `textarea_ace`, and addon types `uc_textfield`, `uc_textarea`, `uc_editor`, `us_textarea`, `us_text`. |

## Return

`array` -- The filtered array of parameter type strings.

## Usage

```php
<?php
add_filter( 'wpb_module_ai_element_param_types', 'my_custom_ai_param_types' );

function my_custom_ai_param_types( $param_types ) {
    // Add a custom parameter type to show the AI icon
    $param_types[] = 'my_custom_textarea';

    return $param_types;
}
```

:::note
Adding a parameter type to this list only controls whether the AI icon is displayed. To make the AI popup fully functional for a custom type, you must also register a response route via the [`wpb_module_ai_type_response_route_lib`](/devs/hooks/filters/wpb_module_ai_type_response_route_lib/) filter.
:::

## Source

File: `modules/ai/module.php`
