# rxjs-typescript-react-ui

https://medium.com/better-programming/make-use-of-rxjs-to-create-efficient-react-components-with-ease-def018644e23

The rendering of the component might not depend directly on a property but rather on derived information of that property. And that might stay stable despite the property changing.

Split your component into a Business Logic Component (BLoC) and a presentation component

Implement the BLoC using RxJS to transform properties and context into state

Use built-in RxJS operators for initialization (startWith), to minimize updates (distinctUntilChanged), to maintain state (scan), and to combine with contextual, potentially asynchronous data (merge, switch, etc.).


Pass the resulting state as input properties to the presentation component
