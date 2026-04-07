---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_front_load_page_\{action\}

Dynamic hook fired when loading a frontend editor page action. The hook name is constructed dynamically using the `action` POST parameter value (e.g., `vc_front_load_page_my_custom_action`). This allows you to handle custom AJAX actions within the frontend editor context.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_front_load_page_my_custom_action', 'wpb_handle_custom_frontend_action' );

function wpb_handle_custom_frontend_action() {
    // Handle a custom frontend editor AJAX action
    $data = vc_post_param( 'data' );

    // Process the data and return a response
    wp_send_json_success( [
        'message' => 'Custom action processed successfully',
        'data' => $data,
    ] );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
