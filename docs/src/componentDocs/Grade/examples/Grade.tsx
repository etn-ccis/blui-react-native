import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { GradeExample } from './GradeExample';

const codeSnippet = `<Grade.APlus/>
<Grade.A/>
<Grade.AMinus/>
<Grade.BPlus/>
<Grade.B/>
<Grade.BMinus/>
<Grade.CPlus/>
<Grade.C/>
<Grade.CMinus/>
<Grade.DPlus/>
<Grade.D/>
<Grade.DMinus/>
<Grade.F/>`;

export const Grade = (): JSX.Element => (
    <Box>
        <GradeExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Grade/examples/GradeExample.tsx" />
    </Box>
);
