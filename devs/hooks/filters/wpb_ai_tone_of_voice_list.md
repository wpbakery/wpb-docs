---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
sidebar_position: 9
---

# wpb_ai_tone_of_voice_list

Filters the list of tone-of-voice options displayed in the "Tone of voice" dropdown of the WPBakery AI popup. The selected tone is sent to the AI API to influence the writing style of generated content.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | array | An associative array of tone options where keys are internal identifiers (e.g., `formal`, `friendly`, `professional`) and values are translated display labels. The default list includes over 60 tones such as Approachable, Bold, Casual, Formal, Professional, etc. |
| `$ai_element_type` | string | The current element parameter type (e.g., `textarea_html`, `textarea`, `textfield`) for which the AI popup is being rendered. |

## Return

`array` -- The filtered associative array of tone-of-voice options. The list is automatically sorted alphabetically after filtering.

## Usage

```php
<?php
add_filter( 'wpb_ai_tone_of_voice_list', 'my_custom_ai_tones', 10, 2 );

function my_custom_ai_tones( $list, $ai_element_type ) {
    // Limit tones to a curated set for all element types
    return [
        'professional' => esc_html__( 'Professional', 'my-plugin' ),
        'friendly'     => esc_html__( 'Friendly', 'my-plugin' ),
        'formal'       => esc_html__( 'Formal', 'my-plugin' ),
        'casual'       => esc_html__( 'Casual', 'my-plugin' ),
        'corporate'    => esc_html__( 'Corporate', 'my-plugin' ),
    ];
}
```

## Source

File: `modules/ai/class-vc-ai-modal-controller.php`
