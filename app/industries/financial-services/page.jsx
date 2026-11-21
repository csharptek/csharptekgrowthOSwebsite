import IndustryAiProtection, { industryAiMetadata } from '../../../components/IndustryAiProtection';

export const metadata = industryAiMetadata('financial-services');

export default function Page() {
  return <IndustryAiProtection industry="financial-services"/>;
}
