---
title: Link
sidebar_label: link
---

# Link

**Type:** `link`

## Description

Simple link input field.

## Screenshot

![Link](/img/params/link.png)

## Basic Usage

```php
[
    "type" => "link",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"link"` |
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

## Type-Specific Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`is_title` | Boolean | `true` | Whether to show the title option |
| &nbsp;&nbsp;&nbsp;&nbsp;`is_nofollow` | Boolean | `true` | Whether to show the nofollow option |
| &nbsp;&nbsp;&nbsp;&nbsp;`is_target` | Boolean | `true` | Whether to show the target option |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_link');
function my_element_with_link() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "link",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
                "settings" => [
                    "is_title" => true,
                    "is_nofollow" => true,
                    "is_target" => true,
                ],
            ],
        ],
    ]);
}
```

