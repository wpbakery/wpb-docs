---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_render_settings_preset_title_prompt

Filters the template file path used to render the preset title prompt dialog. This prompt is shown when a user saves a new preset or template and needs to enter a title. Use this to replace the prompt template with a custom one.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The relative template file path. Default: `'editors/partials/prompt-presets.tpl.php'` for presets or `'editors/partials/prompt-templates.tpl.php'` for templates. |

## Usage

```php
<?php
add_filter( 'vc_render_settings_preset_title_prompt', 'my_custom_title_prompt', 10, 1 );

function my_custom_title_prompt( $template ) {
    // Use a custom prompt template
    return 'editors/partials/my-custom-prompt.tpl.php';
}
```

## Source

File: `include/autoload/hooks/vc-settings-presets.php`
