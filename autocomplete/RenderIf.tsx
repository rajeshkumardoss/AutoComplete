/* eslint-disable no-undef */
import * as React from 'react';

interface RenderIfProps {
  condition: boolean;
}

export const RenderIf = (
  props: React.PropsWithChildren<RenderIfProps>
): JSX.Element => {
  if (props.condition) {
    return <>{props.children}</>;
  }
  return <></>;
};

export default RenderIf;