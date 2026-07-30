---
title: Button group
sidebar_label: button_group
---

# Button group

**Type:** `button_group`

## Description

Group of buttons for selecting one option from multiple choices.

## Screenshot

![Button Group](/img/params/button-group.png)

## Basic Usage

```php
[
    "type" => "button_group",
    "heading" => __("Field Label", "your-text-domain"),
    "param_name" => "your_param_name",
    "value" => [
        "option_1" => [
            "label" => __("Option 1", "your-text-domain"),
            "title" => __("Option 1", "your-text-domain"),
        ],
        "option_2" => [
            "label" => __("Option 2", "your-text-domain"),
            "title" => __("Option 2", "your-text-domain"),
        ],
    ],
    "std" => "option_1",
    "description" => __("Field description", "your-text-domain"),
]
```

## Common Parameters

All param types support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | String | **Required.** Must be `"button_group"` |
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
| `deprecated` | String | Version in which the param was deprecated |

## Type-Specific Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | Array | - | Associative array of options. Each key is the value saved to the shortcode, each item is an array with `label` and `title` keys (see [Option format](#option-format)) |
| `std` | String | - | Default param value. If omitted, the first option is selected |
| `settings` | Array | - | Configuration array with the following options: |
| &nbsp;&nbsp;&nbsp;&nbsp;`icon_size` | String | `"12px"` | Size of button icons (e.g., `"20px"`, `"1em"`, `"1rem"`) |

## Option format

Each option in the `value` array is defined as `"saved_value" => ["label" => ..., "title" => ...]`:

- `label` — what is rendered inside the button.
- `title` — tooltip text shown on hover. For icon and image buttons it is also used as the accessible label, so always provide it.

The `label` is auto-detected and rendered as one of the following types:

| Label value | Rendered as |
|-------------|-------------|
| `vc-c-*` | WPBakery font icon (e.g., `"vc-c-alignment-left"`) |
| `dashicons-*` | WordPress Dashicon (e.g., `"dashicons-admin-site"`) |
| Image URL ending in `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp` | Image button |
| Anything else | Text button |

```php
"value" => [
    "left" => [
        "label" => "vc-c-alignment-left", // WPBakery font icon
        "title" => __("Left", "your-text-domain"),
    ],
    "custom" => [
        "label" => "https://example.com/my-icon.svg", // image
        "title" => __("Custom", "your-text-domain"),
    ],
    "none" => [
        "label" => __("None", "your-text-domain"), // text
        "title" => __("None", "your-text-domain"),
    ],
],
```

## Presets

Ready-to-use presets that follow the WPBakery design system. Copy the code into the `params` array of your element and adjust `param_name`, `heading`, and `std` as needed. These are the same configurations WPBakery uses for its own elements.

### Button

Plain text buttons for selecting one option from a small set of choices.

![Button group button preset](/img/params/button-group-preset-button.png)

```php
[
    "type" => "button_group",
    "heading" => __("Style", "your-text-domain"),
    "param_name" => "style",
    "value" => [
        "default" => [
            "label" => __("Default", "your-text-domain"),
            "title" => __("Default", "your-text-domain"),
        ],
        "custom" => [
            "label" => __("Custom", "your-text-domain"),
            "title" => __("Custom", "your-text-domain"),
        ],
    ],
    "std" => "default",
]
```

### Size

Size scale from extra small to extra large. Short labels with descriptive tooltips. Use the built-in `vc_config()->get_size_param_value()` helper — pass an array of keys to keep a subset of the sizes.

![Button group size preset](/img/params/button-group-preset-size.png)

```php
[
    "type" => "button_group",
    "heading" => __("Size", "your-text-domain"),
    "param_name" => "size",
    "value" => vc_config()->get_size_param_value(), // all five sizes
    // "value" => vc_config()->get_size_param_value(["sm", "md", "lg"]), // only S, M, L
    "std" => "md",
]
```

<details>
<summary>The `value` array returned by the helper</summary>

```php
"value" => [
    "xs" => [
        "label" => __("XS", "your-text-domain"),
        "title" => __("Extra Small", "your-text-domain"),
    ],
    "sm" => [
        "label" => __("S", "your-text-domain"),
        "title" => __("Small", "your-text-domain"),
    ],
    "md" => [
        "label" => __("M", "your-text-domain"),
        "title" => __("Medium", "your-text-domain"),
    ],
    "lg" => [
        "label" => __("L", "your-text-domain"),
        "title" => __("Large", "your-text-domain"),
    ],
    "xl" => [
        "label" => __("XL", "your-text-domain"),
        "title" => __("Extra Large", "your-text-domain"),
    ],
],
```

</details>

### Alignment

Text/content alignment with icon buttons. Use the built-in `vc_config()->get_text_align_param_value()` helper — pass an array of keys to exclude options that do not apply to your element.

![Button group alignment preset](/img/params/button-group-preset-alignment.png)

```php
[
    "type" => "button_group",
    "heading" => __("Alignment", "your-text-domain"),
    "param_name" => "align",
    "value" => vc_config()->get_text_align_param_value(), // left, center, right, justify
    // "value" => vc_config()->get_text_align_param_value(["justify"]), // without justify
    "std" => "left",
]
```

