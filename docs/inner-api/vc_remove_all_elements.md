---
sidebar_position: 22
---

# vc_remove_all_elements()

SINCE 4.5

```php
<?php vc_remove_all_elements() ?>
```

Remove all mapped shortcodes.

### Example

You can use vc_remove_all_elements() to remove all default WPBakery Page Builder shortcodes and create a clean environment where only your custom elements are available.

```php
<?php
add_action( 'vc_after_init', 'custom_override_vc_elements' );

function custom_override_vc_elements() {
    // Remove all default WPBakery elements
    vc_remove_all_elements();

    // Now register only your own elements
    vc_map( [
        'name' => __( 'Custom Button', 'your-text-domain' ),
        'base' => 'custom_button',
        'params' => [
            [
                'type' => 'textfield',
                'heading' => __( 'Button Text', 'your-text-domain' ),
                'param_name' => 'text',
                'value' => __( 'Click me', 'your-text-domain' ),
            ],
            [
                'type' => 'vc_link',
                'heading' => __( 'Button Link', 'your-text-domain' ),
                'param_name' => 'link',
            ],
        ],
    ] );

    add_shortcode( 'custom_button', function( $atts ) {
        $atts = shortcode_atts( [
            'text' => 'Click me',
            'link' => '',
        ], $atts, 'custom_button' );

        $link = vc_build_link( $atts['link'] );
        $url = isset( $link['url'] ) ? esc_url( $link['url'] ) : '#';

        return sprintf(
            '%2$s',
            $url,
            esc_html( $atts['text'] )
        );
    } );
}

?>
```
