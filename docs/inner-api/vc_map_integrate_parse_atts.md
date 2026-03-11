---
sidebar_position: 26
---

# vc_map_integrate_parse_atts()

SINCE 4.4.2

```php
<?php vc_map_integrate_parse_atts($base_shortcode, $integrated_shortcode, $atts, $field_prefix = '')?>
```

Parses and integrates attributes between two shortcodes.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $base_shortcode | String | Yes | Base shortcode slug. |
| $integrated_shortcode | String | Yes | Integrated shortcode slug. |
| $atts | Array | Yes | Shortcode attributes. |
| $field_prefix | String | No | The field prefix that we use to differentiate the integrated shortcode. |

### Example

You can create a new shortcode element ‘Copyright Update’ based on the existing ‘Copyright’ element and integrate a  ‘Button’ element shortcode into it.

```php
<?php
add_action( 'vc_after_init', 'custom_vc_after_init' );

function custom_vc_after_init() {
    $params = vc_get_shortcode( 'vc_copyright' );

    $params['name'] = 'Copyright Update';
    $params['base'] = 'copyright_update';
    $params['params'] = array_merge(
        $params['params'],
        vc_map_integrate_shortcode(
            'vc_btn',
            'btn_',
            esc_html__( 'Button', 'your-text-domain' ),
            [
                'exclude' => [ 'css' ],
            ]
        )
    );

    vc_map( $params );

    add_shortcode( 'copyright_update', function( $atts ) {

        $atts = vc_map_get_attributes( 'copyright_update', $atts );

        $style = vc_shortcode_custom_css_class( $atts['css'], ' ' );

        // Prepare button output
        $button_output = '';

        $custom_button         = wpbakery()->getShortCode( 'vc_btn' );
        $data                   = vc_map_integrate_parse_atts( 'copyright_update', 'vc_btn', $atts, 'btn_' );
        $button_output = $custom_button->render( array_filter( $data ) );

        return sprintf(
            '<div class="custom-copyright text-%1$s%2$s">%3$s %4$s %5$s</div>',
            esc_attr( $atts['align'] ),
            esc_attr( $style ),
            esc_html( $atts['prefix'] ),
            esc_html( $atts['postfix'] ),
            $button_output
        );
    } );
}
?>
```
