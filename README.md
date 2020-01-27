# React-Hooks

5) useCallback


It is a hook that will return a memoized version of callBack function that only changes if one of the dependencies have changed ( setAge and setSalary are getting reinitialized on each render )


It is useful when passing callbacks to optimised child components that use reference equality to prevent unneccessary re-renders. In short it does the same to function props what React.memo does to components. It prevents reinitialisation and use catched values in case there is no change in dependency list


It is used to optimised performance