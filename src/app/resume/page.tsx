import { FC } from 'react';
import ResumeView from '@/components/Resume';
import resume from '@/data/resume.json'; 
import { Resume } from '@/model/resume';

const Page: FC = () => {
    return <ResumeView resume={ resume as Resume } />;
};

export default Page;