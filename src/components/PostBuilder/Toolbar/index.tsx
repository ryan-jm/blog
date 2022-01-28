import { Box, Button } from '@mui/material';
import React from 'react';

import { componentMappings } from '../Node';

interface ToolbarProps {
  addNode: Function;
}

function Toolbar({ addNode }: ToolbarProps) {
  return (
    <Box>
      {Object.keys(componentMappings).map((key) => (
        <Button onClick={() => addNode({ key })}>{key}</Button>
      ))}
    </Box>
  );
}

export default Toolbar;
