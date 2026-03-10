---
id: vc_map
title: vc_map()
sidebar_label: vc_map()
sidebar_position: 11
slug: /inner-api/vc_map
---

To add your shortcode to the WPBakery Page Builder content elements list, *vc_map()* function should be called with an array of special attributes describing your shortcode.

```php
<?php vc_map( $params ); ?>
```

## Parameters

**$params** Associative array which holds instructions for WPBakery Page Builder and is used in "mapping" process.

| Param name | Type | Description |
|------------|------|-------------|
| name | String | Name of your shortcode for human reading inside element list |
| base | String | Shortcode tag. For *[my_shortcode]* shortcode base is my_shortcode |
| description | String | Short description of your element, it will be visible in "Add element" window |
| class | String | CSS class which will be added to the shortcode's content element in the page edit screen in WPBakery Page Builder backend edit mode |
| show_settings_on_create | Boolean | Set it to *false* if content element's settings page shouldn't open automatically after adding it to the stage |
| weight | Integer | Content elements with greater weight will be rendered first in "Content Elements" grid *(Available from WPBakery Page Builder 3.7 version)* |
| category | String | Category which best suites to describe the functionality of this shortcode. Default categories: Content, Social, Structure. You can add your own category, simply enter new category title here |
| group | String | Group your params in groups, they will be divided in tabs in the edit element window *(Available from WPBakery Page Builder 4.1)* |
| admin_enqueue_js | String\|Array | Absolute url to javascript file, this js will be loaded in the js_composer edit mode (it allows you to add more functionality to your shortcode in js_composer edit mode) |
| admin_enqueue_css | String\|Array | Absolute url to css file if you need to add custom css for element block in js_composer constructor mode |
| front_enqueue_js | String\|Array | Absolute url to javascript file (useful for storing your custom backbone.js views), this js will be loaded in the js_composer frontend edit mode (it allows you to add more functionality to your shortcode in js_composer frontend edit mode). *(Available from WPBakery Page Builder 4.2.2)* |
| front_enqueue_css | String\|Array | Absolute url to css file if you need to load custom css file in the frontend editing mode. *(Available from WPBakery Page Builder 4.2.2)* |
| icon | String | URL or CSS class with icon image. More info [here](/docs/developer-how-tos/set-content-element-icon) |
| custom_markup | String | Custom html markup for representing shortcode in visual composer editor |
| js_view | String | Set custom backbone.js view controller for this content element |
| html_template | String | Path to shortcode template. This is useful if you want to reassign path of existing content elements through your plugin. Another way to [change html markup](/docs/developer-how-tos/change-shortcodes-html-output) |
| deprecated | String | Enter version number from which content element will be deprecated. It will be moved to the "Deprecated" tab in "Add element" window and notification message will be shown on elements edit page. To hide element from "Add element" all together use 'content_element'=>false *(Available from WPBakery Page Builder 4.5)* |
| content_element | Boolean | If set to false, content element will be hidden from "Add element" window. It is handy to use this param in pair with 'deprecated' param *(Available from WPBakery Page Builder 4.5)* |
| params | Array | List of shortcode attributes. Array which holds your shortcode params, these params will be editable in shortcode settings page |

## params Array

Here you should describe all you shortcode's attributes that should be editable with WPBakery Page Builder interface. Each shortcode's attribute should be described in the separate array element.

Defining "Text" attribute:

```php
array(
  "type" => "textfield",
  "holder" => "div",
  "class" => "",
  "heading" => __( "Text", "my-text-domain" ),
  "param_name" => "foo",
  "value" => __( "This is test param for creating new project", "my-text-domain" ),
  "description" => __( "Enter foo.", "my-text-domain" )
)
```

### Parameters of params Array

