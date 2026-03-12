---
id: how-to-create-custom-element
title: How To Create Custom Element
sidebar_label: How To Create Custom Element
sidebar_position: 4
hide_table_of_contents: true
slug: /developers-how-tos/how-to-create-custom-element
---

# How To Create Custom Element

One of the strongest sides of WPBakery is its extensibility.

Adding a new custom element through a theme or plugin is extremely easy.

You just need to remember that all elements in WPBakery are [WordPress shortcodes](https://codex.wordpress.org/Shortcode). You can always view/add/edit them in your post content as regular shortcodes.

WPBakery simply provides a convenient interface in its front/back editors to edit the attributes of these shortcodes.

To add an existing shortcode as a new WPBakery element, you can use the helper function [vc_map()](/docs/inner-api/vc_map).

Below are the most common examples showing how to create a new custom WPBakery element, from the most basic to the advanced ones.

By adding their code to your plugin or the functions.php file of your active theme, you will get a new custom WPBakery element.

All the examples shown can be found in the [GitHub repository](https://github.com/wpbakery/dev-example).

## 1. Most Basic Element

Define a new shortcode.

```php
add_shortcode( 'wpb_dev_example_basic_element', 'wpb_dev_example_basic_shortcode' );
if ( ! function_exists( 'wpb_dev_example_basic_shortcode' ) ) :
  /**
   * Shortcode handler for the custom box element.
   *
   * WPBakery uses regular WordPress shortcodes as the base output for its elements.
   *
   * @param array $atts
   * @param string $content
   * @return string
   */
  function wpb_dev_example_basic_shortcode( $atts, $content = '' ) {
    $atts = shortcode_atts([
      'text'       => 'Welcome to My Box',
      'content'    => '',
      'bg_color'   => '#f7f7f7',
      'text_color' => '#222222',
    ], $atts, 'custom_box');
    $style = 'background-color:' . esc_attr( $atts['bg_color'] ) . ';';
    $style .= 'color:' . esc_attr( $atts['text_color'] ) . ';';
    $style .= 'padding: 30px;';
    $style .= 'border-radius: 10px;';
    $style .= 'text-align: center;';
    $style .= 'box-shadow: 0 0 15px rgba(0,0,0,0.05);';
    $output = '<div style="' . $style . '">';
    if ( ! empty( $atts['text'] ) ) {
      $output .= '<h3 style="margin-bottom:15px;">' . esc_html( $atts['text'] ) . '</h3>';
    }
    if ( ! empty( $content ) ) {
      $output .= '<div style="font-size:16px;line-height:1.6;">' . wp_kses_post( $content ) . '</div>';
    }
    $output .= '</div>';
    return $output;
  }
endif;
```

The next step is to add the shortcode as a new WPBakery element.

We recommend using the `vc_before_init` WordPress action for this.

```php
add_action( 'vc_before_init', 'wpb_dev_example_basic_element' );
if ( ! function_exists( 'wpb_dev_example_basic_element' ) ) :
  /**
   * Registers a basic element with WPBakery.
   *
   * Here we specify all the parameters that help us see and edit the element in WPBakery editors.
   *
   * @see https://kb.wpbakery.com/docs/inner-api/vpb_map/ for all possible wpb_map parameters.
   */
  function wpb_dev_example_basic_element() {
    wpb_map([
      'name'        => __( 'Basic', 'wpb-dev-example' ),
      // base should be the same as the shortcode slug.
      'base'        => 'wpb_dev_example_basic_element',
      'description' => __( 'Box with title and content', 'wpb-dev-example' ),
      'category'    => __( 'Test Elements', 'wpb-dev-example' ),
      'params'      => [
        [
          'type'       => 'textfield',
          'heading'    => __( 'Title', 'wpb-dev-example' ),
          'param_name' => 'text',
          'value'      => __( 'Welcome to My Box', 'wpb-dev-example' ),
        ],
        [
          'type'       => 'textarea_html',
          'heading'    => __( 'Content', 'wpb-dev-example' ),
          'param_name' => 'content',
          'value'      => '<p>This is some example content. You can customize it using the WPBakery editor.</p>',
        ],
        [
          'type'       => 'colorpicker',
          'heading'    => __( 'Background Color', 'wpb-dev-example' ),
          'param_name' => 'bg_color',
          'value'      => '#f7f7f7',
        ],
        [
          'type'       => 'colorpicker',
          'heading'    => __( 'Text Color', 'wpb-dev-example' ),
          'param_name' => 'text_color',
          'value'      => '#222222',
        ],
      ],
    ]);
  }
endif;
```

## 2. With Custom PHP Class

If you need a custom calculation inside your shortcode output, in such cases, you can extend our WPBakeryShortCode class with your custom class.

As an option, you can render shortcode output inside the content() method of your custom class. And use other methods that WPBakeryShortCode provides to work with elements.

```php
add_action( 'vc_before_init', function () {
  require_once __DIR__ . '/custom-class.php';
  /**
   * Registers custom element in WPBakery with custom class.
   *
   * Here we specify all the parameters that help us see and edit the element in WPBakery editors.
   *
   * @see https://kb.wpbakery.com/docs/inner-api/wpb_map/ for all possible wpb_map parameters.
   */
  wpb_map([
    'name'        => __( 'With Custom Class', 'wpb-dev-example' ),
    'base'        => 'custom_pricing_box',
    'category'    => __( 'Test Elements', 'wpb-dev-example' ),
    'description' => __( 'Pricing box with discount logic that is calculated in php class.', 'wpb-dev-example' ),
    'params'      => [
      [
        'type'       => 'textfield',
        'heading'    => __( 'Title', 'wpb-dev-example' ),
        'param_name' => 'title',
        'value'      => __( 'Pro Plan', 'wpb-dev-example' ),
      ],
      [
        'type'       => 'textfield',
        'heading'    => __( 'Base Price ($)', 'wpb-dev-example' ),
        'param_name' => 'base_price',
        'value'      => '99',
      ],
      [
        'type'       => 'textfield',
        'heading'    => __( 'Discount (%)', 'wpb-dev-example' ),
        'param_name' => 'discount',
        'value'      => '10',
      ],
      [
        'type'       => 'textfield',
        'heading'    => __( 'Label', 'wpb-dev-example' ),
        'param_name' => 'label',
        'value'      => __( 'Best Value!', 'wpb-dev-example' ),
      ],
      [
        'type'       => 'colorpicker',
        'heading'    => __( 'Background Color', 'wpb-dev-example' ),
        'param_name' => 'bg_color',
        'value'      => '#ffffff',
      ],
      [
        'type'       => 'textarea_html',
        'value_type' => 'html',
        'heading'    => __( 'Features List', 'wpb-dev-example' ),
        'param_name' => 'content',
        'value'      => '<br />10 Projects<br />5 Team Members<br />Premium Support<br />',
      ],
    ],
  ]);
});


if ( class_exists( 'WPBakeryShortCode' ) ) {
  /**
   * Custom WPBakery element class.
   *
   * @note Class name always should start with WPBakeryShortCode_ prefix.
   * Another part of name should be the same as the base name of the element specified in wpb_map.
   * With appearance of underscores instead of dashes.
   *
   * @note you always should extend WPBakeryShortCode class to get all the necessary methods and properties.
   */
  class WPBakeryShortCode_Custom_Pricing_Box extends WPBakeryShortCode {
    /**
     * Calculate the final price after applying a discount.
     *
     * @param string $base_price
     * @param string $discount
     * @return float
     */
    public function calculate_discounted_price( $base_price, $discount ) {
      $base_price = floatval( $base_price );
      $discount = floatval( $discount );
      $final_price = $base_price - ( $base_price * $discount / 100 );
      return round( $final_price, 2 );
    }
    /**
     * Render the content of the custom pricing box.
     *
     * @param array $atts
     * @param string $content
     * @return string
     */
    public function content( $atts, $content = '' ) {
      $atts = shortcode_atts([
        'title'      => 'Pro Plan',
        'base_price' => '99',
        'discount'   => '10',
        'label'      => 'Best Value!',
        'bg_color'   => '#ffffff',
      ], $atts, 'custom_pricing_box');
      $final_price = $this->calculate_discounted_price( $atts['base_price'], $atts['discount'] );
      $style = 'background:' . esc_attr( $atts['bg_color'] ) . ';';
      $style .= 'border-radius:10px;padding:30px;text-align:center;';
      $style .= 'box-shadow:0 0 15px rgba(0,0,0,0.1);';
      $output = '<div class="custom-pricing-box" style="' . $style . '">';
      $output .= '<h2 style="margin-bottom:10px;">' . esc_html( $atts['title'] ) . '</h2>';
      $output .= '<p style="font-size:14px;color:#888;margin-bottom:20px;">' . esc_html( $atts['label'] ) . '</p>';
      $output .= '<div style="font-size:16px;color:#999;text-decoration:line-through;">$' . esc_html( $atts['base_price'] ) . '</div>';
      $output .= '<div style="font-size:28px;font-weight:bold;margin:10px 0 20px;">$' . esc_html( $final_price ) . '</div>';
      $output .= '<div style="text-align:left;">' . wp_kses_post( $content ) . '</div>';
      $output .= '</div>';
      return $output;
    }
  }
}
```

## 3. Element Inside Another Element

When you need one element inside another, you should use [nested shortcode techniques](https://codex.wordpress.org/Shortcode_API#Nested_Shortcodes). Please see [our article about container element](/docs/developer-how-tos/nested-shortcodes-container) which has an example of how to implement it.
