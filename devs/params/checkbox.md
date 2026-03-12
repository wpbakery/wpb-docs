---
title: Checkbox
sidebar_label: checkbox
---

# Checkbox

**Type:** `checkbox`
**Category:** Selection

## Description

Checkbox input allowing single or multiple selections.

## Basic Usage

```php
array(
    "type" => "checkbox",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => array(
        __("Option 1", "your-text-domain") => "option1",
        __("Option 2", "your-text-domain") => "option2",
    ),
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"checkbox"` |
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
| `value` | Array | - | **Required.** Associative array of checkbox options (label => value) |
| `std` | String | - | Default selected value(s), comma-separated for multiple |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`direction` | String | `"horizontal"` | Layout direction of checkboxes. Possible values: `"horizontal"`, `"vertical"` |

**Example:**
```php
array(
    "type" => "checkbox",
    "value" => array(
        __("Option 1", "domain") => "opt1",
        __("Option 2", "domain") => "opt2",
    ),
    "std" => "opt1",
    "settings" => array(
        "direction" => "vertical",
    ),
)
```

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_checkbox');
function my_element_with_checkbox() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "checkbox",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ),
        ),
    ));
}
```

