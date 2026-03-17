---
title: Css Editor
sidebar_label: css_editor
---

# Css Editor

**Type:** `css_editor`
**Category:** Layout & Styling

## Description

Visual CSS editor for adding custom styles (Design Options tab).

## Basic Usage

```php
array(
    "type" => "css_editor",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"css_editor"` |
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

The CSS Editor doesn't require additional parameters beyond the common ones.

**Important:** By default, it creates a "Design Options" tab. To customize:

```php
"group" => __("Custom Tab Name", "domain")
```

See [Add Design Options Tab](/devs/developers-how-tos/add-design-options-tab-with-css-editor-to-your-element) for implementation details.

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_css_editor');
function my_element_with_css_editor() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "css_editor",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ),
        ),
    ));
}
```

