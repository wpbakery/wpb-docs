---
id: control-default-presets
title: Control Default Presets in Content Elements
sidebar_label: Control Default Presets in Content Elements
sidebar_position: 14
hide_table_of_contents: true
slug: /developers-how-tos/control-default-presets-in-content-elements
---

# Control Default Presets in Content Elements

SINCE 4.8

**This API is removed from version 5.0. Check [Element Presets](/docs/learning-more/element-presets-my-elements) for more information.**

To add custom preset to one of the WPBakery Page Builder content elements you should run *vc_register_settings_preset* action and pass new preset settings to it.

```php
<?php do_action( 'vc_register_settings_preset', $name, $element_base = String, $settings = array(), $default = Boolean ); ?>
```

## Params

| Param name | Type | Description |
|------------|------|-------------|
| $name | String | Name of new preset |
| $element_base | String | Shortcode base.<br/>For *[my_shortcode]* shortcode base is my_shortcode.<br/>For default "Message box" element, base is "vc_message" |
| $settings | Array | Array of param settings (values that should be applied after selecting preset) |
| $default | Boolean | Should preset be default (optional param, false by default) |

## Adding Preset

For plugins, you must do it after *vc_after_init* event has fired. For themes you call *do_action* directly from your *functions.php* file

```php
<?php
// For plugins
add_action('vc_after_init', 'your_prefix_add_presets');
function your_prefix_add_presets() {
 do_action( 'vc_register_settings_preset', 'First preset', 'vc_column_text', array(
 'content' => 'Content with some <b>bold</b> text. This is default preset',
 'el_class' => 'custom_classname',
 'css_animation' => ''
 ), true ); // This preset will be set as default if: a) this content element don't have default preset set yet. b) Prior to this action you reset default preset

 do_action( 'vc_register_settings_preset', 'Second preset', 'vc_column_text', array(
 'content' => 'Short and simple.'
 ), false );
}
?>
```

## Reset Default Preset

User's default presets take precedent over plugin/theme defaults. If you want to make sure your presets are default, you must reset user's defaults first. You **do it once (for each shortcode) on plugin/theme activation** by executing *vc_restore_default_settings_preset* action.

## Params

| Param name | Type | Description |
|------------|------|-------------|
| $presset_id | NULL | Always pass NULL |
| $element_base | String | Shortcode base.<br/>For *[my_shortcode]* shortcode base is my_shortcode.<br/>For default "Message box" element, base is "vc_message" |

### Example for Plugins

For plugins use *[register_activation_hook](https://codex.wordpress.org/Function_Reference/register_activation_hook)* hook in your main plugin file.

```php
<?php
// For plugins
register_activation_hook( __FILE__, 'myplugin_activate' );
function myplugin_activate() {
 // if user has set any preset as default for vc_column_text shortcode, restore it to non-default state
 do_action( 'vc_restore_default_settings_preset', null, 'vc_column_text' );
}
?>
```

### Example for Themes

For themes use *[after_switch_theme](http://codex.wordpress.org/Plugin_API/Action_Reference/after_switch_theme)* hook in your `functions.php` file.

```php
<?php
// For themes
add_action('after_switch_theme', 'mytheme_activate');
function mytheme_activate () {
 // if user has set any preset as default for vc_column_text shortcode, restore it to non-default state
 do_action( 'vc_restore_default_settings_preset', null, 'vc_column_text' );
}
?>
```