| Param name | Type | Description |
|------------|------|-------------|
| type | String | Attribute type. In the "Available type values" table you can see all available variations |
| holder | String | HTML tag name where WPBakery Page Builder will store attribute value in WPBakery Page Builder edit mode. Default: hidden input |
| class | String | Class name that will be added to the "holder" HTML tag. Useful if you want to target some CSS rules to specific items in the backend edit interface |
| heading | String | Human friendly title of your param. Will be visible in shortcode's edit screen |
| param_name | String | Must be the same as your parameter name |
| value | Array or String | Default attribute's value |
| description | String | Human friendly description of your param. Will be visible in shortcode's edit screen |
| admin_label | Boolean | Show value of param in WPBakery Page Builder editor |
| dependency | Array | Define param visibility depending on other field value. Please read Param Dependencies |
| edit_field_class | String | Set param container width in content element edit window. According to Bootstrap logic eg. col-md-4. *(Available from WPBakery Page Builder 4.0)* |
| weight | Integer | Params with greater weight will be rendered first. *(Available from WPBakery Page Builder 4.4)* |
| group | String | Use it to divide your params within groups (tabs) |
| value_type | String | Specify whether the field is going to parse input value as html or text, for textfield and textarea type parameters. Available values are 'text' and 'html'. If value_type is not specified the default will be 'html'. |
| placeholder | String | Specify the field placeholder text, for textfield and textarea type parameters. |

#### Available type values

There are multiple attribute types available, this field is used to "tell" WPBakery Page Builder how to handle your attribute in content element edit screen.

**📚 For detailed documentation of each parameter type, see the [Parameter Types Reference](/docs/inner-api/vc-map-params/).**

### Quick Reference

| Type | Description | Documentation |
|------|-------------|---------------|
| [textfield](/docs/inner-api/vc-map-params/textfield) | Simple text input field | [View Details](/docs/inner-api/vc-map-params/textfield) |
| [textarea](/docs/inner-api/vc-map-params/textarea) | Multi-line text input area | [View Details](/docs/inner-api/vc-map-params/textarea) |
| [textarea_html](/docs/inner-api/vc-map-params/textarea_html) | WYSIWYG editor (**one per element**) | [View Details](/docs/inner-api/vc-map-params/textarea_html) |
| [dropdown](/docs/inner-api/vc-map-params/dropdown) | Dropdown select with options | [View Details](/docs/inner-api/vc-map-params/dropdown) |
| [checkbox](/docs/inner-api/vc-map-params/checkbox) | Single or multiple checkboxes | [View Details](/docs/inner-api/vc-map-params/checkbox) |
| [attach_image](/docs/inner-api/vc-map-params/attach_image) | Single image from media library | [View Details](/docs/inner-api/vc-map-params/attach_image) |
| [attach_images](/docs/inner-api/vc-map-params/attach_images) | Multiple images from media library | [View Details](/docs/inner-api/vc-map-params/attach_images) |
| [colorpicker](/docs/inner-api/vc-map-params/colorpicker) | Color picker for hex values | [View Details](/docs/inner-api/vc-map-params/colorpicker) |
| [iconpicker](/docs/inner-api/vc-map-params/iconpicker) | Icon picker from icon libraries | [View Details](/docs/inner-api/vc-map-params/iconpicker) |
| [param_group](/docs/inner-api/vc-map-params/param_group) | Repeatable parameter groups | [View Details](/docs/inner-api/vc-map-params/param_group) |
| [css_editor](/docs/inner-api/vc-map-params/css_editor) | Visual CSS editor (Design Options) | [View Details](/docs/inner-api/vc-map-params/css_editor) |
| [vc_link](/docs/inner-api/vc-map-params/vc_link) | Link builder with URL, title, target | [View Details](/docs/inner-api/vc-map-params/vc_link) |
| [autocomplete](/docs/inner-api/vc-map-params/autocomplete) | Input with autocomplete suggestions | [View Details](/docs/inner-api/vc-map-params/autocomplete) |
| [loop](/docs/inner-api/vc-map-params/loop) | WordPress query builder | [View Details](/docs/inner-api/vc-map-params/loop) |
| ... | **40+ parameter types available** | [View All Types](/docs/inner-api/vc-map-params/) |

:::tip
Each parameter type has its own dedicated documentation page with detailed examples, options, and best practices. Visit the [Parameter Types Reference](/docs/inner-api/vc-map-params/) to explore all available types.
:::

