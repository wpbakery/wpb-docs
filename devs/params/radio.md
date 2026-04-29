---
title: Radio
sidebar_label: radio
---

# Radio

**Type:** `radio`

## Description

Radio button input for selecting one option from multiple choices.

## Screenshot

![Radio](/img/params/radio.png)

## Basic Usage

```php
[
    "type" => "radio",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"radio"` |
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
| `std` | Mixed | - | Default param value (alternative to `value`) |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`direction` | String | `"horizontal"` | Layout direction. Set to `"vertical"` for vertical alignment |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_radio');
function my_element_with_radio() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "radio",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
                "settings" => ["direction" => "vertical"],
            ],
        ],
    ]);
}
```

