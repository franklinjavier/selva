import { Button } from '@franklinjavier/selva-core';
import { useIsomorphicLayoutEffect } from '@franklinjavier/selva-utils';

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
