import ProductDez from "./productDez";
function ProductList() {
    const cart = [];
    const onAddToCartClick = (product) => {
        cart.push(product)
        console.log(product)
            
    }
    const product = [
        {
            id: 1,
            brand: "iphone",
            price: 2000,
            inStock: true,
            model: "6s",
            img: "https://cellbuddy.in/wp-content/uploads/2020/09/41yPjeDVY4L._SL1024_.jpg"
        }, {
            id: 2,
            brand: "samsung",
            price: 2500,
            inStock: false,
            model: "S20",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa159NenzX9QoJujfJ_HhJqKZNWpHu6SjGQ&usqp=CAU"
        }, {
            id: 3,
            brand: "MI",
            price: 3600,
            inStock: true,
            model: "note 8",
            img: "https://www.powerplanetonline.com/cdnassets/xiaomi_redmi_note_8_premium_protection_twilight_aurora_funda_001_l.jpg"
        }
    ]
    return <div>
         {product.map(item => <ProductDez key={item.id}product={item}onAdd={onAddToCartClick}/>)} </div>}

export default ProductList;
