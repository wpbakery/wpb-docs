---
id: use-param-section
title: Use param section in elements
sidebar_label: Use param section in elements
 
hide_table_of_contents: true
slug: /developer-tutorials/use-param-section-in-elements
---

# Use param section in elements

Inside the “Edit Element” modal, attributes can be divided into sections to make them more structured and logical.

Each section is separated from the others by a delimiter in the UI/UX. On the HTML level, every section also has its own `<div>` wrapper.

## Usage

Basic example:

```php
add_action( 'vc_before_init', 'wpb_dev_example_basic_element' );
if ( ! function_exists( 'wpb_dev_example_basic_element' ) ) :
    function wpb_dev_example_basic_element() {
        wpb_map([
            'name'        => __( 'Basic', 'dev-example' ),
            'base'        => 'wpb_dev_example_basic_element',
            'description' => __( 'Box with title and content', 'dev-example' ),
            'category'    => __( 'Test Elements', 'dev-example' ),
            'params'      => [
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test1',
                    'param_name' => 'test_1',
                    'section'    => 'foo',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test2',
                    'param_name' => 'test_2',
                    'section'    => 'foo',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test3',
                    'param_name' => 'test_3',
                    'section'    => 'bar',
                ],

                [
                    'type'       => 'textfield',
                    'heading'    => 'Test4',
                    'param_name' => 'test_4',
                    'section'    => 'bar',
                ],
            ]
        ]);
    }
endif;
```

You can combine params with sections and without sections. In this case, params without sections will be displayed after all other sections.

```php
add_action( 'vc_before_init', 'wpb_dev_example_basic_element' );
if ( ! function_exists( 'wpb_dev_example_basic_element' ) ) :
    function wpb_dev_example_basic_element() {
        wpb_map([
            'name'        => __( 'Basic', 'dev-example' ),
            'base'        => 'wpb_dev_example_basic_element',
            'description' => __( 'Box with title and content', 'dev-example' ),
            'category'    => __( 'Test Elements', 'dev-example' ),
            'params'      => [
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test1',
                    'param_name' => 'test_1',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test3',
                    'param_name' => 'test_3',
                    'section'    => 'bar',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test2',
                    'param_name' => 'test_2',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test4',
                    'param_name' => 'test_4',
                    'section'    => 'bar',
                ],
            ]
        ]);
    }
endif;
```

You can specify order of sections by using the additional `sections` parameter with array value.

```php
add_action( 'vc_before_init', 'wpb_dev_example_basic_element' );
if ( ! function_exists( 'wpb_dev_example_basic_element' ) ) :
    function wpb_dev_example_basic_element() {
        wpb_map([
            'name'        => __( 'Basic', 'dev-example' ),
            'base'        => 'wpb_dev_example_basic_element',
            'description' => __( 'Box with title and content', 'dev-example' ),
            'category'    => __( 'Test Elements', 'dev-example' ),
            'params'      => [
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test1',
                    'param_name' => 'test_1',
                    'section'    => 'foo',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test2',
                    'param_name' => 'test_2',
                    'section'    => 'foo',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test3',
                    'param_name' => 'test_3',
                    'section'    => 'bar',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test4',
                    'param_name' => 'test_4',
                    'section'    => 'bar',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test5',
                    'param_name' => 'test_5',
                    'section'    => 'tor',
                ],
                [
                    'type'       => 'textfield',
                    'heading'    => 'Test5',
                    'param_name' => 'test_5',
                    'section'    => 'tor',
                ],
            ],
            'sections' => [
               'foo',
               'tor',
               'bar',
            ],
        ]);
    }
endif;
```


