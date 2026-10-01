import BlogStory, { makeBlogMetadata } from '../../../components/BlogStory';

export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }) { return makeBlogMetadata(params, '/blogs'); }
export default function LegacyBlogPostPage({ params }) { return <BlogStory params={params} prefix="/blogs"/>; }
