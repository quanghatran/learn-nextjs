import { Box, Container, Typography } from '@mui/material';
import { Work } from 'models';
import WorkImg1 from '../../assets/images/Rectangle30.jpg';
import WorkImg2 from '../../assets/images/Rectangle32.jpg';
import WorkImg3 from '../../assets/images/Rectangle34.jpg';
import WorkList from '../work/work-list';

export function FeatureWorks() {
  // call api to get posts data
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      tagList: ['Design', 'Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      thumbNailUrl: WorkImg1,
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      tagList: ['Design', 'Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      thumbNailUrl: WorkImg2,
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      tagList: ['Pattern', 'Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      thumbNailUrl: WorkImg3,
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" pb={3}>
          Featured Works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
