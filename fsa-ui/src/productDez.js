// presentation component
const ProductDez = ({ product }) => {
    return <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src={product.img} />
            <div className="card-body">
                <h4 className="card-title">{product.brand} {product.model}</h4>
                <b>$ {product.price}</b>
                <h6>
                    <label>In stock?</label>
                    <input disabled type="checkbox" checked={product.inStock} />
                </h6>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger btn-sm">
                    Add to cart
                    <i className="fa fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
}

export default ProductDez;