---
title: Animation Style
sidebar_label: animation_style
---

# Animation Style

**Type:** `animation_style`
**Category:** Layout & Styling

## Description

CSS animation selector from predefined animation styles.

## Screenshot

![Animation Style](/img/params/animation-style.png)

## Basic Usage

```php
array(
    "type" => "animation_style",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
)
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"animation_style"` |
| `heading` | String | Label shown in the editor interface |
| `param_name` | String | **Required.** Parameter name used in shortcode |
| `value` | Mixed | Default value for the parameter |
| `description` | String | Help text shown below the field |
| `group` | String | Tab/group name to organize parameters |
| `weight` | Integer | Display order (higher = shows first) |
| `edit_field_class` | String | CSS class for field width (e.g., "vc_col-sm-6") |
| `dependency` | Array | Show/hide based on other field values |
| `admin_label` | Boolean | Show value in element title bar |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_animation_style');
function my_element_with_animation_style() {{
    vc_map(array(
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => array(
            array(
                "type" => "animation_style",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ),
        ),
    ));
}
```

