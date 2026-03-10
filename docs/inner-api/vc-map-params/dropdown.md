---
title: Dropdown
sidebar_label: dropdown
---

# Dropdown

**Type:** `dropdown`
**Category:** Selection

## Description

Dropdown select field with predefined options.

## Basic Usage

```php
array(
    "type" => "dropdown",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => array(
        __("Option 1", "your-text-domain") => "value1",
        __("Option 2", "your-text-domain") => "value2",
        __("Option 3", "your-text-domain") => "value3",
    ),
    "std" => "value1", // Default value
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"dropdown"` |
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
| `value` | Array | - | **Required.** Array of dropdown options (associative or indexed array) |
| `std` | String | - | Default selected value |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`search` | Boolean | `false` | Enable search/filter functionality. Recommended for dropdowns with 10+ options |

**Value format examples:**
```php
// Associative array (recommended)
"value" => array(
    __("Red", "domain") => "red",
    __("Blue", "domain") => "blue",
)

// Simple indexed array (value used as label)
"value" => array("red", "blue", "green")

// With search enabled
"settings" => array(
    "search" => true,
)
```

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_dropdown');
function my_element_with_dropdown() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "dropdown",
                "heading" => __("Style", "domain"),
                "param_name" => "style",
                "value" => array(
                    __("Default", "domain") => "default",
                    __("Modern", "domain") => "modern",
                    __("Classic", "domain") => "classic",
                ),
                "std" => "default",
                "description" => __("Select element style", "domain"),
            ),
        ),
    ));
}
```

