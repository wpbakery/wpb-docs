---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 9
---

# get_lib_ai_icon_words

For a `text_field` array type, we have a list of words based on which we output the AI icon if the element param name contains one of them. This filter is handy if you want to regulate this word library.

:::info
Available Since 8.3
:::

```php
<?php
add_filter('get_lib_ai_icon_words', 'add_custom_ai_wpb_processor');
function add_custom_ai_wpb_processor(array $list): array {
    $list[] = 'custom';

    return $list;
}
?>
```
