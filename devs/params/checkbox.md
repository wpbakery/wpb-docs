---
title: Checkbox
sidebar_label: checkbox
---

# Checkbox

**Type:** `checkbox`

## Description

Checkbox input allowing single or multiple selections.

## Screenshot

![Checkbox](/img/params/checkbox.png)

## Basic Usage

```php
[
    "type" => "checkbox",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => [
        __("Option 1", "your-text-domain") => "option1",
        __("Option 2", "your-text-domain") => "option2",
    ],
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"checkbox"` |
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
| `std` | String | - | Default selected value(s), comma-separated for multiple |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`direction` | String | `"horizontal"` | Layout direction of checkboxes. Possible values: `"horizontal"`, `"vertical"` |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_checkbox');
function my_element_with_checkbox() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "checkbox",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "value" => [
                    __("Option 1", "domain") => "opt1",
                    __("Option 2", "domain") => "opt2",
                ],
                "std" => "opt1",
                "settings" => [
                    "direction" => "vertical",
                ],
                "description" => __("Field description", "domain"),
            ],
        ],
    ]);
}
```

