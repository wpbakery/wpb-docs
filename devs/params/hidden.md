---
title: Hidden
sidebar_label: hidden
---

# Hidden

**Type:** `hidden`

## Description

A hidden input field that stores a value without displaying any visible UI to the user. Useful for storing internal data, computed values, or state that should not be directly editable by the user.

## Basic Usage

```php
[
    "type" => "hidden",
    "param_name" => "your_param_name",
    "value" => "",
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"hidden"` |
| `holder` | String | HTML tag name where the value is displayed in backend edit mode. Default: hidden input |
| `class` | String | CSS class added to the `holder` HTML tag |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `section` | String | [Section](/devs/developers-how-tos/use-param-section-in-elements) slug to visually group params within a tab |
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

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_hidden');
function my_element_with_hidden() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "textfield",
                "heading" => __("Title", "domain"),
                "param_name" => "title",
            ],
            [
                "type" => "hidden",
                "param_name" => "internal_id",
                "value" => "",
            ],
        ],
    ]);
}
```

:::info
Since this param type renders as a hidden input, it does not appear in the element's edit form. It is typically used to store values set programmatically via JavaScript or other param interactions.
:::
