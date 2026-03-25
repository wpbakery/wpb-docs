---
title: Autocomplete
sidebar_label: autocomplete
---

# Autocomplete

**Type:** `autocomplete`
**Category:** Advanced Input

## Description

Input field with autocomplete suggestions (AJAX or predefined).

## Screenshot

![Autocomplete](/img/params/autocomplete.png)

## Basic Usage

```php
array(
    "type" => "autocomplete",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"autocomplete"` |
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
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`multiple` | Boolean | `false` | Allow multiple value selection |
| &nbsp;&nbsp;&nbsp;&nbsp;`min_length` | Integer | `1` | Minimum characters before showing suggestions |
| &nbsp;&nbsp;&nbsp;&nbsp;`groups` | Boolean | `false` | Group autocomplete results |
| &nbsp;&nbsp;&nbsp;&nbsp;`unique_values` | Boolean | `true` | Prevent duplicate value selection |
| &nbsp;&nbsp;&nbsp;&nbsp;`display_inline` | Boolean | `false` | Display selected values inline |
| &nbsp;&nbsp;&nbsp;&nbsp;`delay` | Integer | `500` | Delay in milliseconds before triggering autocomplete |
| &nbsp;&nbsp;&nbsp;&nbsp;`auto_focus` | Boolean | `true` | Auto focus first suggestion |

**Example:**
```php
array(
    "type" => "autocomplete",
    "param_name" => "post_ids",
    "settings" => array(
        "multiple" => true,
        "min_length" => 2,
        "delay" => 300,
        "unique_values" => true,
    ),
)
```

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_autocomplete');
function my_element_with_autocomplete() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "autocomplete",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ),
        ),
    ));
}
```

