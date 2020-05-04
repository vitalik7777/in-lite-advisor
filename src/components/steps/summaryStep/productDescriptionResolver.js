export default function mapProduct(product) {
    const {short_description} = product;

    return {
        ...product,
        short_description:
            typeof short_description === 'object' ? short_description.html : short_description
    };
}