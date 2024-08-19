# Web workers

## Limitations of web worker
- Web worker cannot manipulate DOM directly
- No 'window' object (instead 'self' object is there with similar properties of 'window' object)
- Types of 'self' objects -  DedicatedWorkerGlobalScope, SharedWorkerGlobalScope, or ServiceWorkerGlobalScope.


## WindowProxy
- A WindowProxy object is a wrapper for a Window object. 
- A WindowProxy object exists in every browsing context. All operations performed on a WindowProxy object will also be applied to the underlying Window object it currently wraps. 
- Therefore, interacting with a WindowProxy object is almost identical to directly interacting with a Window object. 
- When a browsing context is navigated, the Window object its WindowProxy wraps is changed.


## Browsing context
A browsing context is an environment in which a browser displays a Document. In modern browsers, it usually is a tab, but can be a window or even only parts of a page, like a frame or an iframe.

Each browsing context has an origin (that of the active document) and an ordered history of previously displayed documents.

Communication between browsing contexts is severely constrained. Between browsing contexts of the same origin, a [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) can be opened and used.