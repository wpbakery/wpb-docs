---
sidebar_position: 16
---

# vc_set_shortcodes_templates_dir()

To override directory where WPBakery Page Builder should look for template files for content elements call `vc_set_shortcodes_templates_dir()` function from your *functions.php* file.

By default, WPBakery Page Builder is looking for template files in this order:

1. *js_composer/include/templates/shortcodes/%shortcode_base%.php*
2. *%active wp theme%/vc_templates/%shortcode_base%.php*
3. If it fails to find template file you will see a PHP notice. "Notice: Template file is missing for `%shortcode_base%` shortcode. Make sure you have `wp-content/themes/your_theme/vc_templates/%shortcode_base%.php` file in your theme folder".

```php
<?php vc_set_shortcodes_templates_dir( $dir ); ?>
```

## Parameters

### $dir

* Type - String
* Description - New template directory path where WPBakery Page Builder should look for template files.
* Example:
```php
$dir = get_template_directory() . '/vc_templates/';
```

## Example
How to change default template directory where WPBakery Page Builder looks for content elements template files.

```php
<?php
$dir = get_stylesheet_directory() . '/vc_new_templates_dir';
vc_set_shortcodes_templates_dir( $dir );
?>
```
