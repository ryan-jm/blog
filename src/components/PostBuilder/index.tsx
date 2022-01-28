import { Container } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Node from './Node';
import Toolbar from './Toolbar';

import type { NodeComponent, ImageNodeProps } from './Node';

type EmptyNode = {
  type: NodeComponent | null;
  content: string | ImageNodeProps;
  id: string;
};

interface AddNodeProps {
  type: NodeComponent | null;
  content: ImageNodeProps | string;
}

const PostBuilder = () => {
  const [nodes, setNodes] = useState<Array<EmptyNode>>([
    {
      type: null,
      content: 'Test',
      id: uuid(),
    },
  ]);

  const addNode = ({ content, type }: AddNodeProps) => {
    setNodes((prev) => [...prev, { type, content, id: uuid() }]);
  };

  const updateNode = (id: string, newContent: string) => {
    setNodes((prev) => {
      const nodeIndex = prev.findIndex((node) => node.id === id);
      const newState = [...prev];
      newState[nodeIndex].content = newContent;
      return newState;
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNode({ type: null, content: '' });
    }
  };

  return (
    <Container sx={{ marginTop: 10 }}>
      {nodes.map((node) => (
        <Node
          key={node.id}
          type={node.type}
          content={node.content}
          updateNode={(newContent) => updateNode(node.id, newContent)}
          handleKeyPress={handleKeyPress}
        />
      ))}

      <Toolbar addNode={addNode} />
    </Container>
  );
};

export default PostBuilder;
