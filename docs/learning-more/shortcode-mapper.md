---
id: shortcode-mapper
title: Shortcode Mapper
sidebar_label: Shortcode Mapper
sidebar_position: 16
hide_table_of_contents: true
---

***Since 4.1***

Starting from WPBakery Page Builder version 4.1.0 it is possible to add 3rd party shortcodes by using build-in Shortcode Mapper which available under WP Dashboard -> WPBakery Page Builder -> My Shortcodes.

## Working with Shortcode Mapper

In order to add your own or any third party shortcode to the element list of WPBakery Page Builder using Shortcode Mapper you need to follow few simple steps described below.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/uTFYEmDn7nw?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="Working with Shortcode Mapper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Parsing Shortcodes

![Shortcode parsing](/img/screenshots/Shortcode_parse.png)

First, you need to parse your shortcode. Under "My Shortcodes" tab choose Map Shortcode in order to open parse window. In the input field you will need to copy sample of your shortcode. For example, you have a shortcode:

```php
[my_shortcode value="100" bgcolor="#8e8e8e" desc="Default values" cssanim="yes" size="50"]
```

All you need to do is paste this shortcode into input field and press "Parse shortcode". Do not be afraid of putting different sample values while parsing as you will be able to control all params and values later on.

## Changing Values of Your Shortcode

![Shortcode parameters](/img/screenshots/Shortcode_param.png)

Now when you have parsed your shortcode you can edit params and values according to necessary standards. First part of the shortcode description is **General information** which contains main **shortcode tag**, **category** which states where your shortcode will be displayed in element menu (default "My Shortcodes") and **description**.

If your shortcode have a content part you will need to activate it by checking **Include content param into shortcode**. This will trigger content param auto-add into the list of parameters.

In the **Shortcode parameters** area you can control all params of your shortcode – add them, edit, re-arrange or delete if you do not want your customers to use some of the params.

Each of the param contains **param name** which is actual parameter name according to syntax. **Heading**, which is used as a title in your shortcode element window. **Field type** – textfield, dropdown, text area or hidden – depending on your needs.

**Note:** Hidden field type means that this shortcode param will not be displayed in Element Parameters Window and will use Default value.

**Default value**, if you need any and **description** which will be displayed under field in your shortcode element window.
