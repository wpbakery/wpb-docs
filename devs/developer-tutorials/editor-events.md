---
id: editor-events
title: Editor events
sidebar_label: Editor events
sidebar_position: 30
hide_table_of_contents: true
slug: /developer-tutorials/editor-events
---

# Editor events

This document explains the JavaScript events available in WPBakery Page Builder’s editor, allowing you to respond to user actions and editor state changes in real-time.

## Overview

WPBakery Page Builder triggers various JavaScript events throughout the editor lifecycle.

These events allow developers to:

- React to element additions/removals
- Execute code when elements are updated
- Customize editor behavior
- Initialize JavaScript plugins
- Validate element data
- Add custom interactions

## Event System

WPBakery uses a custom event system based on Backbone.js and jQuery.

Events are triggered on various objects:

- `window.vc` – Global VC object
- `vc.events` – Global event bus
- Element views – Individual element instances
- Editor frame – Frontend editor iframe

## Global Editor Events

### Document Ready Events

```js
/**
 * VC-specific ready event
 */

window.vc.events.on('app.render', function() {
 console.log('WPBakery editor rendered');
});
```


### Editor Initialization

```js
/**
 * Fires before editor initializes
 */
jQuery(window).on('vc_reload', function() {
 console.log('Editor is reloading');
});

/**
 * Fires after editor fully initializes
 */

window.vc.events.on('shortcodes:ready', function() {
 console.log('All shortcodes loaded and ready');
});

/**
 * Fires when frontend editor loads
 */

jQuery(window).on('vc_frontend_editor_loaded', function() {
 console.log('Frontend editor loaded');
});
```


## Element Lifecycle Events

### Element Addition

```js
/**
 * Fires when any element is added to the page
 */

window.vc.events.on('shortcodes:add', function(model) {
 console.log('Element added:', model.get('shortcode'));
 console.log('Element ID:', model.get('id'));
 console.log('Element params:', model.get('params'));
});

/**
 * Fires when specific element is added
 */

window.vc.events.on('shortcodes:vc_custom_element', function(model) {
 console.log('Custom element added:', model);
 // Initialize your element
 initializeCustomElement(model);
});

/**
 * Fires after element is rendered in the editor
 */

window.vc.events.on('shortcode:vc_custom_element:mounted', function($element) {
 console.log('Custom element mounted in DOM');
 // $element is jQuery object of the element wrapper
 $element.find('.custom-feature').customPlugin();
});
```


### Element Update

```js
/**
 * Fires when element parameters are updated
 */

window.vc.events.on('shortcodes:update', function(model) {
 console.log('Element updated:', model.get('shortcode'));
 console.log('New params:', model.get('params'));
});

/**
 * Fires when specific element is updated
 */

window.vc.events.on('shortcodeView:updated', function(view) {
 var model = view.model;
 console.log('Element view updated:', model.get('shortcode'));
 // Re-initialize plugins after update
 if (model.get('shortcode') === 'vc_custom_element') {
 reinitializeCustomElement(view);
 }
});

/**
 * Fires when element content is changed
 */

window.vc.events.on('shortcode:content_changed', function(model) {
 console.log('Element content changed');
 console.log('New content:', model.getParam('content'));
});
```


### Element Removal

```js
/**
 * Fires before element is removed
 */

window.vc.events.on('shortcodes:destroy', function(model) {
 console.log('Element being destroyed:', model.get('shortcode'));
 console.log('Element ID:', model.get('id'));
 // Clean up before removal
 cleanupCustomElement(model);
});

/**
 * Fires when specific element is destroyed
 */

window.vc.events.on('shortcode:vc_custom_element:destroy', function(model) {
 console.log('Custom element destroyed');
 // Destroy plugin instances, remove event listeners, etc.
 destroyCustomElementInstances(model.get('id'));
});
```


### Element Clone

```js
/**
 * Fires when element is cloned
 */
window.vc.events.on('shortcodes:clone', function(model) {
 console.log('Element cloned:', model.get('shortcode'));
 console.log('Original ID:', model.get('cloned_from'));
 console.log('New ID:', model.get('id'));
});
```


### Element Move

```js
/**
 * Fires when element is moved/reordered
 */
window.vc.events.on('shortcodes:move', function(model) {
 console.log('Element moved:', model.get('shortcode'));
});
```


## Edit Form Events

### Form Open/Close

```js
/**
 * Fires when element edit form opens
 */

window.vc.events.on('shortcode:edit_form:show', function(model) {
 console.log('Edit form opened for:', model.get('shortcode'));
});

/**
 * Fires when edit form closes
 */
window.vc.events.on('shortcode:edit_form:hide', function(model) {
 console.log('Edit form closed');
});

/**
 * Fires when edit form is rendered
 */

window.vc.events.on('edit_form_rendered', function($form) {
 console.log('Edit form rendered');
 // Initialize custom form fields
 $form.find('.custom-field').customFieldPlugin();
});
```


### Form Field Changes

```js
/**
 * Fires when any parameter changes in edit form
 */

jQuery(document).on('change', '[data-vc-shortcode-param-name]', function() {
 var $field = jQuery(this);
 var paramName = $field.data('vc-shortcode-param-name');
 var paramValue = $field.val();
 console.log('Parameter changed:', paramName, '=', paramValue);
});

/**
 * Fires when specific parameter changes
 */

jQuery(document).on('change', '[data-vc-shortcode-param-name="style"]', function() {
 var style = jQuery(this).val();
 console.log('Style changed to:', style);
 // Update preview
 updateStylePreview(style);
});
```


