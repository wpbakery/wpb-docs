---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_vc_grid_data_response

Filters the AJAX response output of a WPBakery Grid element when data is loaded or paginated via AJAX. This is called after `renderAjax()` processes the grid data.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$response` | `string` | The rendered HTML response from the grid's `renderAjax()` method, containing the grid items markup. |

## Usage

```php
add_filter( 'vc_get_vc_grid_data_response', 'wpb_modify_grid_ajax_response' );

function wpb_modify_grid_ajax_response( $response ) {
    // Append tracking markup to the grid response
    $response .= '<div class="grid-load-tracking" data-event="grid_loaded"></div>';
    return $response;
}
```

## Source

File: `include/autoload/hooks/hook-vc-grid.php`
