---
title: Textarea Raw Html
sidebar_label: textarea_raw_html
---

# Textarea Raw Html

**Type:** `textarea_raw_html`

## Description

Text area where content is encoded to base64 for storing raw HTML/JS.

## Screenshot

![Textarea Raw HTML](/img/params/textarea-raw-html.png)

## Basic Usage

```php
[
    "type" => "textarea_raw_html",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"textarea_raw_html"` |
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
add_action('vc_before_init', 'my_element_with_textarea_raw_html');
function my_element_with_textarea_raw_html() {
    vc_map([
        "name" => __("My Element", "domain"),
        "base" => "my_element",
        "category" => __("My Category", "domain"),
        "params" => [
            [
                "type" => "textarea_raw_html",
                "heading" => __("Field Label", "domain"),
                "param_name" => "param_name",
                "description" => __("Field description", "domain"),
            ],
        ],
    ]);
}
```

