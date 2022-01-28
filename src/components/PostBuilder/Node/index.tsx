import { Box, TextField } from '@mui/material';
import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type updateNode = (newContent: string) => void;
type handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => void;
type ComponentMappings = { img: Function };
export type NodeComponent = keyof ComponentMappings;

interface NodeProps {
  type?: NodeComponent | null;
  content: string | ImageNodeProps;
  updateNode: updateNode;
  handleKeyPress: handleKeyPress;
}

export interface ImageNodeProps {
  src: string;
  alt: string;
}

export const componentMappings = {
  img: (content: any) => <ImageNode {...content} />,
};

const Node = ({ type, content, updateNode, handleKeyPress }: NodeProps) => {
  const textField = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    textField?.current?.focus();
  });

  return (
    <Box width="100%">
      {!type ? (
        <TextField
          multiline
          rows={5}
          defaultValue={content}
          variant="standard"
          ref={textField}
          onChange={(e) => updateNode(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      ) : (
        componentMappings[type](content)
      )}
    </Box>
  );
};

const ImageNode = ({ src, alt }: ImageNodeProps) => (
  <Box>
    <img src={src} alt={alt} />
  </Box>
);

export default Node;