### Creating Custom Parameter Types

Attribute types can be extended with new custom types. Tutorial: [Create new param type](/docs/developer-how-tos/create-new-param-type)

## Param Dependencies

It is possible to link param with another param by defining dependency param. Dependency param is array with defined param name and values which will allow to display this linked param. Also it is possible to show param field if linked field is not empty and define callback function which will be called when value of linked element is changed. Next table contains field list and explanation of dependency param array keys.

| Key name | Type | Description |
|----------|------|-------------|
| element | String | Param name (linked field) which will be observed for changes. Must be the same as param_name param for shortcode attribute |
| value | Array | List of linked element's values which will allow to display param |
| not_empty | Boolean | Display field if value of linked field is not empty |
| callback | String | javascript function name. Function will be called when value of linked field is changed |
| value_includes | String | It helps handle fields that store comma-separated values, converting them into arrays on the frontend. For example, a custom sorter param saves item order as a string. This dependency rule enables dynamic visibility of settings based on enabled items. |

## Nested Content Elements

If you are looking for a way to create content elements with "nested" structure, [have a look at this example](/docs/developer-how-tos/nested-shortcodes-container).

## Example

In this example you will be guided throw the whole process of adding your own shortcode to the WPBakery Page Builder editor. We also prepared a nice and clean "starter" for you, feel free to use it as a starting point for your own WPBakery Page Builder shortcode.

### Add existing shortcode

For example you have your own shortcode *bartag* with 2 attributes: foo and bar. *More about Shortcode API read in [WordPress Codex](http://codex.wordpress.org/Shortcode_API)*.

```php
<?php
// [bartag foo="foo-value"]
add_shortcode( 'bartag', 'bartag_func' );
function bartag_func( $atts ) {
 extract( shortcode_atts( array(
  'foo' => 'something'
 ), $atts ) );

 return "foo = {$foo}";
}
?>
```

Now lets call vc_map() function from our functions.php file with an array of special attributes to describe attributes of our shortcode. **Important:** *vc_map()* call should be hooked on WPBakery Page Builder *vc_before_init* action.

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( array(
  "name" => __( "Bar tag test", "my-text-domain" ),
  "base" => "bartag",
  "class" => "",
  "category" => __( "Content", "my-text-domain"),
  'admin_enqueue_js' => array(get_template_directory_uri().'/vc_extend/bartag.js'),
  'admin_enqueue_css' => array(get_template_directory_uri().'/vc_extend/bartag.css'),
  "params" => array(
 array(
  "type" => "textfield",
  "holder" => "div",
  "class" => "",
  "heading" => __( "Text", "my-text-domain" ),
  "param_name" => "foo",
  "value" => __( "Default param value", "my-text-domain" ),
  "description" => __( "Description for foo param.", "my-text-domain" )
 )
  )
 ) );
}
?>
```

As you can see it has an array of params. This list represents shortcode tag as base and params list which will be editable with settings form inside WPBakery Page Builder editor. In params array we have only one element as array with list of params. param_name must be the same as your parameter name. Next most important attribute of params is type. There are a lot of predefined types (all of them you can see [here](#available-type-values)). For foo attribute we'll use "textfield" which is simple input field. Add "heading" and "description" attributes for human friendly title and description of your param. Default attribute value can be added in param attribute "value".

After adding "mapping", you will see your shortcode inside [content elements](/docs/learning-more/content-elements) list in WPBakery Page Builder editing mode and ability to control access to this shortcode in WPBakery Page Builder [settings](/docs/learning-more/wpbakery-page-builder-settings).

More advanced example: Let's say you want to add a new special param to your shortcode: let's call it *color*. First of all, modify your shortcode hook function.

```php
<?php
add_shortcode( 'bartag', 'bartag_func' );
function bartag_func( $atts ) {
 extract( shortcode_atts( array(
  'foo' => 'something',
  'color' => '#FFF'
 ), $atts ) );

 return "<div style='color:{$color};'>foo = {$foo}</div>";
}
?>
```

Now our shortcode has *color* param, which it will use as a style for our div on the site's front end. Now we can call this shortcode with [bartag foo="foo-value" color="#000000"]. To make color attribute editable in WPBakery Page Builder editing mode we should change mapping settings by adding new param in params list with param_name – 'color' and type – colorpicker. Easy as that!

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( array(
  "name" => __( "Bar tag test", "my-text-domain" ),
  "base" => "bartag",
  "class" => "",
  "category" => __( "Content", "my-text-domain"),
  'admin_enqueue_js' => array(get_template_directory_uri().'/vc_extend/bartag.js'),
  'admin_enqueue_css' => array(get_template_directory_uri().'/vc_extend/bartag.css'),
  "params" => array(
 array(
  "type" => "textfield",
  "holder" => "div",
  "class" => "",
  "heading" => __( "Text", "my-text-domain" ),
  "param_name" => "foo",
  "value" => __( "Default param value", "my-text-domain" ),
  "description" => __( "Description for foo param.", "my-text-domain" )
 ),
 array(
  "type" => "colorpicker",
  "class" => "",
  "heading" => __( "Text color", "my-text-domain" ),
  "param_name" => "color",
  "value" => '#FF0000', //Default Red color
  "description" => __( "Choose text color", "my-text-domain" )
 )
  )
 ) );
}
?>
```

