---
sidebar_position: 25
---

# vc_map_integrate_shortcode()

SINCE 4.4.2

```php
<?php vc_map_integrate_shortcode($shortcode, $field_prefix = '', $group_prefix = '', $change_fields = null, $dependency = null)?>
```

Help integrate the existing shortcode element with another shortcode element.

### Params

| Param name | Type | Required | Description |
|---|---|---|---|
| $shortcode | Array\|String | Yes | Shortcode slug or shortcode data array. |
| $field_prefix | String | Yes | Prefix for a shortcode param name. We use it to differentiate our integrated params. |
| $group_prefix | String | Yes | Prefix for a shortcode param group name. We use it to differentiate our integrated params. |
| $change_fields | Array | No | We use it to include/exclude some shortcode params. |
| $dependency | Array | No | Dependency on another params. |

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
