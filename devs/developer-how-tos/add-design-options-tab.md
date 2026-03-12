---
id: add-design-options-tab
title: "Add \"Design Options\" Tab with CSS Editor to Your Element"
sidebar_label: "Add \"Design Options\" Tab with CSS Editor to Your Element"
sidebar_position: 6
hide_table_of_contents: true
slug: /developers-how-tos/add-design-options-tab-with-css-editor-to-your-element
---

# Add "Design Options" Tab with CSS Editor to Your Element

Adding CSS editor to your content element is very easy and it is a two steps process. First, map your attribute in [vc_map()](/docs/inner-api/vc_map) function call, then make sure you output it in your content element template file.

Map "css" param in your [vc_map()](/docs/inner-api/vc_map) function call:

## CSS param mapping

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( array(
  "name" => __( "Bar tag test", "my-text-domain" ),
  "base" => "bartag",
  "params" => array(
  array(
  'type' => 'css_editor',
  'heading' => __( 'Css', 'my-text-domain' ),
  'param_name' => 'css',
  'group' => __( 'Design options', 'my-text-domain' ),
  ),
  ),
 ) );
}
class WPBakeryShortCode_Bartag extends WPBakeryShortCode {
}
```

Very basic element, which has only one attribute available for edit and it's moved to separate "Design options" tab (group).

It's recommended, to extend `WPBakeryShortCode` class, that way you will have access to all default inbuilt methods and your content element will "blend" better with whole WPB system.

## HTML output

Now param value is saved, but you should also make sure to output correct css class name to your element's output. Have a look at the example below, to understand how it is done.

Copy paste this code to wp-content/themes/%your-theme%/vc_templates/bartag.php file. **Note:** we used `bartag` as a content elements base in `vc_map()` function call.

```php
<?php
$css = '';
extract(shortcode_atts(array(
  'css' => ''
), $atts));
$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ), $this->settings['base'], $atts );
?>
<div class="<?php echo esc_attr( $css_class ); ?>">
  I am bartag
</div><?php echo $this->endBlockComment('bartag'); ?>
```

Important part in this snippet is `vc_shortcode_custom_css_class()` function call, it is parsing `css` attribute and outputs its name in the element's html markup.
