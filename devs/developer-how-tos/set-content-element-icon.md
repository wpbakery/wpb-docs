---
id: set-content-element-icon
title: Set content element icon
sidebar_label: Set content element icon
sidebar_position: 25
hide_table_of_contents: true
slug: /developers-how-tos/set-content-element-icon
---

# Set content element icon

WPBakery Page Builder content element's icon is visible in the available content elements list and is shown when the user clicks "Add element" button in the WPBakery Page Builder interface.

To add your icon you can simply pass icon url in "icon" attribute when you call [vc_map()](/devs/inner-api/vc_map) function. Another option is to assign class name for your item and then in your own css file add required css rules to style your element. Define "icon" param in the [vc_map()](/devs/inner-api/vc_map) function call ("mapping"). "icon" param should store CSS class name, which will be later used in your css file as a CSS selector (for targeting). Or another option is to simply provide URL of your icon.

## Creating your own icon with CSS

For example, you have created a new custom content element and with help of [vc_map()](/devs/inner-api/vc_map) function added it to the WPBakery Page Builder editor. Now you may want your element to have a fancy custom icon (Note: Icon file format should be png or gif with transparent background). Save this icon somewhere in your theme's folder.

Now open css file that you defined in "admin_enqueue_css" param in [vc_map()](/devs/inner-api/vc_map) function call, and add CSS rule for your content element.

```css
/*
Change icon in the "Add element" content elements list
Note: path to the icon file should be relative to the css file where you place your css rules (this file)
*/
.wpb-layout-element-button[data-element=bartag] .vc_element-icon {
 background-image: url(`{you_theme_url}`/vc_extend/my_shortcode_icon.png);
}
/*
Change icon in the Visual Composer page schematic representation (backend).
*/
.wpb_bartag .vc_element-icon {
 background-image: url(`{you_theme_url}`/vc_extend/my_shortcode_icon.png);
}
/*
Alternatively, if you specified class name in the "icon" attribute during the vc_map() function call, you can use this selector instead:
".my_bartag.vc_element-icon" where my_bartag is value passed to the "icon" attribute.

This example will change icon of your content element in both: "Add element" window and backend schematic representation, so you can use just one css rule instead.
*/
.my_bartag.vc_element-icon {
 background-image: url(`{you_theme_url}`/vc_extend/my_shortcode_icon.png);
}
```

In order to make 3) css snippet to work properly you should add "icon" param to the [vc_map()](/devs/inner-api/vc_map) function call and pass "my_bartag" as a value.

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( [
 "name" => __( "Bar tag test", "my-text-domain" ),
 "base" => "bartag",
 "class" => "",
 "icon" => "my_bartag", // New param added
 "category" => __( "Content", "my-text-domain"),
 'admin_enqueue_css' => [ get_template_directory_uri() . '/vc_extend/vc.css' ],
 "params" => [
 [
 "type" => "textfield",
 "holder" => "div",
 "class" => "",
 "heading" => __( "Text", "my-text-domain" ),
 "param_name" => "foo",
 "value" => __( "Default param value", "my-text-domain" ),
 "description" => __( "Description for foo param.", "my-text-domain" ),
 ],
 ],
 ] );
}
```

## Add custom icon with url to your image

Another way of adding an icon to your content element, doesn't require a CSS file with CSS rules from you, and instead, you can simply pass url to your icon image and it will be added automatically to the "Add element" window and schematic backend interface. Please see example below:

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( [
 "name" => __( "Bar tag test", "my-text-domain" ),
 "base" => "bartag",
 "class" => "",
 "icon" => get_template_directory_uri() . "/vc_extend/my_shortcode_icon.png", // Simply pass url to your icon here
 "category" => __( "Content", "my-text-domain"),
 'admin_enqueue_css' => [ get_template_directory_uri() . '/vc_extend/vc.css' ],
 "params" => [
 [
 "type" => "textfield",
 "holder" => "div",
 "class" => "",
 "heading" => __( "Text", "my-text-domain" ),
 "param_name" => "foo",
 "value" => __( "Default param value", "my-text-domain" ),
 "description" => __( "Description for foo param.", "my-text-domain" ),
 ],
 ],
 ] );
}
```
