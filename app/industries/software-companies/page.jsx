import IndustryAiProtection, { industryAiMetadata } from '../../../components/IndustryAiProtection';

export const metadata = industryAiMetadata('software-companies');

export default function Page() {
  return <IndustryAiProtection industry="software-companies"/>;
}
