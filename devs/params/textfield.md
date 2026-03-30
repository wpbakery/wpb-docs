---
title: Textfield
sidebar_label: textfield
---

# Textfield

**Type:** `textfield`

## Description

Simple text input field for single-line text values.

## Screenshot

![Textfield](/img/params/textfield.png)

## Basic Usage

```php
[
    "type" => "textfield",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => __("Default value", "your-text-domain"),
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"textfield"` |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Default value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `weight` | Integer | Display order (higher = shows first) |
| `edit_field_class` | String | CSS class for field width (e.g., "vc_col-sm-6") |
| `dependency` | Array | Show/hide based on other field values |
| `admin_label` | Boolean | Show value in element title bar |

## Type-Specific Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value_type` | String | `"html"` | How to parse value: `"html"` or `"text"` |
| `placeholder` | String | - | Placeholder text shown when field is empty |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_textfield');
function my_element_with_textfield() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "textfield",
                "heading" => __("Title", "domain"),
                "param_name" => "title",
                "value" => __("Default Title", "domain"),
                "description" => __("Enter the element title", "domain"),
                "admin_label" => true,
            ],
        ],
    ]);
}
```

