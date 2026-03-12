---
sidebar_position: 17
---

# vc_shortcodes_theme_templates_dir()

This function returns path to the folder where WPBakery Page Builder is looking for content element templates.

By default, it returns empty string, but if [`vc_set_shortcodes_templates_dir()`](/docs/inner-api/vc_set_shortcodes_templates_dir) was used previously, then custom directory path will be returned.
```php
<?php vc_shortcodes_theme_templates_dir( $template ); ?>
```

## Parameters

### $template

* Type - String
* Description - Content element template file name. For `[my_shortcode]` shortcode template file is *my_shortcode.php*. For default "Message box" element, template file name is *vc_message.php*.
* Example:
```php
$template = 'my_shortcode.php';
```

## Example
Get current custom templates directory path.

```php
<?php
$dir = get_stylesheet_directory() . '/vc_new_templates_dir'; // First, set new directory for templates
vc_set_shortcodes_templates_dir( $dir );

var_dump( vc_shortcodes_theme_templates_dir( 'vc_message.php' ) ); // Outputs full directory path for vc_message.php template
?>
```
