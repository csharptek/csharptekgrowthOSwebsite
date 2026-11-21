import IndustryAiProtection, { industryAiMetadata } from '../../../components/IndustryAiProtection';

export const metadata = industryAiMetadata('manufacturing');

export default function Page() {
  return <IndustryAiProtection industry="manufacturing"/>;
}
