---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 12
---

# wpb_module_ai_text_field_words

Filters the list of keywords used to determine whether a `textfield` parameter should display the AI icon. When a textfield parameter's heading contains one of these keywords, the AI icon is shown next to it. This provides a targeted approach -- rather than showing AI on every text input, it only appears on fields whose headings suggest text content.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$word_list` | array | A flat array of lowercase keyword strings. Defaults: `label`, `title`, `text`, `content`, `description`, `message`, `heading`, `subheading`. |

## Return

`array` -- The filtered array of keyword strings.

## Usage

```php
<?php
add_filter( 'wpb_module_ai_text_field_words', 'my_custom_ai_text_keywords' );

function my_custom_ai_text_keywords( $word_list ) {
    // Add custom keywords so AI icon shows on textfields
    // with these words in their heading
    $word_list[] = 'caption';
    $word_list[] = 'subtitle';
    $word_list[] = 'tagline';

    return $word_list;
}
```

:::note
This filter only applies to parameters with `type` set to `textfield`. Parameters with other types (such as `textarea_html` or `textarea`) are controlled by the [`wpb_module_ai_element_param_types`](/devs/hooks/filters/wpb_module_ai_element_param_types/) filter instead. Additionally, the `el_class` parameter is always excluded regardless of its heading.
:::

## Source

File: `modules/ai/module.php`
