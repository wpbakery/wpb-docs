---
title: Colorpicker
sidebar_label: colorpicker
---

# Colorpicker

**Type:** `colorpicker`

## Description

Color picker for selecting hex color values.

## Screenshot

![Colorpicker](/img/params/colorpicker.png)

## Basic Usage

```php
[
    "type" => "colorpicker",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => "#FF0000", // Default color
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"colorpicker"` |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Default value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `weight` | Integer | Display order (higher = shows first) |
| `edit_field_class` | String | CSS class for field width (e.g., "vc_col-sm-6") |
| `dependency` | Array | Show/hide based on other field values |
| `admin_label` | Boolean | Show value in element title bar |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_colorpicker');
function my_element_with_colorpicker() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "colorpicker",
                "heading" => __("Background Color", "domain"),
                "param_name" => "bg_color",
                "value" => "#ffffff",
                "description" => __("Select background color", "domain"),
            ],
        ],
    ]);
}
```

