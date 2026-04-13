---
title: Range
sidebar_label: range
---

# Range

**Type:** `range`

## Description

Range slider for selecting numeric values within a range.

## Screenshot

![Range](/img/params/range.png)

## Basic Usage

```php
[
    "type" => "range",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"range"` |
| `holder` | String | HTML tag name where the value is displayed in backend edit mode. Default: hidden input |
| `class` | String | CSS class added to the `holder` HTML tag |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `section` | String | Section slug to visually group params within a tab |
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
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`min` | Integer | - | Minimum allowed value |
| &nbsp;&nbsp;&nbsp;&nbsp;`max` | Integer | - | Maximum allowed value |
| &nbsp;&nbsp;&nbsp;&nbsp;`step` | Integer | - | Step increment value |
| &nbsp;&nbsp;&nbsp;&nbsp;`placeholder` | Integer | - | Placeholder value shown when empty |
| &nbsp;&nbsp;&nbsp;&nbsp;`units` | Boolean\|Array | `false` | Enable CSS unit selector. Set to `true` for default units (`px`, `em`, `rem`, `vw`, `vh`, `%`) or provide a custom array (e.g., `['px', 'em', '%']`). When enabled, the saved value includes the unit suffix (e.g., `"50px"`) |
| &nbsp;&nbsp;&nbsp;&nbsp;`default_unit` | String | First unit in list | The unit selected by default when no unit is present in the value |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_range');
function my_element_with_range() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "range",
                "heading" => __("Opacity", "domain"),
                "param_name" => "opacity",
                "description" => __("Set element opacity", "domain"),
                "settings" => [
                    "min" => 0,
                    "max" => 100,
                    "step" => 1,
                ],
            ],
            [
                "type" => "range",
                "heading" => __("Width", "domain"),
                "param_name" => "width",
                "value" => "100%",
                "description" => __("Set element width", "domain"),
                "settings" => [
                    "min" => 0,
                    "max" => 100,
                    "step" => 1,
                    "units" => ['px', 'em', '%'],
                    "default_unit" => 'px',
                ],
            ],
        ],
    ]);
}
```

