---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 6
---

# vc_shortcodes_css_class


Example how you can alter class names that are outputted for built-in content elements and elements that follow up our coding guidelines and utilize `apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, …);` filter in their html output.

```php
<?php
add_filter('vc_shortcodes_css_class', 'change_element_class_name', 10, 2);

function change_element_class_name($class_string, $tag) {
    // modify $class_string variable to your needs. You can use $tag variable to determine what element is currently rendered.
    return $class_string;
}
```

:::note
You can hook into `vc_shortcodes_css_class` filter only if this filter is applied in the contents element output.
:::

```php
<?php
//... some code
$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $width_class, $this->settings['base'], $atts );
//... some code
?>
```
