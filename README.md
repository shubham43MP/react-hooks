# React-Hooks

2) useEffect hook
combining the two sideffects for the same piece fo code i.e. same code in componentDidMount, componentDidUpdate and componentWillUnmount can be integrated

useEffect run after every render

[ count ] like things will prevent re render and implement conditional rendering. It is array of values

passing an empty array [] in the useEffect hook will make the useEffect hook as componentDidMount

Returning a function from a useEffect is equivalent to componentWillUnmount : return () => { unmount code } 

Important Tip #1 If any function that is prop dependant or state dependant, call it in the useEffect and define itself in the useEffect so that you may not miss the important dependency array

Important Tip #2: Organise related useEffect and useState together for better understanding in case you use multiple useEffects and useState
