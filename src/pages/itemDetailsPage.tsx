import { PRODUCTS } from "@/database/products";

import { useParams } from "react-router-dom";



export default function ItemDetailsPage() {

    const { category, tag, id } = useParams<{ category: string, tag: string, id: string }>();




    const product = PRODUCTS.items.find(
        (item) =>
            item.id === Number(id) &&
            item.category === category &&
            item.item === tag
    );

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>
            <h1>Item Details Page</h1>

            <p>Item ID: {product.name}</p>



        </div>
    );
}


