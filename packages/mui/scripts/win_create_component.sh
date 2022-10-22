#!/bin/bash

# base file name to create
filename=$1

echo "Creating component $filename"

# check if filename arg exists
if [ -z "$filename" ]; then
  echo "No component name specified"
  exit 1
fi

# check if component already exists
if [ -f $filename ]; then
  echo "File $filename already exists."
  exit 1
fi

# create component's directory
mkdir $filename
cd $filename

# create component
touch index.ts
touch $filename.tsx
touch $filename.styles.ts
touch $filename.type.ts

echo "
import React, { FC } from 'react';
import { I$filename } from './$filename.type'
import { Styled$filename } from './$filename.styles'

const $filename: FC<I$filename> = () => {
  return (
    <Styled$filename>
      <></>
    </Styled$filename>
  );
}

export { $filename }" >$filename.tsx

echo "
interface I$filename {}

export type { I$filename }" >$filename.type.ts

echo "
import styled from 'styled-components';

export const Styled$filename = styled.div\`
  position: relative;
\`;" >$filename.styles.ts

echo "export { $filename as default } from './$filename';" >index.ts

# move back to root directory
cd ..

# move component to components directory
mv $filename components
