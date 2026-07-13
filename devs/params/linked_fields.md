---
title: Linked fields
sidebar_label: linked_fields
---

# Linked fields

**Type:** `linked_fields`

## Description

Fields that are linked/dependent on other field values.

## Screenshot

![Linked Fields](/img/params/linked-fields.png)

## Basic Usage

```php
[
    "type" => "linked_fields",
    "heading" => __("Padding", "your-text-domain"),
    "param_name" => "padding",
    "description" => __("Set padding values", "your-text-domain"),
    "settings" => [
        "units" => ['px', 'em', '%'],
        "default_unit" => 'px',
    ],
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"linked_fields"` |
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
| `deprecated` | String | Version in which the param was deprecated |

## Type-Specific Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `std` | Mixed | - | Default param value (alternative to `value`). Uses pipe-separated key-value pairs (e.g., `"top:10|right:10|bottom:10|left:10|unit:px|linked:true"`) |
| `value` | Array | `['top'=>'', 'right'=>'', 'bottom'=>'', 'left'=>'']` | Defines the field keys and their default values |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`units` | Boolean\|Array | `false` | Enable CSS unit selector. Set to `true` for default units (`px`, `em`, `rem`, `vw`, `vh`, `%`) or provide a custom array (e.g., `['px', 'em', '%']`). When enabled, a shared unit dropdown appears and the unit is stored with the value |
| &nbsp;&nbsp;&nbsp;&nbsp;`default_unit` | String | First unit in list | The unit selected by default when no unit is present in the value |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_linked_fields');
function my_element_with_linked_fields() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "linked_fields",
                "heading" => __("Padding", "domain"),
                "param_name" => "padding",
                "std" => "top:10|right:10|bottom:10|left:10|unit:px|linked:true",
                "settings" => [
                    "units" => ['px', 'em', 'rem', '%'],
                    "default_unit" => 'px',
                ],
                "description" => __("Set element padding", "domain"),
            ],
        ],
    ]);
}
```

