import BlogStory, { makeBlogMetadata } from '../../../components/BlogStory';

export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }) { return makeBlogMetadata(params, '/blog'); }
export default function BlogPostPage({ params }) { return <BlogStory params={params} prefix="/blog"/>; }
