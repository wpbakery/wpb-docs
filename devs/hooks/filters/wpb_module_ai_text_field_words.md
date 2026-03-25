---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
id: wpb_module_ai_text_field_words
title: wpb_module_ai_text_field_words
sidebar_label: wpb_module_ai_text_field_words
sidebar_position: 12
slug: /hooks/filters/wpb_module_ai_text_field_words
---

# wpb_module_ai_text_field_words

Since 8.3

For a `text_field` array type, we have a list of words based on which we output the AI icon if the element param name contains one of them. This filter is handy if you want to regulate this word library.

```php
<?php
add_filter('wpb_module_ai_text_field_words', 'add_custom_ai_wpb_processor');
function add_custom_ai_wpb_processor(array $list): array {
    $list[] = 'custom';

    return $list;
}
?>
```
