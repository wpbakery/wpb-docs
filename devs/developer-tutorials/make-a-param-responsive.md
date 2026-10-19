---
id: make-a-param-responsive
title: Make a param responsive
sidebar_label: Make a param responsive
sidebar_position: 28
hide_table_of_contents: true
slug: /developer-tutorials/make-a-param-responsive
---

# Make a param responsive

Starting from version 9.1 a mapped param can hold a different value per device. Add `'responsive' => true` to the param in your [vc_map()](/devs/inner-api/vc_map) call and the element edit window will show one field per device.

Two shared definitions already carry the flag: `vc_config()->get_design_options_tab()` (Design Options) and `vc_config()->get_css_animation()` (CSS animation). A `css_editor` or `css_animation` param written by hand needs it like any other param.

## Param mapping

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( [
  'name' => __( 'Bar tag test', 'my-text-domain' ),
  'base' => 'bartag',
  'params' => [
   [
    'type' => 'textfield',
    'heading' => __( 'Height', 'my-text-domain' ),
    'param_name' => 'height',
    'value' => '300',
    'responsive' => true,
   ],
  ],
 ] );
}
class WPBakeryShortCode_Bartag extends WPBakeryShortCode {
}
```

When a device is selected in the navigation bar with "Apply styles only for selected device type" enabled, the edit window shows the field of that device, marked with a device icon.

## Saved values

The main param keeps its attribute and each device gets one more, named after it and the device key:

| Device | Attribute |
|-------------------|-------------------|
| Main param | `height` |
| Desktop | `height_wpb_xl` |
| Tablet horizontal | `height_wpb_lg` |
| Tablet vertical | `height_wpb_md` |
| Mobile horizontal | `height_wpb_sm` |
| Mobile vertical | `height_wpb_xs` |

Device left empty uses the value of the main param, and a device value equal to it is not stored. Pages saved before 9.1 simply have no such attributes.

## HTML output

In the element template, `wpb_get_responsive_values( $atts, 'height' )` returns the device values that were set, keyed by device key. Pass them to `wpb_responsive()->params()->add_css()` with the selector the rules are written for: each value is wrapped in the media query of its device and the rules are printed once per page. The class the selector targets comes from `get_element_class( $atts )` and is added to the element class list by `$this->getExtraClass()`.

This is how the plugin outputs CSS animation per device, see `WPBakeryShortCode::getCSSAnimation()`. As the output lives in the template, a theme that [replaced it with its own copy](/devs/developer-tutorials/change-shortcodes-html-output) before you added it shows the main value on every device until the copy is updated.

**Note:** with "Apply styles only for selected device type" disabled, device-specific values are not used. They stay in the content until the main value is changed while the toggle is off, which removes them.
