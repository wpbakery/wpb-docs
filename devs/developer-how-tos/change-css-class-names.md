---
id: change-css-class-names
title: Change CSS Class Names in Output
sidebar_label: Change CSS Class Names in Output
sidebar_position: 11
hide_table_of_contents: true
slug: /developers-how-tos/change-css-class-names-in-output
---

# Change CSS Class Names in Output

SINCE 3.6

If you are a developer you may want to change class names that are used for default content elements in WPBakery Page Builder by default with help of WordPress filters.

Lets imagine that you are looking into the outputted markup, and you want to change some of the classes.

```php
<div class="vc_row wpb_row vc_row-fluid">
 <div class="vc_col-sm-6 wpb_column vc_column_container"> ... </div>
 <div class="vc_col-sm-6 wpb_column vc_column_container"> ... </div>
</div>
```

**Note:** From version 4.3.x we have changed class names to follow bootstrap 3 naming logic, but with prefix vc_. So `.wpb_row` became `.vc_row`, `.vc_spanX` became `.vc_col-{xs/sm/md/lg}-X`

To change *vc_row* to your own class name use this code snippet in your theme's `functions.php` file:

```php
// Filter to replace default css class names for vc_row shortcode and vc_column
add_filter( 'vc_shortcodes_css_class', 'custom_css_classes_for_vc_row_and_vc_column', 10, 2 );
function custom_css_classes_for_vc_row_and_vc_column( $class_string, $tag ) {
 if ( $tag == 'vc_row' || $tag == 'vc_row_inner' ) {
 $class_string = str_replace( 'vc_row-fluid', 'my_row-fluid', $class_string ); // This will replace "vc_row-fluid" with "my_row-fluid"
 }
 if ( $tag == 'vc_column' || $tag == 'vc_column_inner' ) {
 $class_string = preg_replace( '/vc_col-sm-(\d{1,2})/', 'my_col-sm-$1', $class_string ); // This will replace "vc_col-sm-%" with "my_col-sm-%"
 }
 return $class_string; // Important: you should always return modified or original $class_string
}
```

This piece of code will "filter" class names, inside of the *custom_css_classes_for_vc_row_and_vc_column*() function, with if statements you should check for what content element (shortocode) this filter is currently fired, and then, based on that check, perform actions to the text string containing class names. Eg. replace current class names (`str_replace`), append new class names and so on.

Since you have full control here, be careful. You should understand what you are doing because this will affect your site directly.
