/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
    interface Locals {}

    interface Platform {}

    interface Session {}

    interface Stuff {}
}

/**
 * * Note:
 * * This file will break if you use import statements, instead do a import() call in your code. For Example:
 * * 
 * * interface Stuff {
 * *     test: import('package').SomeProperty;
 * * }
 */
