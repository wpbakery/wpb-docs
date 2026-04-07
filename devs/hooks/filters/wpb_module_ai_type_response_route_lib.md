---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 13
---

# wpb_module_ai_type_response_route_lib

Filters the routing configuration that maps element parameter types to their AI response handler classes and API endpoints. This configuration determines which PHP class processes the AI request, which method to call, and which API endpoint to use for each parameter type and content generation scenario.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$route_lib` | array | An associative array keyed by parameter type (e.g., `textarea_html`, `textfield`, `custom_css`). Each entry contains: `path` (string or array) -- file path to the handler class; `class` (string or array) -- handler class name; `method` (string) -- method to call on the handler; `endpoint` (string or array) -- API endpoint configuration with optional `default`, `length`, and `contentType` sub-keys for conditional routing. |

## Return

`array` -- The filtered routing configuration array.

## Usage

```php
<?php
add_filter( 'wpb_module_ai_type_response_route_lib', 'my_custom_ai_route' );

function my_custom_ai_route( $route_lib ) {
    // Add AI support for a custom parameter type
    $route_lib['my_custom_type'] = [
        'path'     => plugin_dir_path( __FILE__ ) . 'class-my-ai-generator.php',
        'class'    => 'My_Ai_Generator',
        'method'   => 'generate',
        'endpoint' => [
            'default'     => 'generate-text',
            'contentType' => [
                'improve_existing' => 'rewrite-text',
                'translate'        => 'translate-text',
            ],
        ],
    ];

    return $route_lib;
}
```

### Route configuration keys

Each parameter type entry supports the following keys:

| Key | Type | Description |
|-----|------|-------------|
| `path` | string or array | File path to the handler class. Use an array with `default` and `wpb-ai-element-id` keys for conditional loading based on field ID. |
| `class` | string or array | Handler class name. Supports the same conditional structure as `path`. |
| `method` | string | The method name to call on the handler class (typically `generate`). |
| `endpoint` | string or array | API endpoint name. When an array, supports `default` (fallback endpoint), `length` (keyed by word-count range), and `contentType` (keyed by content type identifier) for conditional endpoint selection. |

## Source

File: `modules/ai/class-vc-ai-api-connector.php`
