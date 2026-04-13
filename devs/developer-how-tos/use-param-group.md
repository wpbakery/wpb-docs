---
id: use-param-group
title: Use param group in elements
sidebar_label: Use param group in elements
sidebar_position: 27
hide_table_of_contents: true
slug: /developers-how-tos/use-param-group-in-elements
---

# Use param group in elements

If you have shortcode with multiple grouped values, like progress bar. You can use parameter called **param_group** which simplify input for multiple grouped values. As an example see **vc_progress_bar** shortcode.

## Integrations steps

1) When you use **vc_map**, for mapping attributes you use params array. Same way to map **param_group** params.

Example:

```php
add_action('vc_before_init', 'wpb_custom_element');
function wpb_custom_element() {
 vc_map([
 'name' => __('My Custom Element', 'salient-child'),
 'base' => 'my_custom_element',
 'class' => '',
 'category' => __('Content', 'salient-child'),
 'params' => [
 [
 'type' => 'textfield',
 'value' => '',
 'heading' => 'Title',
 'param_name' => 'simple_textfield',
 ],
 // Params group
 [
 'type' => 'param_group',
 'value' => '',
 'param_name' => 'titles',
 // Note: params are mapped inside param-group
 'params' => [
 [
 'type' => 'textfield',
 'value' => '',
 'heading' => 'Enter your title (multiple field)',
 'param_name' => 'title',
 ],
 ],
 ],
 ],
 ]);
}
```

Once the shortcode will be saved the values of param group will be concatenated automatically. Param groups values will have name concatenated with param-group name, like: "titles_title[0]='test',titles_title[1]='test2′".

2) To parse this values in template use helper: **$titles = vc_param_group_parse_atts( $atts['titles'] );** The structure of **$titles** variable will be an indexed array of arrays with [key=value]. Then you can use iterators (loops and other manipulations) to output a values.
