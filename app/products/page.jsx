import Link from 'next/link';
import Icon from '../../components/Icon';
import { products } from '../../data/products';

export const metadata = { title: 'Csharptek Products', description: 'Explore products from Csharptek, including TekDial, ConvoSphere, TekSocial and Interview Scheduler, built from our own engineering work.', alternates: { canonical: '/products' } };

export default function ProductsPage() {
  return <><section className="page-hero"><div className="wrap page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Products</div><span className="eyebrow">Products from Csharptek</span><h1>Purpose-built products for connected work.</h1><p>Explore the Csharptek product portfolio. Contact our team for current capabilities, availability and product information.</p></div></section><section className="section"><div className="wrap solution-grid">{products.map((product, i)=><Link className="solution-card" href={`/products/${product.slug}`} key={product.slug}><div className="solution-top"><span className="solution-number">0{i+1} / PRODUCT</span><span className="solution-card-icon"><Icon name={['flow','spark','layers','grid'][i]} size={19}/></span></div><h3>{product.name}</h3><p>{product.category}</p><span className="solution-link">Product information <Icon name="arrow" size={15}/></span></Link>)}</div></section></>;
}
