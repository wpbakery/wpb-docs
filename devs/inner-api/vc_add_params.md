---
sidebar_position: 3
---

# vc_add_params()

This helper function is similar to `vc_add_param()`, but it can accept multiple params that should be added to your content element.

Available SINCE 4.3

Basically this function will use a foreach loop for all the attributes and then `vc_add_param()` will be called for each single param. List of available [parameters](/docs/element-development/parameter-types).


```php
<?php vc_add_params( $shortcode, $attributes ); ?>
```

## Parameters

### $shortcode

* Type - String
* Description - Shortcode base. For `[my_shortcode]` shortcode base is `my_shortcode`. For default "Message box" element, base is `vc_message`.
* Example:
```php
$shortcode = 'vc_message';
```
### $attributes
* Type - Array
* Description - Multidimensional array should be defined according to [`vc_map()` available options](/docs/element-development/parameter-types).
* Example:
```php
$attributes = array(
    array(
        'type' => 'dropdown',
        'heading' => "Style",
        'param_name' => 'style',
        'value' => array( "one", "two", "three" ),
        'description' => __( "New style attribute", "my-text-domain" )
    ),
    array(
        'type' => 'dropdown',
        'heading' => "Another Style",
        'param_name' => 'another_style',
        'value' => array( "four", "five", "six" ),
        'description' => __( "New style attribute", "my-text-domain" )
    )
);
```

## Example
How to add new attribute to the default "Message box" content element:

```php
<?php
$attributes = array(
    array(
        'type' => 'dropdown',
        'heading' => "Style",
        'param_name' => 'style',
        'value' => array( "one", "two", "three" ),
        'description' => __( "New style attribute", "my-text-domain" )
    ),
    array(
        'type' => 'dropdown',
        'heading' => "Another Style",
        'param_name' => 'another_style',
        'value' => array( "four", "five", "six" ),
        'description' => __( "New style attribute", "my-text-domain" )
    )
);
vc_add_params( 'vc_message', $attributes ); // Note: 'vc_message' was used as a base for "Message box" element
?>
```