Now you should see new color picker field in WPBakery Page Builder edit screen for our *[bartag]* shortcode.

Some shortcodes has content block. For example: *[bartag foo="foo-value" color="#000000"]Here goes content[/bartag]*. You can create wysiwyg editor field or simple plain textarea field inside settings form of your shortcode.

**Important:** Only one wysiwyg editor per content element is allowed and it should have *param_name* equal to "content".

Lets change your shortcode registration hook.

```php
<?php
add_shortcode( 'bartag', 'bartag_func' );
function bartag_func( $atts, $content = null ) { // New function parameter $content is added!
 extract( shortcode_atts( array(
  'foo' => 'something',
  'color' => '#FFF'
 ), $atts ) );

 $content = wpb_js_remove_wpautop($content, true); // fix unclosed/unwanted paragraph tags in $content

 return "<div style='color:{$color};' data-foo='${foo}'>{$content}</div>";
}
?>
```

Now update *vc_map()* function call, and add new attribute to the params array. *vc_map()* now should look like this:

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
 vc_map( array(
  "name" => __( "Bar tag test", "my-text-domain" ),
  "base" => "bartag",
  "class" => "",
  "category" => __( "Content", "my-text-domain"),
  'admin_enqueue_js' => array(get_template_directory_uri().'/vc_extend/bartag.js'),
  'admin_enqueue_css' => array(get_template_directory_uri().'/vc_extend/bartag.css'),
  "params" => array(
 array(
  "type" => "textfield",
  "holder" => "div",
  "class" => "",
  "heading" => __( "Text", "my-text-domain" ),
  "param_name" => "foo",
  "value" => __( "Default param value", "my-text-domain" ),
  "description" => __( "Description for foo param.", "my-text-domain" )
 ),
 array(
  "type" => "colorpicker",
  "class" => "",
  "heading" => __( "Text color", "my-text-domain" ),
  "param_name" => "color",
  "value" => '#FF0000', //Default Red color
  "description" => __( "Choose text color", "my-text-domain" )
 ),
 array(
  "type" => "textarea_html",
  "holder" => "div",
  "class" => "",
  "heading" => __( "Content", "my-text-domain" ),
  "param_name" => "content", // Important: Only one textarea_html param per content element allowed and it should have "content" as a "param_name"
  "value" => __( "<p>I am test text block. Click edit button to change this text.</p>", "my-text-domain" ),
  "description" => __( "Enter your content.", "my-text-domain" )
 )
  )
 ) );
}
?>
```

This will add new attribute to our *[bartag]* shortcode and on the edit screen you will see TinyMCE WYSIWYG editor. So with few incremental steps we have taken our simple *[bartag]* shortcode to the whole new level.
