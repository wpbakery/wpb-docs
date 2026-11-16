---
sidebar_position: 18
---

# vc_get_shortcode()

SINCE 4.4.3

```php
<?php vc_get_shortcode($tag)?>
```

Get the settings of the mapped shortcode.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $tag | String | Yes | The base tag name of the element shortcode. |

### Example

You can return the shortcode settings previously mapped with [vc_map()](/devs/inner-api/vc_map) function. For example, it can be useful if you want to create a new element with the same parameters that already exist, but with some modified settings.

```php
<?php
add_action( 'vc_after_init', 'custom_vc_after_init' );

function custom_vc_after_init() {
   $params = vc_get_shortcode('vc_copyright');

   $params['name'] = 'Copyright Update';
   $params['base'] = 'copyright_update';
   array_pop($params['params']);

   vc_map( $params );
}
?>
```

### Code Explanation

We created a new element, "Copyright Update" with the same parameters as the already existing "Copyright" element. But without the 'Design Options' tab.
