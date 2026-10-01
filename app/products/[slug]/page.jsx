import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import { products } from '../../../data/products';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.name, description: product.description, alternates: { canonical: `/products/${slug}` } } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>{product.name}</div><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><div style={{marginTop:28}}><Link className="button" href={`/contact?initiative=${encodeURIComponent(product.name)}`}>Ask about {product.name} <Icon name="arrow" size={16}/></Link></div></div></section><section className="section"><div className="wrap content-grid"><div><span className="eyebrow">Product information</span><h2>Learn what’s available for your team.</h2><p>Product details and availability are best discussed with our team so we can share the current information that fits your needs.</p></div><aside className="content-panel"><span className="eyebrow">Talk with Csharptek</span><h3>Get current product details</h3><p>Tell us what you’re evaluating and we’ll connect you with the right product information.</p><Link className="button button-dark" href={`/contact?initiative=${encodeURIComponent(product.name)}`}>Contact our team <Icon name="arrow" size={15}/></Link></aside></div></section></>;
}
