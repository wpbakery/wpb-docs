---
sidebar_position: 1
---

# File/folder structure

File & Folder Structure (Example)
Here's a typical setup inside a custom plugin or theme where you can safely add your WPBakery elements:

```plaintext
my-wpbakery-extension/
├── includes/
│   └── my-custom-elements/
│       ├── element-button.php
│       └── element-pricing-table.php
├── assets/
│   ├── js/
│   └── css/
├── my-wpbakery-extension.php
└── readme.txt
```
In your main plugin file:

```php
add_action('vc_before_init', 'my_custom_vc_elements');
    function my_custom_vc_elements() {
    require_once plugin_dir_path(__FILE__) . 'includes/my-custom-elements/element-button.php';
}
```
