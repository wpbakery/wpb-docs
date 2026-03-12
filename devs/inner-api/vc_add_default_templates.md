---
sidebar_position: 1
---

# vc_add_default_templates()

To add more predefined templates to the WPBakery Page Builder interface call `vc_add_default_templates()` function in your *function.php* file.

Predefined templates are available since WPBakery Page Builder 4.3 version. 

:::note
Note: `vc_add_default_templates()` should be hooked in `vc_load_default_templates_action` action.
:::

```php
    <?php vc_add_default_templates( $data ); ?>
```
## Parameters

### $data
* Type - Array
* Description - Array of templates to be added. Each template should have the following structure:
* Example:
```php
$data = array(
    'name' => 'My Custom Template',
    'content' => '<div class="my-template">This is my custom template content.</div>',
    'description' => 'A custom template for demonstration purposes.',
    'thumbnail' => 'http://example.com/path/to/my-thumbnail.jpg',
);
```

## Examples

Starting from WPBakery Page Builder version 4.3 you can select from [predefined started templates](https://kb.wpbakery.com/docs/learning-more/template-library) and you can modify that list to add more custom templates.

For example within your theme or third party addon for WPBakery Page Builder.

### Add new custom template
Hook in `vc_load_default_templates_action` to add your custom template to the list.

```php
<?php
add_action( 'vc_load_default_templates_action','my_custom_template_for_vc' ); // Hook in
 
function my_custom_template_for_vc() {
    $data = array(); // Create new array
    $data['name'] = __( 'Custom template', 'my-text-domain' ); // Assign name for your custom template
    $data['weight'] = 0; // Weight of your template in the template list
    $data['image_path'] = preg_replace( '/\s/', '%20', plugins_url( 'images/custom_template_thumbnail.jpg', __FILE__ ) ); // Always use preg replace to be sure that "space" will not break logic. Thumbnail should have this dimensions: 114x154px
    $data['custom_class'] = 'custom_template_for_vc_custom_template'; // CSS class name
    $data['content']  = <<<CONTENT
    <div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper">
    <div class="wpb_single_image wpb_content_element vc_align_left">
    
    <figure class="wpb_wrapper vc_figure">
      <div class="vc_single_image-wrapper   vc_box_border_grey"><img decoding="async" class="vc_img-placeholder vc_single_image-img" src="/img/ui/no_image.png"></div>
    </figure>
    </div>
    <div class="wpb_text_column wpb_content_element ">
    <div class="wpb_wrapper">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    </div>
    </div></div></div><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="vc_message_box vc_message_box-standard vc_message_box-rounded vc_color-alert-info"><div class="vc_message_box-icon"><i class="vc_pixel_icon vc_pixel_icon-info"></i></div><p>I am message box. Click edit button to change this text.</p>
    </div></div></div></div></div>
    CONTENT;
    
    vc_add_default_templates( $data );
}
?>
```

### Modify default templates
To modify default templates list you can use `vc_load_default_templates` hook and filter/modify array which stores default templates in it.

```php
<?php
add_filter( 'vc_load_default_templates', 'my_custom_template_modify_array' ); // Hook in

function my_custom_template_modify_array( $data ) {
    return array(); // This will remove all default templates. Basically you should use native PHP functions to modify existing array and then return it.
}
?>
```

Place your custom template to the first position
Here’s a quick example how you can place your new custom template to the first position in the array.

```php
<?php
add_filter( 'vc_load_default_templates', 'my_custom_template_at_first_position' ); // Hook in
 
function my_custom_template_at_first_position( $data ) {
    $template = array();
    $template['name'] = __( 'Custom template', 'my-text-domain' ); // Assign name for your custom template
    $template['image_path'] = preg_replace( '/\s/', '%20', plugins_url( 'images/custom_template_thumbnail.jpg', __FILE__ ) ); // Always use preg replace to be sure that "space" will not break logic. Thumbnail should have this dimensions: 114x154px.
    $template['custom_class'] = 'custom_template_for_vc_custom_template'; // CSS class name
    $template['content']  = <<<CONTENT
    <div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper">
    <div class="wpb_single_image wpb_content_element vc_align_left">
    
    <figure class="wpb_wrapper vc_figure">
      <div class="vc_single_image-wrapper   vc_box_border_grey"><img decoding="async" class="vc_img-placeholder vc_single_image-img" src="/img/ui/no_image.png"></div>
    </figure>
    </div>
    <div class="wpb_text_column wpb_content_element ">
    <div class="wpb_wrapper">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    </div>
    </div></div></div><div class="wpb_column vc_column_container vc_col-sm-6"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="vc_message_box vc_message_box-standard vc_message_box-rounded vc_color-alert-info"><div class="vc_message_box-icon"><i class="vc_pixel_icon vc_pixel_icon-info"></i></div><p>I am message box. Click edit button to change this text.</p>
    </div></div></div></div></div>
    CONTENT;
    
    array_unshift( $data, $template );
    return $data;
}
?>
```


