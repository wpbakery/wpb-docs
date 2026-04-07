---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_add_before_open_form_tag

Fires inside the opening `<form>` tag on WPBakery settings pages, after the `action` attribute but before the `method` attribute. Use this hook to add custom HTML attributes to the settings form element.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'wpb_add_before_open_form_tag', 'wpb_add_form_attributes' );

function wpb_add_form_attributes() {
    // Add custom attributes to the form tag
    echo ' data-custom-validation="true"';
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`
