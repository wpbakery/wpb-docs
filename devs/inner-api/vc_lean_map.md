---
sidebar_position: 9
---

# vc_lean_map()

Map new shortcodes to WPBakery Page Builder with "lazy" method.

It means that attributes for shortcode will be built only when a system uses any data from mapped shortcode or shortcode is rendered in a content of the page(`do_shortcode` called).

```php
<?php vc_lean_map( $tag, $settings_function = null, $settings_file = null ) ?>
```

## Parameters

### $tag

* Type - String
* Description - Shortcode tag to be searched in post content.
* Example:
```php
$tag = 'vc_message';
```

### $settings_function

* Type - String
* Description - Callable function which returns an array of options for mapping. An array of options is the same as an array of options in `vc_map`. This function will be called only when element data is used.
* Example:
```php
$settings_function = 'my_shortcode_settings';
```

### $settings_file

* Type - String
* Description - Absolute path to the file which returns an array of options for mapping similar to `$settings_function` but via files include. An array option is the same as an array of options in `vc_map`. The file will be included only when element data is used. If `$settings_function` is provided this attribute is not used.
* Example:
```php
$settings_file = 'path/to/my_shortcode_settings.php';
```

## Example
Check if updates are disabled for WPBakery Page Builder when it is running in a "theme mode".


```php
<?php
// Theme functions.php

function vc_demo_element_settings() {
    return array(
        "name" => __("Vimeo", 'vc-my-plugin'),
        "base" => "vimeo",
        "class" => "",
        "category" => 'constructor',
        "params" => array(
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => __("Video id", 'vc-my-plugin'),
                "param_name" => "content",
                "description" => __("Enter vimeo video id.", 'vc-my-plugin')
            )
        )
    );
}

vc_lean_map('vc_demo_vimeo_element', 'vc_demo_element_settings');
?>

// Example with a file
// File data {theme-path}/vc/vc-demo-vimeo-element.php

<?php
return array(
    "name" => __( "Vimeo", 'vc-my-plugin' ),
    "base" => "vimeo",
    "class" => "",
    "category" => 'constructo',
    "params" => array(
        array(
            "type" => "textfield",
            "holder" => "div",
            "class" => "",
            "heading" => __( "Video id", 'vc-my-plugin' ),
            "param_name" => "content",
            "description" => __( "Enter vimeo video id.", 'vc-my-plugin' ),
        ),
    ),
);

// Theme file functions.php
vc_lean_map('vc_demo_vimeo_element', null, get_template_directory() . '/vc/vc-demo-vimeo-element.php');
?>
```
