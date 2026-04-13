---
id: adding-custom-shortcode-to-grid-builder
title: Adding custom shortcode to grid builder
sidebar_label: Adding custom shortcode to grid builder
sidebar_position: 9
hide_table_of_contents: true
slug: /developers-how-tos/adding-custom-shortcode-to-grid-builder
---

# Adding custom shortcode to grid builder

Starting from WPBakery Page Builder 4.6.0 it is allowed to add shortcodes to WPBakery Page Builder Grid Builder by appending them to Grid Builder shortcodes list. The list can be modified by filter **'vc_grid_item_shortcodes'**.

Simple shortcode example:

```php
<?php
add_filter( 'vc_grid_item_shortcodes', 'my_module_add_grid_shortcodes' );
function my_module_add_grid_shortcodes( $shortcodes ) {
 $shortcodes['vc_say_hello'] = [
 'name' => __( 'Say Hello', 'my-text-domain' ),
 'base' => 'vc_say_hello',
 'category' => __( 'Content', 'my-text-domain' ),
 'description' => __( 'Just outputs Hello World', 'my-text-domain' ),
 'post_type' => Vc_Grid_Item_Editor::postType(),
 ];
 return $shortcodes;
}

add_shortcode( 'vc_say_hello', 'vc_say_hello_render' );
function vc_say_hello_render() {
 return '<h2>Hello, World!</h2>';
}
```

## Template variables usage

Sometimes it is necessary to get extra data from post or function, to implement this we use templates data: `{{ your_variable:attributes }}`

There are predefined template variables available, example custom shortcode that displays post ID.

```php
<?php
add_filter( 'vc_grid_item_shortcodes', 'my_module_add_grid_shortcodes' );
function my_module_add_grid_shortcodes( $shortcodes ) {
 $shortcodes['vc_post_id'] = [
 'name' => __( 'Post id', 'my-text-domain' ),
 'base' => 'vc_post_id',
 'category' => __( 'Content', 'my-text-domain' ),
 'description' => __( 'Show current post id', 'my-text-domain' ),
 'post_type' => Vc_Grid_Item_Editor::postType(),
 ];


 return $shortcodes;
}

// output function
add_shortcode( 'vc_post_id', 'vc_post_id_render' );
function vc_post_id_render() {
 return '<h2>{{ post_data:ID }}</h2>'; // usage of template variable post_data with argument "ID"
}
```

## Post data template variable

In **'vc_post_id_render'** function used template variable post_data:ID, it will be automatically replaced by current WP_Post $post object variable.

```php
WP_Post::__set_state([
 'ID' => 69,
 'post_author' => '1',
 'post_date' => '2015-04-29 14:15:56',
 'post_date_gmt' => '2015-04-29 14:15:56',
 'post_content' => 'Your post content',
 'post_title' => 'Your post title',
 'post_excerpt' => '',
 'post_status' => 'publish',
 'comment_status' => 'open',
 'ping_status' => 'open',
 'post_password' => '',
 'post_name' => 'post name',
 'to_ping' => '',
 'pinged' => '',
 'post_modified' => '2015-06-17 11:18:41',
 'post_modified_gmt' => '2015-06-17 11:18:41',
 'post_content_filtered' => '',
 'post_parent' => 0,
 'guid' => 'http://wp.master/?p=69',
 'menu_order' => 0,
 'post_type' => 'post',
 'post_mime_type' => '',
 'comment_count' => '0',
 'filter' => 'raw',
 'filter_terms' =>
 array (
 ),
]);
```

## Custom template variable

To create custom template variable used filters, called: **'vc_gitem_template_attribute_[your_variable]'**

Featured image template variable example:

```php
add_filter( 'vc_gitem_template_attribute_featured_image', 'vc_gitem_template_attribute_featured_image', 10, 2 );

function vc_gitem_template_attribute_featured_image( $value, $data ) {
 /**
 * @var Wp_Post $post
 * @var string $data
 */
 extract( array_merge( [
 'post' => null,
 'data' => ''
 ], $data ) );

 // return a template for featured_image variable
 return vc_include_template( 'params/vc_grid_item/attributes/featured_image.php', [
 'post' => $post,
 'data' => $data
 ] );
}
```

