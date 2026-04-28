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
| `group` | String | [Tab/group](/devs/developer-tutorials/use-param-group-in-elements) name to organize parameters |
| `section` | String | [Section](/devs/developer-tutorials/use-param-section-in-elements) slug to visually group params within a tab |
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
| &nbsp;&nbsp;&nbsp;&nbsp;`unit` | String | - | Unit label displayed next to the input (e.g., `'%'`, `'px'`). This is a display-only label and does not modify the saved value |

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
                "value" => "100",
                "description" => __("Set element width", "domain"),
                "settings" => [
                    "min" => 10,
                    "max" => 100,
                    "step" => 10,
                    "unit" => '%',
                ],
            ],
        ],
    ]);
}
```

