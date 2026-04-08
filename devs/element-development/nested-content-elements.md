---
sidebar_position: 4
---

# Nested content elements
If you are looking for a way to create content elements with "nested" structure, [have a look at this example](#).

## Example
In this example you will be guided throw the whole process of adding your own shortcode to the WPBakery Page Builder editor.

We also prepared a nice and clean "starter" for you, feel free to use it as a starting point for your own WPBakery Page Builder shortcode.

### Add existing shortcode
For example, you have your own shortcode `[bartag]` with 2 attributes: `foo` and `bar`. *More about Shortcode API read in [WordPress Codex](http://codex.wordpress.org/Shortcode_API).*

```php
<?php
// [bartag foo="foo-value"]
add_shortcode( 'bartag', 'bartag_func' );
function bartag_func( $atts ) {
 extract( shortcode_atts( [
  'foo' => 'something'
 ], $atts ) );

 return "foo = {$foo}";
}
?>
```

Now lets call `vc_map()` function from our *functions.php* file with an array of special attributes to describe attributes of our shortcode.

:::info
Important: `vc_map()` call should be hooked on WPBakery Page Builder `vc_before_init` action.
:::

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );

function your_name_integrateWithVC() {
    vc_map( [
        "name" => __( "Bar tag test", "my-text-domain" ),
        "base" => "bartag",
        "class" => "",
        "category" => __( "Content", "my-text-domain"),
        'admin_enqueue_js' => [get_template_directory_uri().'/vc_extend/bartag.js'],
        'admin_enqueue_css' => [get_template_directory_uri().'/vc_extend/bartag.css'],
        "params" => [
            [
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => __( "Text", "my-text-domain" ),
                "param_name" => "foo",
                "value" => __( "Default param value", "my-text-domain" ),
                "description" => __( "Description for foo param.", "my-text-domain" )
            ]
        ]
    ] );
}
?>
```

As you can see it has an array of params. This list represents shortcode tag as base and params list which will be editable with settings form inside WPBakery Page Builder editor.

In params array we have only one element as array with list of params. `param_name` must be the same as your parameter name.

Next most important attribute of params is `type`. There are a lot of predefined types (all of them you can see [here](/devs/element-development/params-array#available-type-values)). For foo attribute we'll use `textfield` which is simple input field. Add `heading` and `description` attributes for human friendly title and description of your param. Default attribute value can be added in param attribute `value`.

After adding "mapping", you will see your shortcode inside content elements list in WPBakery Page Builder editing mode and ability to control access to this shortcode in WPBakery Page Builder settings.

## Advanced example

Let's say you want to add a new special param to your shortcode: let's call it `color`. First of all, modify your shortcode hook function.

```php
<?php
add_shortcode( 'bartag', 'bartag_func' );

function bartag_func( $atts ) {
    extract( shortcode_atts( [
        'foo' => 'something',
        'color' => '#FFF'
    ], $atts ) );

    return "<div style='color:{$color};'>foo = {$foo}</div>";
}
?>
```
Now our shortcode has `color` param, which it will use as a style for our div on the site's front end. Now we can call this shortcode with `[bartag foo="foo-value" color="#000000"]`.

To make color attribute editable in WPBakery Page Builder editing mode we should change mapping settings by adding new param in `params` list with `param_name` – `color` and `type` – `colorpicker`. Easy as that!

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
    vc_map( [
        "name" => __( "Bar tag test", "my-text-domain" ),
        "base" => "bartag",
        "class" => "",
        "category" => __( "Content", "my-text-domain"),
        'admin_enqueue_js' => [get_template_directory_uri().'/vc_extend/bartag.js'],
        'admin_enqueue_css' => [get_template_directory_uri().'/vc_extend/bartag.css'],
        "params" => [
            [
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => __( "Text", "my-text-domain" ),
                "param_name" => "foo",
                "value" => __( "Default param value", "my-text-domain" ),
                "description" => __( "Description for foo param.", "my-text-domain" )
            ],
            [
                "type" => "colorpicker",
                "class" => "",
                "heading" => __( "Text color", "my-text-domain" ),
                "param_name" => "color",
                "value" => '#FF0000', //Default Red color
                "description" => __( "Choose text color", "my-text-domain" )
            ]
        ]
    ] );
}
?>
```

Now you should see new color picker field in WPBakery Page Builder edit screen for our `[bartag]` shortcode.

Some shortcodes has content block. For example: `[bartag foo="foo-value" color="#000000"]Here goes content[/bartag]`. You can create wysiwyg editor field or simple plain textarea field inside settings form of your shortcode.

:::info
Important: Only one wysiwyg editor per content element is allowed, and it should have `param_name` equal to `content`.
:::

Let's change your shortcode registration hook.

```php
<?php
add_shortcode( 'bartag', 'bartag_func' );
function bartag_func( $atts, $content = null ) { // New function parameter $content is added!
    extract( shortcode_atts( [
        'foo' => 'something',
        'color' => '#FFF'
    ], $atts ) );

    $content = wpb_js_remove_wpautop($content, true); // fix unclosed/unwanted paragraph tags in $content

    return "<div style='color:{$color};' data-foo='${foo}'>{$content}</div>";
}
?>
```

Now update `vc_map()` function call, and add new attribute to the params array. `vc_map()` now should look like this:

```php
<?php
add_action( 'vc_before_init', 'your_name_integrateWithVC' );
function your_name_integrateWithVC() {
    vc_map( [
        "name" => __( "Bar tag test", "my-text-domain" ),
        "base" => "bartag",
        "class" => "",
        "category" => __( "Content", "my-text-domain"),
        'admin_enqueue_js' => [get_template_directory_uri().'/vc_extend/bartag.js'],
        'admin_enqueue_css' => [get_template_directory_uri().'/vc_extend/bartag.css'],
        "params" => [
            [
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => __( "Text", "my-text-domain" ),
                "param_name" => "foo",
                "value" => __( "Default param value", "my-text-domain" ),
                "description" => __( "Description for foo param.", "my-text-domain" )
            ],
            [
                "type" => "colorpicker",
                "class" => "",
                "heading" => __( "Text color", "my-text-domain" ),
                "param_name" => "color",
                "value" => '#FF0000', //Default Red color
                "description" => __( "Choose text color", "my-text-domain" )
            ],
            [
                "type" => "textarea_html",
                "holder" => "div",
                "class" => "",
                "heading" => __( "Content", "my-text-domain" ),
                "param_name" => "content", // Important: Only one textarea_html param per content element allowed and it should have "content" as a "param_name"
                "value" => __( "<p>I am test text block. Click edit button to change this text.</p>", "my-text-domain" ),
                "description" => __( "Enter your content.", "my-text-domain" )
            ]
        ]
    ] );
}
?>
```

This will add new attribute to our `[bartag]` shortcode and on the edit screen you will see TinyMCE WYSIWYG editor. So with few incremental steps we have taken our simple `[bartag]` shortcode to the whole new level.
