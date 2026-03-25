---
sidebar_position: 3
---

# `params` array

Here you should describe all you shortcode's attributes that should be editable with WPBakery Page Builder interface. Each shortcode's attribute should be described in the separate array element.

Defining the "Text" attribute under `params` array allows users to input custom text when they add the element to their page:

```php
vc_map([
    'name' => __('My Custom Button', 'my-textdomain'),
    'base' => 'my_custom_button',
    'category' => __('Custom Elements', 'my-textdomain'),
    'icon' => 'icon-wpb-ui-button',
    'description' => __('A styled button with custom link.', 'my-textdomain'),
    'params' => [
        "type" => "textfield",
        "holder" => "div",
        "class" => "",
        "heading" => __( "Text", "my-text-domain" ),
        "param_name" => "foo",
        "value" => __( "This is test param for creating new project", "my-text-domain" ),
        "description" => __( "Enter foo.", "my-text-domain" )
    ]
]);
```

## Parameters of params Array

### type

* Type - String
* Description - Type of the parameter. It defines how the parameter will be rendered in the WPBakery UI. See available types below.
* Example:
```php
'type' => 'textfield',
```

### holder

* Type - String
* Description - HTML tag that will wrap the parameter in the WPBakery UI. Common values are `div`, `span`, etc. Default: hidden input
* Example:
```php
'holder' => 'div',
```

### class

* Type - String
* Description - CSS class for the parameter, used for styling in the WPBakery UI.
* Example:
```php
'class' => 'my-custom-class',
```

### heading

* Type - String
* Description - The label for the parameter, displayed in the WPBakery UI.
* Example:
```php
'heading' => __('Button Text', 'my-text-domain'),
```

### param_name

* Type - String
* Description - Unique identifier for the parameter, used in the shortcode. This is how you will access the parameter value in your shortcode function.
* Example:
```php
'param_name' => 'button_text',
```

### value

* Type - Array|String
* Description - Default value for the parameter. This can be a string, array, or any other type depending on the parameter type.
* Example:
```php
'value' => __('Click Me', 'my-text-domain'),
```

### description

* Type - String
* Description - A brief description of the parameter, displayed in the WPBakery UI to help users understand what the parameter does.
* Example:
```php
'description' => __('Text to display on the button', 'my-text-domain'),
```

### admin_label

* Type - Boolean
* Description - If set to true, this parameter will be displayed as the admin label in the WPBakery UI. This is useful for parameters that you want to highlight or make more prominent.
* Example:
```php
'admin_label' => true,
```

### dependency

* Type - Array
* Description - An array that defines dependencies for the parameter. This allows you to show or hide the parameter based on the values of other parameters.
* Example:
```php
'dependency' => array(
    'element' => 'some_other_param',
    'value' => array('value1', 'value2'),
),
```

### edit_field_class

* Type - String
* Description - Set param container width in content element edit window. According to Bootstrap logic e.g. col-md-4. (*Available from WPBakery Page Builder 4.0*).
* Example:
```php
'edit_field_class' => 'my-custom-edit-field-class',
```

### weight

* Type - Integer
* Description - Params with greater weight will be rendered first. (*Available from WPBakery Page Builder 4.0*).
* Example:
```php
'weight' => 10,
```

### group

* Type - String
* Description - Use it to divide your params within groups (tabs) in the edit element window. This is useful for organizing parameters into logical sections, making it easier for users to navigate and understand the settings.
* Example:
```php
'group' => __('Content', 'my-text-domain'),
```

### value_type

* Type - String
* Description - Defines the type of value that the parameter will accept. This can be useful for validation or processing the value in a specific way.
* Example:
```php
'value_type' => 'string',
```

### placeholder

* Type - String
* Description - Placeholder text for the parameter input field. This is displayed when the field is empty, providing a hint to the user about what to enter.
* Example:
```php
'placeholder' => __('Enter your text here', 'my-text-domain'),
```


## Available type values

There are multiple attribute types available, this field is used to "tell" WPBakery Page Builder how to handle your attribute in content element edit screen.

### textarea_html

* Type - String
* Description - Text area with default WordPress WYSIWYG Editor. Important: only one html textarea is permitted per shortcode, and it should have "content" as a param_name.
* Example:
```php
'type' => 'textarea_html',
```

### textarea

* Type - String
* Description - Renders a simple textarea for plain text input. This is suitable for longer text entries without HTML.
* Example:
```php
'type' => 'textarea',
```

