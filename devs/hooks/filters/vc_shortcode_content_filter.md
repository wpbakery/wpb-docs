---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
id: vc_shortcode_content_filter
title: vc_shortcode_content_filter
sidebar_label: vc_shortcode_content_filter
sidebar_position: 2
slug: /hooks/filters/vc_shortcode_content_filter
---

# vc_shortcode_content_filter

Filter the output of elements before it is rendered in the shortcode template.

```php
add_filter('vc_shortcode_content_filter', 'wpb_add_wrapper_to_shortcode_output', 10, 3);
/**
 * Add a wrapper to the output of the vc_separator shortcode.
 *
 * @param string $output The output of the shortcode.
 * @param string $shortcode_tag The shortcode tag.
 * @param array $prepared_atts The prepared attributes for the shortcode.
 * @return string Modified output with a wrapper.
 */
function wpb_add_wrapper_to_shortcode_output( $output, $shortcode_tag, $prepared_atts ) {
    if ( isset( $prepared_atts['width'] ) ) {
        $output .= '<div class="custom-wrap">' . $output . '</div>';
    }
    return $output;
}
```
