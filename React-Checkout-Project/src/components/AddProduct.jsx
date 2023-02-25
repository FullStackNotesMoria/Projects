

const AddProduct = () => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Price</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Quantity</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div>
                <label for="basic-url">Product Image</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Add To Cart</button>
        </form>
    </div>
  )
}

export default AddProduct