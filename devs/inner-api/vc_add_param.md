---
sidebar_position: 2
---

# vc_add_param()

To add new parameter to existing content element you can use `vc_add_param()` function. List of available [parameters](/docs/element-development/parameter-types).

Available SINCE 4.3

```php
<?php vc_add_param( $shortcode, $attributes ); ?>
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
* Description - Array should be defined according to [`vc_map()` available options](/docs/element-development/parameter-types).
* Example:
```php
$attributes = array(
    'type' => 'textfield',
    'heading' => __( 'Custom Heading', 'my-text-domain' ),
    'param_name' => 'custom_param',
    'value' => '',
    'description' => __( 'This is a custom parameter for the vc_row shortcode.', 'my-text-domain' ),
);
```

## Example
How to add new attribute to the default "Message box" content element:

```php
<?php
$attributes = array(
  'type' => 'dropdown',
  'heading' => "Style",
  'param_name' => 'style',
  'value' => array( "one", "two", "three" ),
  'description' => __( "New style attribute", "my-text-domain" )
);
vc_add_param( 'vc_message', $attributes ); // Note: 'vc_message' was used as a base for "Message box" element
?>
```
Code explanation:

1. First we create array which "describes" new attribute that should be added to "Message box" element. **Note: during the initial `vc_map()` function call `vc_message` was used as a base attribute, base is required to properly "target" function call**
2. Then we call `vc_add_param()` function with new attribute and base
