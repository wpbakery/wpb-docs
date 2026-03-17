---
sidebar_position: 8
---

# wpb_ai_number_of_symbols_list

Since 8.3

This filter is handy if you want to change the 'Length' dropdown for a particular param type of element in a WPBakery AI popup.

Please note: If you want to process a new merge interval some other way in the default endpoint, you need to specify it in [`wpb_module_ai_type_response_route_lib`](/devs/filters/wpb_module_ai_type_response_route_lib/).

```php
<?php
add_filter('wpb_ai_number_of_symbols_list', 'add_custom_ai_wpb_processor', 10, 2);

function add_custom_ai_wpb_processor(array $list, string $wpb_ai_element_type): array {
    if ($wpb_ai_element_type !== 'textarea_html') {
        return $list;
    }
    unset($list['textarea_html']);
    $list['textarea_html'] = [
        '[10,15]' => 'Title (up to 15 words)',
        '[15,25]' => 'Short description (up to 25 words)',
        '[20,50]' => 'Description (up to 50 words)',
        '[200,300]' => 'Long description (up to 300 words)',
    ];
    return $list;

}
?>
```
