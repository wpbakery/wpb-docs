---
title: Parameter Types
sidebar_label: Parameter Types
sidebar_position: 1
---

# vc_map() Parameter Types

This section documents all available parameter types that can be used in the `params` array when calling `vc_map()`.

Each parameter type provides a different input field in the WPBakery Page Builder element settings window.

## Quick Reference

### Basic Input Types

| Type | Description |
|------|-------------|
| [textfield](textfield) | Single-line text input field |
| [textarea](textarea) | Multi-line text input area |
| [textarea_html](textarea_html) | WYSIWYG editor (one per element) |
| [textarea_safe](textarea_safe) | Textarea with HTML encoding |
| [textarea_raw_html](textarea_raw_html) | Base64 encoded textarea for raw HTML/JS |
| [textarea_ace](textarea_ace) | Code editor with syntax highlighting |
| [number](number) | Numeric input with min/max |
| [exploded_textarea](exploded_textarea) | Textarea with comma-separated output |

### Selection Types

| Type | Description |
|------|-------------|
| [dropdown](dropdown) | Dropdown select with options |
| [checkbox](checkbox) | Single or multiple checkboxes |
| [radio](radio) | Radio buttons for single selection |
| [toggle](toggle) | Toggle switch (on/off) |
| [button_group](button_group) | Button group selection |

### Media & Assets

| Type | Description |
|------|-------------|
| [attach_image](attach_image) | Single image from media library |
| [attach_images](attach_images) | Multiple images from media library |
| [colorpicker](colorpicker) | Color picker (hex values) |
| [iconpicker](iconpicker) | Icon picker from icon libraries |

### WordPress Integration

| Type | Description |
|------|-------------|
| [posttypes](posttypes) | Checkboxes of available post types |
| [taxonomies](taxonomies) | Checkboxes of available taxonomies |
| [widgetised_sidebars](widgetised_sidebars) | Dropdown of widget areas |
| [gutenberg](gutenberg) | Gutenberg block selector |

### Advanced Input

| Type | Description |
|------|-------------|
| [autocomplete](autocomplete) | Input with autocomplete suggestions |
| [vc_link](vc_link) | Link builder with URL, title, target |
| [link](link) | Simple link input |
| [href](href) | URL input with attributes |
| [tag_input](tag_input) | Tag management field |

### Layout & Styling

| Type | Description |
|------|-------------|
| [css_editor](css_editor) | Visual CSS editor (Design Options) |
| [font_container](font_container) | Typography settings |
| [google_fonts](google_fonts) | Google Fonts selector |
| [animation_style](animation_style) | CSS animation picker |

### Complex Types

| Type | Description |
|------|-------------|
| [param_group](param_group) | Repeatable parameter groups |
| [loop](loop) | WordPress query builder |
| [sorted_list](sorted_list) | Sortable list items |
| [options](options) | Custom options field |

### Special Types

| Type | Description |
|------|-------------|
| [tab_id](tab_id) | Tab identifier for tabbed elements |
| [el_id](el_id) | Element ID field |
| [custom_markup](custom_markup) | Custom HTML markup |
| [linked_fields](linked_fields) | Dependent field linking |
| [params_preset](params_preset) | Predefined parameter presets |

## Common Parameters

All parameter types support these common attributes:

```php
array(
    "type"              => "param_type",        // Required: Parameter type
    "heading"           => "Field Label",       // Field label in UI
    "param_name"        => "param_name",        // Required: Parameter name for shortcode
    "value"             => "default_value",     // Default value
    "description"       => "Help text",         // Help text below field
    "group"             => "Tab Name",          // Group parameters in tabs
    "weight"            => 10,                  // Display order (higher shows first)
    "edit_field_class"  => "vc_col-sm-6",      // Field width class
    "admin_label"       => true,                // Show value in element title
    "dependency"        => array(               // Conditional display
        "element"   => "other_param",
        "value"     => array("value1", "value2")
    ),
)
```

## Dependency System

You can show/hide parameters based on other field values:

```php
"dependency" => array(
    "element"   => "field_name",      // Field to watch
    "value"     => array("val1"),     // Show if field has these values
    // OR
    "not_empty" => true,              // Show if field is not empty
    // OR
    "value_includes" => "item",       // Show if comma-separated value includes item
)
```

