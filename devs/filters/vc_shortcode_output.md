---
id: vc_shortcode_output
title: vc_shortcode_output
sidebar_label: vc_shortcode_output
sidebar_position: 4
slug: /filters/vc_shortcode_output
---

# vc_shortcode_output

Filter the output of WPBakery elements that were defined using the WPBakeryShortCode class.

```php
add_filter('vc_shortcode_output', 'wpb_add_wrapper_to_shortcode_output', 10, 4);
/**
 * Add a wrapper to the output of the vc_separator shortcode.
 *
 * @param string $output The output of the shortcode.
 * @param WPBakeryShortCode $wpb_shortcode The shortcode instance.
 * @param array $prepared_atts The prepared attributes for the shortcode.
 * @param string $shortcode_tag The shortcode tag.
 * @return string Modified output with a wrapper.
 */
function wpb_add_wrapper_to_shortcode_output( $output, $wpb_shortcode, $prepared_atts, $shortcode_tag ) {
    if ( $shortcode_tag === 'vc_separator' ) {
        $output .= '<div class="custom-wrap">' . $output . '</div>';
    }
    return $output;
}
```
