import { Button } from '@selva/core';
import { useIsomorphicLayoutEffect } from '@selva/utils';

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log('selva docs page');
  }, []);
  return (
    <div>
      <h1>selva Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