And template content:

```php
<?php
$atts = [];
parse_str( $data, $atts );
$output = $el_class = $image = $img_size = $img_link = $img_link_target = $img_link_large = $title = $alignment = $css_animation = $css = '';
$image_string = '';
extract( shortcode_atts( [
 'title' => '',
 'image' => $image,
 'img_size' => 'full',
 'link' => '',
 'img_link_target' => '_self',
 'alignment' => 'left',
 'el_class' => '',
 'css_animation' => '',
 'style' => '',
 'border_color' => '',
 'css' => ''
], $atts ) );
require_once vc_path_dir( 'SHORTCODES_DIR', 'vc-single-image.php' );
$img_class = new WPBakeryShortCode_VC_Single_image( [ 'base' => 'vc_single_image' ] );
// similar logic as vc_single_image
$style = ( $style != '' ) ? $style : '';
$border_color = ( $border_color != '' ) ? ' vc_box_border_' . $border_color : '';

$img_id = get_post_thumbnail_id( $post->ID );
$img = wpb_getImageBySize( [
 'attach_id' => $img_id,
 'thumb_size' => $img_size,
 'class' => 'vc_single_image-img'
] );
$img = apply_filters( 'vc_gitem_attribute_featured_image_img', $img );
if ( null === $img || false === $img ) {
 return $output;
}
$el_class = $img_class->getExtraClass( $el_class );
$link = vc_gitem_create_link_real( $atts, $post, '', $title );

$img_output = ( $style == 'vc_box_shadow_3d' ) ? '<span class="vc_box_shadow_3d_wrap">' . $img['thumbnail'] . '</span>' : $img['thumbnail'];
$image_string = ! empty( $link ) ? '<' . $link . '><div class="vc_single_image-wrapper ' . $style . ' ' . $border_color . '">' . $img_output . '</div></a>' : '<div class="vc_single_image-wrapper ' . $style . ' ' . $border_color . '">' . $img_output . '</div>';
$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, 'wpb_single_image wpb_content_element' . $el_class . vc_shortcode_custom_css_class( $css, ' ' ), $img_class->settings( 'base' ), $atts );
$css_class .= $img_class->getCSSAnimation( $css_animation );

$css_class .= ' vc_align_' . $alignment;

$output .= "\n\t" . '<div class="' . $css_class . '">';
$output .= "\n\t\t" . '<div class="wpb_wrapper">';
$output .= "\n\t\t\t" . $image_string;
$output .= "\n\t\t" . '</div> ' . $img_class->endBlockComment( '.wpb_wrapper' );
$output .= "\n\t" . '</div> ' . $img_class->endBlockComment( '.wpb_single_image' );

return $output;
?>
```

## Featured Image shortcode

After template variable it is possible to create custom shortcode. Use filter **'vc_grid_item_shortcodes'** and template variable 'featured_image'.

