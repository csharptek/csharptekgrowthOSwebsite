import Link from 'next/link';
import Icon from './Icon';
import { caseStudies } from '../data/site';

export default function RelatedStories({ slugs = [], title = 'Relevant engineering stories', intro = 'See how related product and engineering challenges have been approached.' }) {
  const stories = slugs.map((slug) => caseStudies.find((item) => item.slug === slug)).filter(Boolean);
  if (!stories.length) return null;

  return <section className="section section-tint">
    <div className="wrap">
      <div className="section-heading">
        <span className="eyebrow">Related proof</span>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="case-grid">
        {stories.map((story) => <article className="case-card" key={story.slug}>
          <div className="case-body">
            <span className="case-label">{story.label}</span>
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
            <Link href={`/case-studies/${story.slug}`}>Read the {story.name.toLowerCase()} story <Icon name="arrow" size={15}/></Link>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
