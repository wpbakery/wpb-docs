---
sidebar_position: 2
---

# Parameter types

Parameters define the options users see when editing the element in the WPBakery UI. They are added via the `params` array in `vc_map()`.

## name
* Type - String
* Description - Name of your shortcode for human reading inside element list.
* Example:
```php
'name' => __('Button', 'my-text-domain'),
```

## base

* Type - String
* Description - Unique identifier for your element, used in the shortcode. For `[my_shortcode]` shortcode base is `my_shortcode`.
* Example:
```php
'base' => 'my_button',
```
## description

* Type - String
* Description - Short description of your element, it will be visible in "Add element" window.
* Example:
```php
'description' => __('A customizable button element', 'my-text-domain'),
```

## class

* Type - String
* Description - CSS class for the element, used for styling.
* Example:
```php
'class' => 'my-custom-button',
```

## show_settings_on_create

* Type - Boolean
* Description - If set to `true`, the element will show its settings when added to the page. If `false`, settings will only appear when the element is selected.
* Example:
```php
'show_settings_on_create' => false,
```

## weight

* Type - Integer
* Description - Content elements with greater weight will be rendered first in "Content Elements" grid *(Available from WPBakery Page Builder 3.7 version)*.
* Example:
```php
'weight' => 10,
```

## category

* Type - String
* Description - Category which best suites to describe the functionality of this shortcode. Default categories: Content, Social, Structure. You can add your own category, simply enter new category title here.
* Example:
```php
'category' => __('My Custom Elements', 'my-text-domain'),
```

## group

* Type - String
* Description - Group your params in groups, they will be divided in tabs in the edit element window (Available from WPBakery Page Builder 4.1)
* Example:
```php
'group' => __('My Custom Group', 'my-text-domain'),
```

## admin_enqueue_js

* Type - String|Array
* Description - Absolute url to javascript file, this js will be loaded in the js_composer edit mode (it allows you to add more functionality to your shortcode in js_composer edit mode).
* Example:
```php
'admin_enqueue_js' => get_template_directory_uri() . '/js/my-custom-element.js',
```

## admin_enqueue_css

* Type - String|Array
* Description - Absolute url to css file if you need to add custom css for element block in js_composer constructor mode.
* Example:
```php
'admin_enqueue_css' => get_template_directory_uri() . '/css/my-custom-element.css',
```

## front_enqueue_js

* Type - String|Array
* Description - Absolute url to javascript file (useful for storing your custom backbone.js views), this js will be loaded in the js_composer frontend edit mode (it allows you to add more functionality to your shortcode in js_composer frontend edit mode). (*Available from WPBakery Page Builder 4.2.2*).
* Example:
```php
'front_enqueue_js' => get_template_directory_uri() . '/js/my-custom-element.js',
```

## front_enqueue_css

* Type - String|Array
* Description - Absolute url to css file if you need to load custom css file in the frontend editing mode. (*Available from WPBakery Page Builder 4.2.2*).
* Example:
```php
'front_enqueue_css' => get_template_directory_uri() . '/css/my-custom-element.css',
```

## icon

* Type - String
* Description - URL or CSS class with icon image. More info [here](https://kb.wpbakery.com/devs/developer-tutorials/set-content-element-icon).
* Example:
```php
'icon' => 'dashicons dashicons-admin-customizer',
```

## custom_markup

* Type - String
* Description - Custom html markup for representing shortcode in visual composer editor.
* Example:
```php
'custom_markup' => '<div class="my-custom-element">{{content}}</div>',
```

## js_view

* Type - String
* Description - Backbone.js view name for your element. This is used to create a custom view for your element in the WPBakery Page Builder editor.
* Example:
```php
'js_view' => 'MyCustomElementView',
```

## html_template

* Type - String
* Description - Path to shortcode template. This is useful if you want to reassign path of existing content elements through your plugin. Another way to [change html markup](https://kb.wpbakery.com/devs/developer-tutorials/change-shortcodes-html-output).
* Example:
```php
'html_template' => get_template_directory() . '/templates/my-custom-element-template.php',
```

## deprecated

* Type - Array
* Description - Enter version number from which content element will be deprecated. It will be moved to the "Deprecated" tab in "Add element" window and notification message will be shown on elements edit page. To hide element from "Add element" all together use 'content_element'=>false (Available from WPBakery Page Builder 4.5).
* Example:
```php
'deprecated' => [
    'version' => '5.0',
    'message' => __('This element is deprecated, please use [new_shortcode] instead.', 'my-text-domain'),
    'base' => 'new_shortcode',
],
```

## content_element

* Type - Boolean
* Description - If set to false, content element will be hidden from "Add element" window. It is handy to use this param in pair with 'deprecated' param (Available from WPBakery Page Builder 4.5).
* Example:
```php
'content_element' => true,
```

## params

* Type - Array
* Description - Array of parameters for your element. Each parameter is an associative array with its own set of keys and values.
* Example:
```php
'params' => [
    [
        'type' => 'textfield',
        'heading' => __('Button Text', 'my-text-domain'),
        'param_name' => 'button_text',
        'value' => __('Click Me', 'my-text-domain'),
        'description' => __('Text to display on the button', 'my-text-domain'),
    ],
    [
        'type' => 'colorpicker',
        'heading' => __('Button Color', 'my-text-domain'),
        'param_name' => 'button_color',
        'value' => '#ff0000',
        'description' => __('Choose a color for the button', 'my-text-domain'),
    ],
],
```
