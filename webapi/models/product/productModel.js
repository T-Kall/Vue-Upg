const mongodb = require('mongoose')
const Product = require('./productSchema')

//-------------------------------------
//***// addProducts POST - Lägg till produkt/-er
// testkör POST: http://localhost:9998/api/products/import i postman

exports.addProducts = (req, res) => {

    try {
        for (current of req.body) {
            let product = new Product({

                _id: new mongodb.Types.ObjectId,
                name: current.name,
                description: current.description,
                shortDescription: current.shortDescription,
                image: current.image,
                inStockAmount: current.inStockAmount,
                price: current.price,
                shipping: current.shipping

            })

            product.save()
        }

        return res.status(200).json({
            message: 'Tjohoo! Produkten/produkterna lades till!'
        })
    }

    catch {
        return res.status(400).json({
            message: 'Åh nej! Produkten/produkterna lades INTE till!'
        })
    }
}

//----------------------------------------------------------------
//***// getProducts - Hämta alla producter
// testkör GET: http://localhost:9998/api/products i postman så listas alla upp

exports.getProducts = (req, res) => {
  Product.find()
  .then(products => 
    res.status(200).json({
        message: 'FUNKAR',
        products: products
    })
    )
  .catch(error => 
    res.status(500).json(error))
}

//----------------------------------------------------------------
//***// getProductById - Hämta en specifik produkt t.ex:
// http://localhost:9998/api/products/5e8c70216e779b39689b6b27

exports.getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
  .then(product => 
    res.status(200).json(product))
  .catch(error => 
    res.status(500).json(error))
}

