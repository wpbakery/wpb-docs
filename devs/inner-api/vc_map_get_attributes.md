---
sidebar_position: 20
---

# vc_map_get_attributes()

SINCE 4.6

```php
<?php vc_map_get_attributes($tag, $atts = []) ?>
```

Get all attributes and their default values of any element. With the second function parameter, you can also override in the final return any of the attribute values.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $tag | String | Yes | The base tag name of the element shortcode. |
| $atts | Array | No | The attribute list that needs to be overridden in the final return. |

### Example

You can get the ‘Copyright’ element default params, override the param ‘prefix’ with a new value, and create a new element ‘Copyright Update’ with new params.

```php
<?php
add_action( 'vc_after_init', 'register_custom_copyright_shortcode' );
function register_custom_copyright_shortcode() {
    vc_map( [
        'name' => __( 'Custom Copyright', 'your-text-domain' ),
        'base' => 'custom_copyright',
        'params' => [
            [
                'type' => 'textfield',
                'heading' => __( 'Prefix', 'your-text-domain' ),
                'param_name' => 'prefix',
                'value' => __( '©', 'your-text-domain' ),
            ],
            [
                'type' => 'textfield',
                'heading' => __( 'Postfix', 'your-text-domain' ),
                'param_name' => 'postfix',
                'value' => __( 'All rights reserved.', 'your-text-domain' ),
            ],
            [
                'type' => 'dropdown',
                'heading' => __( 'Alignment', 'your-text-domain' ),
                'param_name' => 'align',
                'value' => [
                    __( 'Left', 'your-text-domain' ) => 'left',
                    __( 'Center', 'your-text-domain' ) => 'center',
                    __( 'Right', 'your-text-domain' ) => 'right',
                ],
                'std' => 'center',
            ],
            [
                'type' => 'css_editor',
                'heading' => __( 'CSS', 'your-text-domain' ),
                'param_name' => 'css',
                'group' => __( 'Design Options', 'your-text-domain' ),
            ],
        ],
    ] );

    add_shortcode( 'custom_copyright', function( $atts ) {

        $atts['prefix'] = 'Prefix override';
        $atts = vc_map_get_attributes( 'custom_copyright', $atts );

        $style = vc_shortcode_custom_css_class( $atts['css'], ' ' );

        return sprintf(
            '<div class="custom-copyright text-%1$s%2$s">%3$s %4$s</div>',
            esc_attr( $atts['align'] ),
            esc_attr( $style ),
            esc_html( $atts['prefix'] ),
            esc_html( $atts['postfix'] )
        );
    } );
?>
```

### Code Explanation

We created a new “Copyright Custom” element based on a native “Copyright” element and overrode the “Prefix” param of it.