### textfield

* Type - String
* Description - Renders a single-line text input field. This is used for short text entries.
* Example:
```php
'type' => 'textfield',
```

### textarea_raw_html

* Type - String
* Description - Text area, its content will be coded into base64 (this allows you to store raw js or raw html code).
* Example:
```php
'type' => 'textarea_raw_html',
```

### dropdown

* Type - String
* Description - Renders a dropdown select box. This is useful for predefined options where users can select one value from a list.
* Example:
```php
'type' => 'dropdown',
```

### attach_image

* Type - String
* Description - Renders an image upload field. This allows users to upload or select an image from the media library.
* Example:
```php
'type' => 'attach_image',
```

### attach_images

* Type - String
* Description - Similar to `attach_image`, but allows multiple image uploads. This is useful for galleries or multiple image selections.
* Example:
```php
'type' => 'attach_images',
```

### posttypes

* Type - String
* Description - Renders a dropdown of post types. This allows users to select from available post types in WordPress.
* Example:
```php
'type' => 'posttypes',
```

### colorpicker

* Type - String
* Description - Renders a color picker input. This allows users to select a color using a color picker interface.
* Example:
```php
'type' => 'colorpicker',
```

### exploded_textarea

* Type - String
* Description - Text area, where each line will be imploded with comma (,)
  and passed as a single string to the shortcode. This is useful for entering multiple values in a single textarea, where each line represents a separate value.
* Example:
```php
'type' => 'exploded_textarea',
```

### widgetised_sidebars

* Type - String
* Description - Dropdown element with set of available widget regions, that are registered in the active WordPress theme.
* Example:
```php
'type' => 'widgetised_sidebars',
```

### vc_link

* Type - String
* Description - Renders a link input field with options for URL, title, and target. This is useful for creating links with additional attributes.
* Example:
```php
'type' => 'vc_link',
```

### checkbox

* Type - String
* Description - Renders a checkbox input. This allows users to toggle a boolean value (true/false).
* Example:
```php
'type' => 'checkbox',
```

### loop

* Type - String
* Description - Loop builder. Lets your users to construct loop which can later be used during the shortcode's output.
* Example:
```php
'type' => 'loop',
```

### css_editor

* Type - String
* Description - Basic CSS style editor for your content element. Check ["Add "Design Options" Tab with CSS Editor to Your Element"](#) page for more details.
* Example:
```php
'type' => 'css_editor',
```

### autocomplete

* Type - String
* Description - Autocomplete field. This allows users to select from a list of predefined options while typing. It can be used for tags, categories, or any other set of items.
* Example:
```php
'type' => 'autocomplete',
```

### iconpicker

* Type - String
* Description - Icon picker field. This allows users to select an icon from a predefined set of icons.
* Example:
```php
'type' => 'iconpicker',
```

### param_group

* Type - String
* Description - Use it to create a group of parameters that can be repeated. This is useful for creating complex structures where users can add multiple instances of a set of parameters.
* Example:
```php
'type' => 'param_group',
```

**attribute types can be extended with new custom types. Tutorial: [Create new param types](#).**

## Param Dependencies

It is possible to link param with another param by defining dependency param. Dependency param is array with defined param name and values which will allow to display this linked param. Also it is possible to show param field if linked field is not empty and define callback function which will be called when value of linked element is changed. Next table contains field list and explanation of dependency param array keys.

### element

* Type - String
* Description - Name of the element that this parameter depends on. This is the `param_name` of another parameter.
* Example:
```php
'element' => 'some_other_param',
```

### value

* Type - Array
* Description - The value(s) that the dependent parameter will show for. If the value of the dependent parameter matches this, the parameter will be displayed.
* Example:
```php
'value' => array('value1', 'value2'),
```

### not_empty

* Type - Boolean
* Description - If set to true, the dependent parameter will be displayed if the linked parameter is not empty.
* Example:
```php
'not_empty' => true,
```

### callback

* Type - String
* Description - javascript function name. Function will be called when value of linked field is changed.
* Example:
```php
'callback' => 'my_custom_callback_function',
```

### value_includes

* Type - Array|String
* Description - It helps handle fields that store comma-separated values, converting them into arrays on the frontend. For example, a custom sorter param saves item order as a string. This dependency rule enables dynamic visibility of settings based on enabled items.
* Example:
```php
'value_includes' => array('include1', 'include2'),
```
