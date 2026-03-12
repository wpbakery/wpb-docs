---
id: element-structure
title: Element Structure
sidebar_label: Element Structure
sidebar_position: 30
hide_table_of_contents: true
slug: /developers-how-tos/element-structure
---

# Element Structure

This document explains the anatomy of a WPBakery element, what files are needed, and why each component is important for creating custom elements.

## What is an Element?

An element (also called “block” or “shortcode”) is a reusable component that users can add to their pages through the WPBakery editor.

Examples include buttons, text blocks, image galleries, tabs, and accordions.

## Element Components in 3rd-Party Plugins

Every custom WPBakery element in a 3rd-party plugin consists of these files:

```php
elements/your-element/

├── your-element.php # 1.

Registration & Class (required)
└── your-element.tpl.php # 2.

Template File (required)
```


### 1. Element Registration & Class File (Required)

**Location:** `elements/{element-name}/{element-name}.php`

**Purpose:**

- Registers the element with WPBakery using `vc_map()`
- Defines the element class (extends WPBakeryShortCode or WPBakeryShortCodesContainer)
- Handles the rendering logic by including the template file

#### Basic Structure

```php
<?php
/**
* Custom Element for 3rd-party plugin
* File: elements/custom-element/custom-element.php
*/


if ( ! defined( 'ABSPATH' ) ) {
 exit; // Exit if accessed directly
}


// 1.

Register the element with vc_map()
vc_map( [
 'name' => __( 'Custom Element', 'your-text-domain' ),
 'base' => 'your_custom_element',
 'icon' => 'icon-wpb-custom',
 'category' => __( 'Your Elements', 'your-text-domain' ),
 'description' => __( 'Description of your element', 'your-text-domain' ),
 'params' => [
 // Parameter definitions go here
 ]
] );


// 2.

Define the element class
class WPBakeryShortCode_Your_Custom_Element extends WPBakeryShortCode {


 /**
 * Render the element output
 */
 protected function content( $atts, $content = null ) {
 // Get and sanitize attributes
 $atts = vc_map_get_attributes( $this->getShortcode(), $atts );


 // Include the template file
 ob_start();
 include __DIR__ . '/custom-element.tpl.php';
 return ob_get_clean();
 }
}
```


### Key Configuration Properties

#### Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Display name in the elements panel |
| `base` | string | Unique identifier (also the shortcode tag) |
| `params` | array | Array of parameters (element settings) |

#### Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `category` | string | Element category in the add element panel |
| `icon` | string | CSS class for element icon |
| `description` | string | Element description tooltip |
| `weight` | int | Sort order (higher numbers appear first) |
| `deprecated` | string | Version when element was deprecated |
| `is_container` | bool | Whether element can contain other elements |
| `show_settings_on_create` | bool | Show settings immediately after adding |
| `as_parent` | array | Define allowed child elements |
| `as_child` | array | Define where this element can be used |

### Parameter Definition

Each parameter in the params array defines a setting field:

```php
[

 'type' => 'textfield',
 'heading' => __( 'Title', 'text-domain' ), 
 'param_name' => 'title',
 'value' => '',
 'description' => __( 'Enter title', 'text-domain' ),
 'admin_label' => true,
 'group' => __( 'Content', 'text-domain' ),
]
```


#### Common Parameter Types

| Type | Description | Example Use |
|------|-------------|-------------|
| `textfield` | Single line text input | Title, name, ID |
| `textarea` | Multi-line text input | Description, content |
| `textarea_html` | Rich text editor | Main content |
| `dropdown` | Select dropdown | Style options |
| `checkbox` | Checkbox input | Enable/disable features |
| `attach_image` | Image picker | Upload images |
| `colorpicker` | Color selection | Background color |
| `vc_link` | Link builder | Button links |
| `param_group` | Repeatable field group | Multiple items |

### 2. Template File (Required)

**Location:** `elements/{element-name}/{element-name}.tpl.php`

**Purpose:** Generates the HTML output that appears on the frontend.

**Key Point:** In 3rd-party plugins, template files live alongside the element registration file in the same directory, making elements self-contained and portable.

## Element Class Details

**Location:** Defined in `elements/{element-name}/{element-name}.php` (same file as `vc_map()`)

**Purpose:** Add custom logic, modify attributes, enqueue assets, or handle special rendering needs.

### Class Structure for 3rd-Party Plugins

In 3rd-party plugins, the element class is defined in the same file as vc_map(), not in a separate file.

This keeps everything related to the element in one place.

### Common Methods to Override

| Method | Purpose |
|--------|---------|
| `setAttributes()` | Modify attributes before rendering |
| `findShortcodeTemplate()` | Custom template file location |
| `content()` | Complete custom rendering |
| `contentAdmin()` | Backend editor view |
| `mainHtmlBlockParams()` | Modify wrapper attributes |
| `getParamName()` | Get parameter value |

## File Location Summary for 3rd-Party Plugins

For an element with base `your_alert_box`:

- **Registration & Class:** `elements/alert-box/alert-box.php`
- **Template:** `elements/alert-box/alert-box.tpl.php`

**Key Difference:** Everything is self-contained in one directory, making elements portable and easy to maintain.
