---
title: Autocomplete
sidebar_label: autocomplete
---

# Autocomplete

**Type:** `autocomplete`

## Description

Input field with autocomplete suggestions (AJAX or predefined).

## Screenshot

![Autocomplete](/img/params/autocomplete.png)

## Basic Usage

```php
[
    "type" => "autocomplete",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"autocomplete"` |
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
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`multiple` | Boolean | `false` | Allow multiple value selection |
| &nbsp;&nbsp;&nbsp;&nbsp;`min_length` | Integer | `1` | Minimum characters before showing suggestions |
| &nbsp;&nbsp;&nbsp;&nbsp;`groups` | Boolean | `false` | Group autocomplete results |
| &nbsp;&nbsp;&nbsp;&nbsp;`unique_values` | Boolean | `true` | Prevent duplicate value selection |
| &nbsp;&nbsp;&nbsp;&nbsp;`display_inline` | Boolean | `false` | Display selected values inline |
| &nbsp;&nbsp;&nbsp;&nbsp;`delay` | Integer | `500` | Delay in milliseconds before triggering autocomplete |
| &nbsp;&nbsp;&nbsp;&nbsp;`sortable` | Boolean | `false` | Whether selected items can be reordered |
| &nbsp;&nbsp;&nbsp;&nbsp;`auto_focus` | Boolean | `true` | Auto focus first suggestion |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_autocomplete');
function my_element_with_autocomplete() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "autocomplete",
                "heading" => __("Field Label", "domain"),
                "param_name" => "post_ids",
                "settings" => [
                    "multiple" => true,
                    "min_length" => 2,
                    "delay" => 300,
                    "unique_values" => true,
                ],
                "description" => __("Field description", "domain"),
            ],
        ],
    ]);
}
```

