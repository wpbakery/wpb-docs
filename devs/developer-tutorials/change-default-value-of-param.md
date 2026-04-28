---
id: change-default-value-of-param
title: Change default value of param
sidebar_label: Change default value of param
sidebar_position: 12
hide_table_of_contents: true
slug: /developer-tutorials/change-default-value-of-param
---

# Change default value of param

It is possible to change default value of existing params.

```php
<?php
add_action('vc_after_init', function() {
 $newParamData = [
 'type' => 'textfield',
 'heading' => __( 'Image size', 'js_composer' ),
 'param_name' => 'img_size',
 'value' => 'full', // New default value
 'description' => __( 'Enter image size (Example: "thumbnail", "medium", "large", "full" or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height)).', 'js_composer' ),
 'dependency' => [
 'element' => 'source',
 'value' => [ 'media_library', 'featured_image' ],
 ],
 ]; 
 
 vc_update_shortcode_param( 'vc_single_image', $newParamData );
}
);
```
