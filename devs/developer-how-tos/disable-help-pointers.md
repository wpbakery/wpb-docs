---
id: disable-help-pointers
title: Disable instructional/help pointers
sidebar_label: Disable instructional/help pointers
sidebar_position: 16
hide_table_of_contents: true
slug: /developers-how-tos/disable-instructional-help-pointers
---

# Disable instructional/help pointers

It is possible to disable instructional/help pointers of WPBakery Page Builder which appears during the first usage of the plugin and after an update.

The pointers are divided into Frontend and Backend – it is allowed to disable all pointers or separately control Frontend and Backend. There are following actions available for disabling pointers:

## Disable all pointers

```php
<?php
add_action( 'vc_before_init', 'vc_remove_all_pointers' );
function vc_remove_all_pointers() {
 remove_action( 'admin_enqueue_scripts', 'vc_pointer_load' );
}
```

## Disable Backend pointers

```php
<?php
add_action( 'vc_before_init', 'vc_remove_be_pointers' );
function vc_remove_be_pointers() {
 remove_action( 'admin_init', 'vc_add_admin_pointer' );
}
```

## Disable Frontend pointers

```php
<?php
add_action( 'vc_before_init', 'vc_remove_fe_pointers' );
function vc_remove_fe_pointers() {
 remove_action( 'admin_init', 'vc_frontend_editor_pointer' );
}
```
