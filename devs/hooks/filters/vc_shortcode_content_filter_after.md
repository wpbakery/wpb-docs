---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
id: vc_shortcode_content_filter_after
title: vc_shortcode_content_filter_after
sidebar_label: vc_shortcode_content_filter_after
sidebar_position: 3
slug: /hooks/filters/vc_shortcode_content_filter_after
---

# vc_shortcode_content_filter_after

Filter the output of elements after it is rendered in the shortcode template.

```php
add_filter('vc_shortcode_content_filter_after', 'wpb_add_wrapper_to_shortcode_output', 10, 4);
/**
 * Add a wrapper to the output of the vc_separator shortcode.
 *
 * @param string $output The output of the shortcode.
 * @param array $prepared_atts The prepared attributes for the shortcode.
 * @param string $shortcode_tag The shortcode tag.
 * @param string $content The content inside the shortcode.
 * @return string Modified output with a wrapper.
 */
function wpb_add_wrapper_to_shortcode_output( $output, $shortcode_tag, $prepared_atts, $content ) {
    if ( isset( $prepared_atts['width'] ) ) {
        $output .= '<div class="custom-wrap">' . $output . '</div>';
    }

    return $output;
}
```
