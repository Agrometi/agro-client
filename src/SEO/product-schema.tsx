type ProductSchemaT = {
  name: string;
  image: string;
  description: string;
  url: string;
  price: number;
};

export default function generateProductSchema(product: ProductSchemaT) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Agrometi",
    },
    offers: {
      "@type": "Offer",
      url: product.url,
      priceCurrency: "GEL",
      price: product.price,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Agrometi",
      },
    },
  };
}
