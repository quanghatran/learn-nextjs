import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';
import { WorkCard } from './work-card';

type WorkList = {
  workList: Work[];
};

export default function WorkList({ workList }: WorkList) {
  if (workList?.length === 0) return null;

  return (
    <Box>
      {workList?.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}
