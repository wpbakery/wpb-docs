---
sidebar_position: 13
---

# vc_remove_param()

To remove parameter from existing content element you can use `vc_remove_param()` function.

```php
<?php vc_remove_param( $shortcode, $attribute_name ); ?>
```

## Parameters

### $shortcode

* Type - String
* Description - Shortcode base. For `[my_shortcode]` shortcode base is `my_shortcode`. For default "Message box" element, base is `vc_message`.
* Example:
```php
$shortcode = 'my_shortcode';
```

### $attribute_name

* Type - String
* Description - Name of the [parameter](/docs/element-development/parameter-types) that should be removed from content element.
* Example:
```php
$attribute_name = 'custom_param';
```

## Example
If you wish to remove "Extra CSS class" from "Message box" content element, you should use this code.

```php
<?php
vc_remove_param( "vc_message", "el_class" );
// Note: 'vc_message' was used as a base for "Message box" element
?>
```
