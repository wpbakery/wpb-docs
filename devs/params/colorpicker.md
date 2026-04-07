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
| `holder` | String | HTML tag name where the value is displayed in backend edit mode. Default: hidden input |
| `class` | String | CSS class added to the `holder` HTML tag |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `weight` | Integer | Display order (higher = shows first) |
| `edit_field_class` | String | CSS class for field width (e.g., "vc_col-sm-6") |
| `dependency` | Array | Show/hide based on other field values |
| `admin_label` | Boolean | Show value in element title bar |
| `param_holder_class` | String | CSS class for the param wrapper in the edit element modal |
| `save_always` | Boolean | Force saving the value even if it equals the default or is empty |
| `callback` | Array | JavaScript function callback (e.g., `['after_add' => 'myCallback']`) |
| `settings` | Array | Type-specific configuration options (see Type-Specific Parameters below) |

## Type-Specific Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `std` | String | - | Default color value (alternative to `value`) |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`default_colorpicker_color` | String | - | Default color for the color picker control |

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
                "settings" => ["default_colorpicker_color" => "#FF0000"],
            ],
        ],
    ]);
}
```

