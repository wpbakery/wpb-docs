---
sidebar_position: 3
---

# Hooks

***Since WPBakery AI 1.0.0***

Hooks of the [WPBakery AI](/devs/wpbakery-ai/overview) plugin. They run only when WPBakery AI is active.

## wpbai_custom_elements_allow_js

Filter. Turns JavaScript in custom elements on or off for the whole site. When it returns `false`, custom elements render without their JavaScript, and their props aren't added to the markup. Saving JavaScript in a custom element always needs a user with `unfiltered_html`, whatever this filter returns.

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$allowed` | bool | Whether custom element JavaScript runs. Default `true`. |

### Return

`bool`: `true` to run custom element JavaScript, `false` to leave it out.

### Usage

```php
// A hardened site: custom elements render their HTML and CSS only.
add_filter( 'wpbai_custom_elements_allow_js', '__return_false' );
```

## wpbai_user_level

Filter. Changes the current user's WPBakery AI level, after it was taken from the user's roles in the WPBakery Role Manager. The level decides which tools the AI assistant may use for that user.

| Level | Role Manager label | Tools |
|---|---|---|
| `''` | Disabled | None |
| `read` | Read only | Read tools (list and get) |
| `write` | Read and write | Read tools, plus creating and editing content |
| `full` | Full | All tools, including WPBakery settings, custom elements and deleting pages permanently |

The level never grants more than the user's WordPress capabilities and WPBakery Role Manager permissions: every tool also checks them. For a client connected through WPBakery Cloud, the level chosen when the client was connected can only lower the result further. An unknown value counts as Disabled.

:::caution
This filter can also raise a level. Use it to lower levels (for example, by time, IP or a user meta flag) unless you're sure the user should have more access than their roles give.
:::

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$level` | string | The level from the user's roles: `''`, `read`, `write` or `full`. |
| `$user` | WP_User | The current user. |

### Return

`string`: `''`, `read`, `write` or `full`.

### Usage

```php
// Read only for users flagged by a security plugin.
add_filter( 'wpbai_user_level', 'my_limit_ai_level', 10, 2 );

function my_limit_ai_level( $level, $user ) {
	if ( '' !== $level && get_user_meta( $user->ID, 'my_restricted', true ) ) {
		return 'read';
	}
	return $level;
}
```

## wpbai_loaded

Action. Fires after WPBakery AI has loaded, on `plugins_loaded`. Use it for code that depends on WPBakery AI, so it doesn't run when the plugin is inactive.

### Parameters

This action has no parameters.

### Usage

```php
add_action( 'wpbai_loaded', 'my_wpbakery_ai_integration' );

function my_wpbakery_ai_integration() {
	add_filter( 'wpbai_custom_elements_allow_js', '__return_false' );
}
```
