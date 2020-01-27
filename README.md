# React-Hooks


6) useMemo

useMemo is also a performance optimisation hook

Everytime a state changes, the component rerenders and isEven function or a loaded logic will be carried away to other functions as well. ( Two counters, one is made slow and therefore it affects the other counter as well even if it dont have dependency on the on goiing functions )

By use of useMemo, we are basically telling react not to call isEven() if its not required.

useMemo is generally used for cached values whereas useCallback is used to avoid functional props redeclaration if the need is not there.

useCallback caches the function by itself whereas useMemo caches its result.

Thumb Rule:
Caching a function : useCallback
Caching a value : useMemo