```php
<?php
add_filter( 'vc_grid_item_shortcodes', 'my_module_add_grid_shortcodes' );
function my_module_add_grid_shortcodes( $shortcodes ) {
 global $vc_gitem_add_link_param;
 global $vc_add_css_animation;
 $shortcodes['vc_gitem_image'] = [
 'name' => __( 'Post Image', 'js_composer' ),
 'base' => 'vc_gitem_image',
 'icon' => 'vc_icon-vc-gitem-image',
 'category' => __( 'Post', 'js_composer' ),
 'description' => __( 'Featured image', 'js_composer' ),
 'params' => [
 $vc_gitem_add_link_param,
 [
 'type' => 'vc_link',
 'heading' => __( 'URL (Link)', 'js_composer' ),
 'param_name' => 'url',
 'dependency' => [
 'element' => 'link',
 'value' => [ 'custom' ]
 ],
 'description' => __( 'Add custom link.', 'js_composer' ),
 ],
 [
 'type' => 'textfield',
 'heading' => __( 'Image size', 'js_composer' ),
 'param_name' => 'img_size',
 'description' => __( 'Enter image size (Example: "thumbnail", "medium", "large", "full" or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height)). Leave parameter empty to use "thumbnail" by default.', 'js_composer' )
 ],
 [
 'type' => 'dropdown',
 'heading' => __( 'Image alignment', 'js_composer' ),
 'param_name' => 'alignment',
 'value' => [
 __( 'Left', 'js_composer' ) => '',
 __( 'Right', 'js_composer' ) => 'right',
 __( 'Center', 'js_composer' ) => 'center'
 ],
 'description' => __( 'Select image alignment.', 'js_composer' )
 ],
 [
 'type' => 'dropdown',
 'heading' => __( 'Image style', 'js_composer' ),
 'param_name' => 'style',
 'value' => getVcShared( 'single image styles' ),
 'description' => __( 'Select image display style.', 'js_comopser' )
 ],
 [
 'type' => 'dropdown',
 'heading' => __( 'Border color', 'js_composer' ),
 'param_name' => 'border_color',
 'value' => getVcShared( 'colors' ),
 'std' => 'grey',
 'dependency' => [
 'element' => 'style',
 'value' => [
 'vc_box_border',
 'vc_box_border_circle',
 'vc_box_outline',
 'vc_box_outline_circle'
 ]
 ],
 'description' => __( 'Border color.', 'js_composer' ),
 'param_holder_class' => 'vc_colored-dropdown'
 ],
 $vc_add_css_animation,
 [
 'type' => 'textfield',
 'heading' => __( 'Extra class name', 'js_composer' ),
 'param_name' => 'el_class',
 'description' => __( 'Style particular content element differently - add a class name and refer to it in custom CSS.', 'js_composer' )
 ],
 [
 'type' => 'css_editor',
 'heading' => __( 'CSS box', 'js_composer' ),
 'param_name' => 'css',
 // 'description' => __( 'Style particular content element differently - add a class name and refer to it in custom CSS.', 'js_composer' ),
 'group' => __( 'Design Options', 'js_composer' )
 ]
 ],
 'post_type' => Vc_Grid_Item_Editor::postType(),
 ];
 return $shortcodes;
}

add_shortcode( 'vc_gitem_image', 'vc_gitem_image_render' );
function vc_gitem_image_render( $atts ) {
 return '{{ featured_image:' . http_build_query( (array) $atts ) . ' }}';
}
```

## Post Meta usage

Example how to use Post meta with a template variable.

```php
<?php
add_filter( 'vc_grid_item_shortcodes', 'my_module_add_grid_shortcodes' );
function my_module_add_grid_shortcodes( $shortcodes ) {
 $shortcodes['vc_custom_post_meta'] = [
 'name' => __( 'My Custom Post meta', 'my-text-domain' ),
 'base' => 'vc_custom_post_meta',
 'category' => __( 'Content', 'my-text-domain' ),
 'description' => __( 'Show custom post meta', 'my-text-domain' ),
 'post_type' => Vc_Grid_Item_Editor::postType(),
 ];

 return $shortcodes;
}
// output function
add_shortcode( 'vc_custom_post_meta', 'vc_custom_post_meta_render' );
function vc_custom_post_meta_render($atts, $content, $tag) {
 return '{{ custom_meta }}';
}

add_filter( 'vc_gitem_template_attribute_custom_meta', 'vc_gitem_template_attribute_custom_meta ', 10, 2 );
function vc_gitem_template_attribute_custom_meta( $value, $data ) {
 /**
 * @var Wp_Post $post
 * @var string $data
 */
 extract( array_merge( [
 'post' => null,
 'data' => '',
 ], $data ) );

 return var_export( get_post_meta( $post->ID, 'my_custom_key' ), true );
}
```
