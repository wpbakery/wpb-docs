---
title: Font Container
sidebar_label: font_container
---

# Font Container

**Type:** `font_container`

## Description

Typography settings including font family, size, color, and alignment.

## Screenshot

![Font Container](/img/params/font-container.png)

## Basic Usage

```php
[
    "type" => "font_container",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"font_container"` |
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
| &nbsp;&nbsp;&nbsp;&nbsp;`fields` | Array | - | Font container fields to display. Possible values: `tag`, `text_align`, `font_size`, `line_height`, `color`, `font_family`, `font_style`, `tag_description`, `text_align_description`, `font_size_description`, `line_height_description`, `color_description`, `font_family_description`, `font_style_description` |

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_element_with_font_container');
function my_element_with_font_container() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "font_container",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
                "settings" => [
                    "fields" => [
                        "tag",
                        "text_align",
                        "font_size",
                        "line_height",
                        "color",
                    ],
                ],
            ],
        ],
    ]);
}
```

