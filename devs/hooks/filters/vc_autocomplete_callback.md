---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_autocomplete_\{tag\}_\{param_name\}_callback

Provides autocomplete suggestions for a specific shortcode parameter via AJAX. The filter name is dynamic — replace `{tag}` with the shortcode base and `{param_name}` with the parameter name.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$query` | string | The search query string from the user. |
| `$tag` | string | The shortcode base tag. |
| `$param_name` | string | The parameter name. |

## Usage

```php
<?php
add_filter( 'vc_autocomplete_my_shortcode_my_param_callback', 'my_custom_function', 10, 3 );

function my_custom_function( $query, $tag, $param_name ) {
    // Provide custom suggestions for a param
    $suggestions = [];
    $posts = get_posts( [ 's' => $query, 'posts_per_page' => 10 ] );

    foreach ( $posts as $post ) {
        $suggestions[] = [
            'value' => $post->ID,
            'label' => $post->post_title,
        ];
    }

    return $suggestions;
}
```

## Source

File: `include/params/autocomplete/autocomplete.php`
