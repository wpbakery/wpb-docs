---
title: Number
sidebar_label: number
---

# Number

**Type:** `number`
**Category:** Basic Input

## Description

Numeric input field with optional min/max constraints.

## Screenshot

![Number](/img/params/number.png)

## Basic Usage

```php
array(
    "type" => "number",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => 0,
    "min" => 0,
    "max" => 100,
    "step" => 1,
    "suffix" => "px",
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"number"` |
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
| `min` | Integer | - | Minimum allowed value |
| `max` | Integer | - | Maximum allowed value |
| `step` | Integer/Float | `1` | Increment/decrement step value when using up/down arrows |
| `suffix` | String | - | Unit suffix displayed after the value (e.g., `"px"`, `"%"`, `"em"`, `"ms"`) |

**Example:**
```php
array(
    "type" => "number",
    "param_name" => "margin",
    "value" => 10,
    "min" => 0,
    "max" => 100,
    "step" => 5,
    "suffix" => "px",
)
```

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_number');
function my_element_with_number() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "number",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ),
        ),
    ));
}
```

