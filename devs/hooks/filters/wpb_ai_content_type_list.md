---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 10
---

# wpb_ai_content_type_list

Filters the list of content type options displayed in the "Content type" dropdown of the WPBakery AI popup. Content types determine how the AI processes the request -- for example, generating new content, improving existing text, or translating it.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | array | An associative array of content type options where keys are internal identifiers and values are translated display labels. Default keys: `new_content`, `improve_existing`, `translate`. |
| `$ai_element_type` | string | The current element parameter type (e.g., `textarea_html`, `textarea`, `textfield`) for which the AI popup is being rendered. |

## Return

`array` -- The filtered associative array of content type options.

## Usage

```php
<?php
add_filter( 'wpb_ai_content_type_list', 'my_custom_ai_content_types', 10, 2 );

function my_custom_ai_content_types( $list, $ai_element_type ) {
    // Remove the translate option for textarea_html fields
    if ( 'textarea_html' === $ai_element_type ) {
        unset( $list['translate'] );
    }

    return $list;
}
```

:::note
The supported content type keys are `new_content`, `improve_existing`, and `translate`. Adding custom keys requires corresponding API endpoint configuration via the [`wpb_module_ai_type_response_route_lib`](/devs/hooks/filters/wpb_module_ai_type_response_route_lib/) filter.
:::

## Source

File: `modules/ai/class-vc-ai-modal-controller.php`
