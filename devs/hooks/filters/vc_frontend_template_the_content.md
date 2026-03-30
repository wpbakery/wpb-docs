---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_template_the_content

Filters the parsed template content before it is output in the frontend editor template view. The content has already been processed through `parseShortcodesString()` at this point.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$content` | `string` | The parsed shortcode content from the template, ready for display in the frontend editor. |

## Usage

```php
add_filter( 'vc_frontend_template_the_content', 'wpb_modify_frontend_template_content' );

function wpb_modify_frontend_template_content( $content ) {
    // Add a wrapper around the template content
    return '<div class="template-content-wrapper">' . $content . '</div>';
}
```

## Source

File: `include/templates/editors/frontend_template.tpl.php`
