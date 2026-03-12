---
sidebar_position: 1
---

# vc_frontend_editor_iframe_url

This filter may be handy if you want to change transfer protocol. E.g. from http to https.

```php
<?php
add_filter('vc_frontend_editor_iframe_url', 'change_frontend_editor_iframe_url');
function change_frontend_editor_iframe_url($url) {
  return str_replace("http://", "https://", $url);
}
?>
```
