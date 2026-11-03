---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_custom_onclick_elements

SINCE 9.1

Filters the list of element shortcode tags that can output custom `onclick` JavaScript. This covers the WPBakery Button and every element that integrates a button.

When a user whose role has no **unfiltered HTML** access saves a post, WPBakery checks every element in this list. If an element has a custom onclick attribute set, the whole element is removed from the content. Users with unfiltered HTML access are not affected.

An attribute counts as custom onclick when its name matches `(^|_)custom_onclick(_code)?$`. So the check catches both the element's own params (`custom_onclick`, `custom_onclick_code`) and the params of an integrated button with any prefix (`btn_custom_onclick`, `btn_custom_onclick_code`, `cta_btn_custom_onclick`, ...). For enclosing elements in the list, nested shortcodes inside their content are checked too.

If your custom element integrates the WPBakery Button (`wpb_btn`) through `vc_map_integrate_shortcode()`, add its tag with this filter. If you don't, users without unfiltered HTML access can add inline JavaScript to a page through your element's button.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$elements` | array | An indexed array of shortcode base tags that can output custom onclick JavaScript. Default includes `vc_btn`, `wpb_btn`, `vc_cta`, `vc_hoverbox`, `vc_pricing_table`, `vc_basic_grid`, `vc_media_grid`, `vc_masonry_grid`, and `vc_masonry_media_grid`. |

## Usage

```php
<?php
add_filter( 'wpb_custom_onclick_elements', 'my_custom_onclick_elements' );

function my_custom_onclick_elements( $elements ) {
    // Add a custom element that renders an integrated button
    $elements[] = 'my_promo_box';
    return $elements;
}
```

## Example: custom element with an integrated button

The example below registers a **Promo Box** element. It has a title, a text, and a full WPBakery Button integrated with the `btn_` prefix. Because the integrated button brings the **Onclick action** and **On click code** params with it (saved as `btn_custom_onclick` and `btn_custom_onclick_code`), the element is registered with `wpb_custom_onclick_elements`. Add the code to your theme's `functions.php` file.

```php
/**
 * Map the element in WPBakery.
 *
 * Use "vc_after_init": the default elements, including wpb_btn, are mapped
 * by then. On "vc_before_init" vc_map_integrate_shortcode() returns an empty array.
 */
add_action( 'vc_after_init', 'my_promo_box_map' );

function my_promo_box_map() {
    // Integrate all WPBakery Button params with the "btn_" prefix.
    // This includes "custom_onclick" and "custom_onclick_code",
    // which become "btn_custom_onclick" and "btn_custom_onclick_code".
    $button_params = vc_map_integrate_shortcode(
        'wpb_btn',
        'btn_',
        esc_html__( 'Button', 'my-textdomain' ),
        [
            'exclude' => [ 'css' ],
        ],
        [
            'element'   => 'add_button',
            'not_empty' => true,
        ]
    );

    vc_map( [
        'name'     => esc_html__( 'Promo Box', 'my-textdomain' ),
        'base'     => 'my_promo_box',
        'category' => esc_html__( 'My Elements', 'my-textdomain' ),
        'params'   => array_merge(
            [
                [
                    'type'        => 'textfield',
                    'heading'     => esc_html__( 'Title', 'my-textdomain' ),
                    'param_name'  => 'title',
                    'admin_label' => true,
                ],
                [
                    'type'       => 'textarea_html',
                    'heading'    => esc_html__( 'Text', 'my-textdomain' ),
                    'param_name' => 'content',
                ],
                [
                    'type'       => 'checkbox',
                    'heading'    => esc_html__( 'Add button', 'my-textdomain' ),
                    'param_name' => 'add_button',
                    'value'      => [ esc_html__( 'Yes', 'my-textdomain' ) => 'yes' ],
                ],
            ],
            $button_params
        ),
    ] );
}

/**
 * Render the element.
 */
add_action( 'init', 'my_promo_box_register_shortcode' );

function my_promo_box_register_shortcode() {
    add_shortcode( 'my_promo_box', 'my_promo_box_render' );
}

function my_promo_box_render( $atts, $content = '' ) {
    // Fill all mapped params with their defaults, including the integrated "btn_*" ones.
    // WPBakery doesn't save params left at their default value, so without this
    // a button with default settings has no "btn_*" attributes and is not rendered.
    $atts = vc_map_get_attributes( 'my_promo_box', $atts );

    $output  = '<div class="my-promo-box">';
    $output .= '<h3 class="my-promo-box__title">' . esc_html( $atts['title'] ) . '</h3>';
    $output .= '<div class="my-promo-box__text">' . wpb_js_remove_wpautop( $content, true ) . '</div>';

    if ( ! empty( $atts['add_button'] ) ) {
        // Collect the "btn_*" attributes and pass them to wpb_btn without the prefix.
        $button_atts = vc_map_integrate_parse_atts( 'my_promo_box', 'wpb_btn', $atts, 'btn_' );
        $button      = wpbakery()->getShortCode( 'wpb_btn' );

        if ( $button_atts && is_object( $button ) ) {
            $output .= '<div class="my-promo-box__actions">' . $button->render( array_filter( $button_atts ) ) . '</div>';
        }
    }

    $output .= '</div>';

    return $output;
}

/**
 * Let WPBakery strip the element when a user without unfiltered HTML
 * access saves it with a custom onclick on its integrated button.
 */
add_filter( 'wpb_custom_onclick_elements', 'my_promo_box_custom_onclick_elements' );

function my_promo_box_custom_onclick_elements( $elements ) {
    $elements[] = 'my_promo_box';
    return $elements;
}
```

:::note
The check runs only when content is saved (`content_save_pre`). It does not change content that is already stored in the database. An administrator can give a role unfiltered HTML access in **WPBakery Page Builder > Role Manager**.
:::

:::tip
Integrate the button with a prefix that ends with an underscore (for example, `btn_` or `promo_btn_`). The check matches attribute names by the `_custom_onclick` suffix, so a prefix like `btn` (`btncustom_onclick`) is not detected.
:::

## Source

File: `include/classes/core/class-vc-post-admin.php`
