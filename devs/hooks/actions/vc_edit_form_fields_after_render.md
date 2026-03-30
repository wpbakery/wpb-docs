---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_fields_after_render

Fires after the element edit form fields are rendered. This hook runs after all parameter fields and their associated scripts have been output to the page, allowing you to append additional HTML or run custom logic after the form is built.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_edit_form_fields_after_render', 'wpb_after_edit_form_render' );

function wpb_after_edit_form_render() {
    // Add custom HTML or scripts after the edit form fields
    echo '<div class="my-custom-notice">';
    echo '<p>Custom notice below the element settings.</p>';
    echo '</div>';
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`
