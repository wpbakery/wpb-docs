---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 8
---

# wpb_ai_number_of_symbols_list

Filters the list of content length options displayed in the "Length" dropdown of the WPBakery AI popup. Each parameter type can have its own set of length presets, which map word count ranges to human-readable labels.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | array | A multi-dimensional associative array keyed by parameter type (e.g., `textarea_html`, `textarea`, `textfield`). Each entry is an associative array where keys are word-count ranges in `[min,max]` format and values are display labels. |
| `$ai_element_type` | string | The current element parameter type for which the AI popup is being rendered. |

## Return

`array` -- The filtered multi-dimensional array of length options, keyed by parameter type.

## Usage

```php
<?php
add_filter( 'wpb_ai_number_of_symbols_list', 'my_custom_ai_length_options', 10, 2 );

function my_custom_ai_length_options( $list, $ai_element_type ) {
    // Replace the textarea_html length options with a simplified set
    $list['textarea_html'] = [
        '[10,15]'   => 'Title (up to 15 words)',
        '[15,25]'   => 'Short description (up to 25 words)',
        '[20,50]'   => 'Description (up to 50 words)',
        '[200,300]' => 'Long description (up to 300 words)',
    ];

    return $list;
}
```

:::note
If you add a new word-count range that should use a different API endpoint than the default, you must also configure it via the [`wpb_module_ai_type_response_route_lib`](/devs/hooks/filters/wpb_module_ai_type_response_route_lib/) filter by adding the range to the `endpoint > length` array for the corresponding parameter type.
:::

## Source

File: `modules/ai/class-vc-ai-modal-controller.php`
