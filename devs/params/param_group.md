---
title: Param Group
sidebar_label: param_group
---

# Param Group

**Type:** `param_group`

## Description

Repeatable group of parameters for creating multiple similar entries.

## Screenshot

![Param Group](/img/params/param-group.png)

## Basic Usage

```php
[
    "type" => "param_group",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"param_group"` |
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
| `params` | Array | - | **Required.** Array of sub-parameters |
| `value` | String | - | JSON encoded default values |
| `callbacks` | Array | - | JavaScript callbacks for interactions |

### Nested Parameters

```php
"params" => [
    [
        "type" => "textfield",
        "heading" => __("Title", "domain"),
        "param_name" => "title",
    ],
    [
        "type" => "textarea",
        "heading" => __("Description", "domain"),
        "param_name" => "description",
    ],
]
```

See [Use Param Group in Elements](/devs/developers-how-tos/use-param-group-in-elements) for detailed guide.

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_param_group');
function my_element_with_param_group() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "param_group",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ],
        ],
    ]);
}
```