## Frontend Editor Events

### Window/Frame Events

```js
/**
 * Fires when frontend editor frame loads
 */

jQuery(window).on('vc_iframe_loaded', function() {
 console.log('Frontend editor iframe loaded');
});

/**
 * Fires when element is rendered in frontend editor
 */

window.vc.events.on('shortcode:vc_custom_element:frontend_render', function($element) {
 console.log('Element rendered in frontend editor');
 // Initialize in frontend context
 $element.find('.slider').slick();
});

/**
 * Access iframe content
 */

jQuery(window).on('vc_iframe_loaded', function() {
 var $iframe = jQuery('#vc_inline-frame');
 var iframeWindow = $iframe[0].contentWindow;
 var iframe$ = iframeWindow.jQuery;
 // Work with iframe content
 iframe$('.custom-element').each(function() {
 console.log('Element found in iframe');
 });
});
```


### Save Events

```js
/**
 * Fires before page content is saved
 */
window.vc.events.on('save:before', function() {

 console.log('Saving page...');

});

/**
 * Fires after page content is saved
 */

window.vc.events.on('save:success', function() {
 console.log('Page saved successfully');
});

/**
 * Fires if save fails
 */

window.vc.events.on('save:error', function(error) {
 console.error('Save failed:', error);
});
```


## Custom Parameter Events

### Dropdown/Select Events

```js
/**
 * Dropdown changed
 */

jQuery(document).on('change', 'select.wpb_vc_param_value', function() {
 var $select = jQuery(this);
 var paramName = $select.attr('name');
 var value = $select.val();
 console.log('Dropdown changed:', paramName, value);
});
```


### Color Picker Events

```js
/**
 * Color picker changed
 */

jQuery(document).on('change', '.vc_color-control', function() {
 var color = jQuery(this).val();
 console.log('Color changed to:', color);
});
```


### Image Picker Events

```js
/**
 * Image selected
 */

jQuery(document).on('change', '.wpb_vc_param_value.attachment_id', function() {
 var imageId = jQuery(this).val();
 console.log('Image selected:', imageId);
});
```


## Event Reference Table

| Event | Trigger | Parameters |
|-------|---------|------------|
| `app.render` | Editor fully rendered | – |
| `shortcodes:ready` | All shortcodes loaded | – |
| `shortcodes:add` | Element added | model |
| `shortcodes:update` | Element updated | model |
| `shortcodes:destroy` | Element destroyed | model |
| `shortcodes:clone` | Element cloned | model |
| `shortcodes:move` | Element moved | model |
| `shortcode:edit_form:show` | Edit form opened | model |
| `shortcode:edit_form:hide` | Edit form closed | model |
| `edit_form_rendered` | Form rendered in DOM | $form |
| `shortcodeView:updated` | Element view updated | view |
| `shortcode:content_changed` | Element content changed | model |
| `save:before` | Before save | – |
| `save:success` | Save successful | – |
| `save:error` | Save failed | error |
| `vc_iframe_loaded` | Frontend editor loaded | – |
| `vc_reload` | Editor reloading | – |

## Element-Specific Events

Element-specific events follow this pattern:

```js
// Pattern
window.vc.events.on('shortcode:{element_base}:{event}', callback);

// Examples
window.vc.events.on('shortcode:vc_custom_element:mounted', callback);
window.vc.events.on('shortcode:vc_custom_element:destroy', callback);
window.vc.events.on('shortcode:vc_custom_element:frontend_render', callback);
```


## Accessing Element Data

### From Model Object

```js
window.vc.events.on('shortcodes:add', function(model) {
 // Get element type
 var shortcode = model.get('shortcode');
 // Get element ID
 var id = model.get('id');
 // Get all parameters
 var params = model.get('params');
 // Get specific parameter
 var title = model.getParam('title');
 // Get parent element
 var parent = model.get('parent_id');
 // Check if element has children
 var hasChildren = model.get('shortcode_data').length > 0;
});
```


 
## Best Practices

- Use specific events – Listen to element-specific events when possible
- Clean up – Always remove event listeners and destroy plugin instances
- Check context – Verify you’re in the right editor context (backend/frontend)
- Avoid conflicts – Use unique namespaces for your event handlers
- Performance – Debounce frequent events like keyup
- Error handling – Wrap event handlers in try-catch blocks
- Documentation – Comment complex event logic
- Testing – Test events in both backend and frontend editors

 
## Debugging Events

```js
// Log all VC events

window.vc.events.on('all', function(eventName) {
 console.log('VC Event:', eventName, arguments);
});

// Log specific element events
window.vc.events.on('shortcode:vc_custom_element', function() {
 console.log('Custom element event:', arguments);
});

// Check if element exists
var element = vc.shortcodes.findWhere({ id: 'element-id' });
console.log('Element found:', element);

// Get all elements of specific type
var customElements = vc.shortcodes.where({ shortcode: 'vc_custom_element' });
console.log('Custom elements count:', customElements.length);
```


 
## Troubleshooting

### Events Not Firing

- Check if `window.vc` exists
- Verify event name spelling
- Ensure code runs after editor loads
- Check JavaScript console for errors
- Use `window.vc.events.on('all', ...)` to debug

### Element Not Updating

- Check if view is properly refreshed
- Verify model is being updated
- Ensure re-initialization after update
- Check for JavaScript errors
- Clear browser cache

### Memory Leaks

- Remove event listeners on destroy
- Destroy plugin instances
- Clear timers/intervals
- Unbind jQuery events
- Remove global references
