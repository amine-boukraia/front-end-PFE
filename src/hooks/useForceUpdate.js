import { useState } from 'react';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return { revision: value, forceUpdate: () => setValue((value) => value + 1) };
}

export default useForceUpdate;
