---
id: create-new-param-type
title: Create new param type
sidebar_label: Create new param type
sidebar_position: 15
hide_table_of_contents: true
slug: /developers-how-tos/create-new-param-type
---

# Create new param type

Sometimes you may need to add new attribute type for content element attributes. The vc_*add_shortcode_param()* function is used to register an attribute *type* handler which will form html markup for settings form in WPBakery Page Builder edit element form. It takes three parameters: the attribute type name (String used in [vc_map()](/devs/inner-api/vc_map) mapping function in type parameter), the callback function name and the javascript file absolute url.

```php
<?php
vc_add_shortcode_param( $name , $form_field_callback, $script_url );
```

## Params

| Param name | Type | Description |
|------------|------|-------------|
| $name | String | Required field.<br/>Param type name.<br/>Must contain only letters, digits and "_" symbol.<br/>Used in [vc_map()](/devs/inner-api/vc_map) mapping function in *type* parameter |
| $form_field_callback | String | Required field.<br/>The callback function name which will be called when settings form will be formed |
| $script_url | String | Optional field.<br/>Absolute url to javascript file |

## Creating callback function

Lets create callback function and register it with vc_*add_shortcode_param()* function call.

```php
<?php
vc_add_shortcode_param( 'my_param', 'my_param_settings_field' );
function my_param_settings_field( $settings, $value ) {
 return '<div class="my_param_block">'
 .'<input name="' . esc_attr( $settings['param_name'] ) . '" class="wpb_vc_param_value wpb-textinput ' .
 esc_attr( $settings['param_name'] ) . ' ' .
 esc_attr( $settings['type'] ) . '_field" type="text" value="' . esc_attr( $value ) . '" />' .
 '</div>'; // This is html markup that will be outputted in content elements edit form
}
```

## Callback function parameters

| Param name | Type | Description |
|------------|------|-------------|
| $settings | String | [Array of param settings](/devs/inner-api/vc_map) for content element settings |
| $value | String | Current attribute value.<br/>This maybe default value from [param Array](/devs/inner-api/vc_map) or user defined value |

**Important:** your param html markup should have class name "wpb_vc_param_value". This class is used by WPBakery Page Builder to identify what should be parsed upon saving.

Callback function should return string with html markup, which will represent form element with value. The form element can be any type of input field, select element or textarea. In the returned string you can also add additional html elements (such as buttons, links, etc), and then, control their functionality with external javascript file. In our example, function returns string with the input field and appropriate html markup for form styling (design).

Form element requires two attributes:

**name** – param_name of attribute from $settings array (which was passed to the [vc_map()](/devs/inner-api/vc_map) function)

**value** – current shortcode attribute value

To make sure that your custom param supports and works well with dependencies, that may be set by other params in [vc_map()](/devs/inner-api/vc_map) function call, make sure to call *vc_generate_dependencies_attributes( $settings )* function with the settings array. This is required to enable [Param Dependencies](/devs/inner-api/vc_map) for your attribute type.

## Extending and customizing attribute functionality

If you need some special visual elements or controls for your attribute you can use javascript. Last attribute of vc_*add_shortcode_param*() function is **$script_url** – which holds absolute url to javasript file and will be attached to the content element edit form in WPBakery Page Builder edit mode. This is very useful when you want to create complex content element params like color picker or image gallery, where javascript code should be executed.

As an example, lets create button which will flip text in input field (your custom attribute type).

Create new button after input field in callback function hook:

```php
vc_add_shortcode_param( 'my_param', 'my_param_settings_field' );
function my_param_settings_field( $settings, $value ) {
 return '<div class="my_param_block">'
 .'<input name="' . esc_attr( $settings['param_name'] ) . '" class="wpb_vc_param_value wpb-textinput ' .
 esc_attr( $settings['param_name'] ) . ' ' .
 esc_attr( $settings['type'] ) . '_field" type="text" value="' . esc_attr( $value ) . '" />'
 .'</div>'
 .'<button class="flip-input-text">Flip</button>'; // New button element
}
```

Pay attention to the "flip-input-text" class name of our button. We will use it in our javascript function call. Create js file in *`{my_theme_path}/vc_extend/flip.js`*. Open *flip.js* file and place javascript code required for "flip" functionality there. For this example we will use jQuery library.

```js
!function($) {
 $('#vc_properties-panel .flip-input-text').click(function(e){
 e.preventDefault();
 var $input = $(this).prev().find('.my_param_field'),
 text = $input.val();
 $input.val(text.split("").reverse().join(""));
 });
}(window.jQuery);
```

Visual Composer settings form is stored in the div with **#wpb-elements-list-modal** used as ID. To illuminate possible CSS class names intersection, we scoped this ID in the jQuery selector.

To attach this script to the settings form, we should add new param to the vc_*add_shortcode_param()* function call.

```php
vc_add_shortcode_param('my_param', 'my_param_settings_field', get_template_directory_uri().'/vc_extend/flip.js');
```

That it's! Now you can use this field in [vc_map()](/devs/inner-api/vc_map) function. Here is example with the new param added to the "params" array using our custom attribute type:

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( [
 "name" => __( "Bar tag test", "my-text-domain" ),
 "base" => "bartag",
 "class" => "",
 "category" => __( 'Content', 'my-text-domain' ),
 "params" => [
 [
 "type" => "my_param",
 "holder" => "div",
 "class" => "",
 "heading" => __("Flipping text", "js_composer"),
 "param_name" => "fliping_text",
 "value" => '',
 "description" => __( "Enter text and flip it", 'my-text-domain' ),
 ],
 ],
 ] );
}
```