<details>
<summary>The `value` array returned by the helper</summary>

```php
"value" => [
    "left" => [
        "label" => "vc-c-alignment-left",
        "title" => __("Left", "your-text-domain"),
    ],
    "center" => [
        "label" => "vc-c-alignment-center",
        "title" => __("Center", "your-text-domain"),
    ],
    "right" => [
        "label" => "vc-c-alignment-right",
        "title" => __("Right", "your-text-domain"),
    ],
    "justify" => [
        "label" => "vc-c-alignment",
        "title" => __("Justify", "your-text-domain"),
    ],
],
```

</details>

### Horizontal position

Horizontal placement of content inside its container. Remove the `between` option if space-between does not apply to your element.

![Button group horizontal position preset](/img/params/button-group-preset-horizontal-position.png)

```php
[
    "type" => "button_group",
    "heading" => __("Horizontal position", "your-text-domain"),
    "param_name" => "horizontal_position",
    "value" => [
        "left" => [
            "label" => "vc-c-justify-left",
            "title" => __("Left", "your-text-domain"),
        ],
        "center" => [
            "label" => "vc-c-justify-center",
            "title" => __("Center", "your-text-domain"),
        ],
        "right" => [
            "label" => "vc-c-justify-right",
            "title" => __("Right", "your-text-domain"),
        ],
        "between" => [
            "label" => "vc-c-justify-between",
            "title" => __("Space between", "your-text-domain"),
        ],
    ],
    "std" => "left",
]
```

### Vertical position

Vertical placement of content inside its container. Use the built-in `vc_config()->get_vertical_position_param_value()` helper — pass an array of keys to exclude options that do not apply to your element.

![Button group vertical position preset](/img/params/button-group-preset-vertical-position.png)

```php
[
    "type" => "button_group",
    "heading" => __("Vertical position", "your-text-domain"),
    "param_name" => "vertical_position",
    "value" => vc_config()->get_vertical_position_param_value(), // Default, top, middle, bottom
    // "value" => vc_config()->get_vertical_position_param_value([""]), // without Default
    "std" => "",
]
```

<details>
<summary>The `value` array returned by the helper</summary>

```php
"value" => [
    "" => [
        "label" => "vc-c-justify-vertical-between",
        "title" => __("Default", "your-text-domain"),
    ],
    "top" => [
        "label" => "vc-c-justify-vertical-top",
        "title" => __("Top", "your-text-domain"),
    ],
    "middle" => [
        "label" => "vc-c-justify-vertical-center",
        "title" => __("Middle", "your-text-domain"),
    ],
    "bottom" => [
        "label" => "vc-c-justify-vertical-bottom",
        "title" => __("Bottom", "your-text-domain"),
    ],
],
```

</details>

### Direction

Direction selection with arrow icons.

![Button group direction preset](/img/params/button-group-preset-direction.png)

```php
[
    "type" => "button_group",
    "heading" => __("Direction", "your-text-domain"),
    "param_name" => "direction",
    "value" => [
        "up" => [
            "label" => "vc-c-arrow-up",
            "title" => __("Up", "your-text-domain"),
        ],
        "down" => [
            "label" => "vc-c-arrow-down",
            "title" => __("Down", "your-text-domain"),
        ],
        "left" => [
            "label" => "vc-c-arrow-left",
            "title" => __("Left", "your-text-domain"),
        ],
        "right" => [
            "label" => "vc-c-arrow-right",
            "title" => __("Right", "your-text-domain"),
        ],
    ],
    "std" => "up",
]
```

:::info
The `vc_config()` helper functions are available since WPBakery Page Builder 9.0. For presets without a helper (Button, Horizontal position, Direction), copy the full `value` array as shown above.
:::

## Complete Example

```php
<?php
add_action('vc_before_init', 'my_testimonial_element');
function my_testimonial_element() {
    vc_map([
        "name" => __("Testimonial", "domain"),
        "base" => "my_testimonial",
        "category" => __("Content", "domain"),
        "params" => [
            [
                // Custom options with text buttons.
                "type" => "button_group",
                "heading" => __("Layout", "domain"),
                "param_name" => "layout",
                "description" => __("Select testimonial layout.", "domain"),
                "value" => [
                    "card" => [
                        "label" => __("Card", "domain"),
                        "title" => __("Card layout", "domain"),
                    ],
                    "inline" => [
                        "label" => __("Inline", "domain"),
                        "title" => __("Inline layout", "domain"),
                    ],
                    "quote" => [
                        "label" => __("Quote", "domain"),
                        "title" => __("Quote layout", "domain"),
                    ],
                ],
                "std" => "card",
            ],
            [
                // Preset options via a built-in helper.
                "type" => "button_group",
                "heading" => __("Avatar size", "domain"),
                "param_name" => "avatar_size",
                "description" => __("Select avatar size.", "domain"),
                "value" => vc_config()->get_size_param_value(["sm", "md", "lg"]),
                "std" => "md",
            ],
        ],
    ]);
}
```

