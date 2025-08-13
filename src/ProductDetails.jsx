import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Jute Basket',
    price: '$15',
    image: 'https://i.pinimg.com/originals/86/39/d9/8639d95343028640a5661855ef01143f.jpg',
    description: 'Handmade basket crafted from natural jute fibers. Perfect for storage and decor.',
    material: 'Natural Jute Fiber',
    dimensions: '12" x 8" x 6"',
    weight: '0.8 lbs',
    origin: 'Handcrafted in Bangladesh',
    care: 'Spot clean with damp cloth, air dry',
    features: ['Eco-friendly', 'Durable', 'Lightweight', 'Versatile storage']
  },
  {
    id: 2,
    name: 'Bamboo Lamp',
    price: '$25',
    image: 'https://ae01.alicdn.com/kf/HTB1Drh4jxSYBuNjSsphq6zGvVXaN/23x28cm-25x38cm-modern-bamboo-work-hand-knitted-bamboo-Pendant-Lamp-Pendant-Lamp-With-bamboo-Shades-For.jpg',
    description: 'Eco-friendly lamp made from sustainable bamboo. Adds a warm glow to any room.',
    material: 'Sustainable Bamboo',
    dimensions: '10" x 6" x 6"',
    weight: '1.2 lbs',
    origin: 'Handcrafted in Vietnam',
    care: 'Dust with soft cloth, avoid moisture',
    features: ['LED compatible', 'Warm lighting', 'Natural finish', 'Energy efficient']
  },
  {
    id: 3,
    name: 'Coconut Shell Bowl',
    price: '$10',
    image: 'https://ae01.alicdn.com/kf/HTB1Xt.ABZyYBuNkSnfoq6AWgVXa1/1pc-Vintage-Natural-Coconut-Shell-Bowl-Eco-friendly-Ice-Cream-Bowls-Creative-Fruit-Bowl-Handicraft-Art.jpg',
    description: 'Unique bowl made from real coconut shells. Great for serving snacks or as a decorative piece.',
    material: 'Natural Coconut Shell',
    dimensions: '5" diameter x 2.5" height',
    weight: '0.3 lbs',
    origin: 'Handcrafted in Philippines',
    care: 'Hand wash with mild soap, oil occasionally',
    features: ['Food safe', 'Unique grain pattern', 'Lightweight', 'Sustainable']
  },
  {
    id: 4,
    name: 'Palm Leaf Bag',
    price: '$20',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Stylish and sturdy bag woven from palm leaves. Ideal for shopping or outings.',
    material: 'Woven Palm Leaves',
    dimensions: '14" x 12" x 4"',
    weight: '0.6 lbs',
    origin: 'Handcrafted in Thailand',
    care: 'Spot clean, avoid prolonged water exposure',
    features: ['Water resistant', 'Strong handles', 'Spacious', 'Eco-friendly']
  },
  {
    id: 5,
    name: 'Banana Fiber Pouch',
    price: '$16',
    image: 'https://th.bing.com/th/id/R.219c117687025e7755881ae3c8be81e3?rik=uPVJlr7pywsXpA&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fresource%2fbanana-fiber-craft-%e2%80%93-anegundi-karnataka%2fproducts%2fminigallery%2f12361%2f04.jpg&ehk=iC2SGVwyZgL00Ehz%2b5uZCea3aEHloiLpi%2bylHGeE7fA%3d&risl=&pid=ImgRaw&r=0',
    description: 'Handcrafted pouch made from banana fiber, perfect for carrying essentials.',
    material: 'Natural Banana Fiber',
    dimensions: '8" x 6" x 2"',
    weight: '0.3 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean with damp cloth, air dry',
    features: ['Lightweight', 'Natural texture', 'Durable', 'Eco-friendly']
  },
  {
    id: 6,
    name: 'Reed Pen Holder',
    price: '$12',
    image: 'https://tse2.mm.bing.net/th/id/OIP.G5T5KfiOQaJjjswVRA1aLwHaF4?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Handcrafted pen holder made from natural reed.',
    material: 'Natural Reed',
    dimensions: '4" x 4" x 5"',
    weight: '0.4 lbs',
    origin: 'Handcrafted in Indonesia',
    care: 'Dust regularly, keep dry',
    features: ['Multiple compartments', 'Natural finish', 'Desk organizer', 'Eco-friendly']
  },
  {
    id: 7,
    name: 'Grass Coaster Set',
    price: '$8',
    image: 'https://images.pexels.com/photos/6207745/pexels-photo-6207745.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Set of 4 coasters made from wild grass.',
    material: 'Wild Grass Weave',
    dimensions: '4" diameter each',
    weight: '0.2 lbs (set)',
    origin: 'Handcrafted in Kenya',
    care: 'Wipe clean, air dry',
    features: ['Set of 4', 'Heat resistant', 'Natural patterns', 'Lightweight']
  },
  {
    id: 8,
    name: 'Cane Fruit Basket',
    price: '$22',
    image: 'https://casavolka.com/wp-content/uploads/2022/06/rattan-basket-756x800.jpg',
    description: 'Large fruit basket woven from cane.',
    material: 'Natural Cane',
    dimensions: '16" x 12" x 8"',
    weight: '1.5 lbs',
    origin: 'Handcrafted in Myanmar',
    care: 'Clean with damp cloth, air dry completely',
    features: ['Large capacity', 'Ventilated design', 'Strong construction', 'Natural finish']
  },
  {
    id: 9,
    name: 'Kerala Coir Door Mat',
    price: '$14',
    image: 'https://tse3.mm.bing.net/th/id/OIP.jjX_nfcbwyKoLVuCcsAbagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Traditional Kerala coir door mat made from coconut fiber.',
    material: 'Natural Coconut Coir',
    dimensions: '24" x 16"',
    weight: '1.8 lbs',
    origin: 'Handcrafted in Kerala, India',
    care: 'Shake out regularly, hose down when needed',
    features: ['Weather resistant', 'Non-slip backing', 'Durable', 'Natural drainage']
  },
  {
    id: 10,
    name: 'Clay Plate Set',
    price: '$28',
    image: 'https://cdn.shopify.com/s/files/1/0594/7251/1153/files/clay_cookware_65a3f9fa-04f6-412f-a8de-246f7ae208a4.jpg?v=1672134491',
    description: 'Set of 4 handmade clay plates, perfect for serving traditional meals.',
    material: 'Natural Clay',
    dimensions: '10" diameter x 1" height (each)',
    weight: '3.2 lbs (set)',
    origin: 'Handcrafted in Rajasthan, India',
    care: 'Hand wash with mild soap, season before first use',
    features: ['Set of 4 plates', 'Food safe', 'Heat resistant', 'Traditional craftsmanship']
  },
  {
    id: 28,
    name: 'Orchid Pendant Light',
    price: '$30',
    image: 'https://thearchitectsdiary.com/wp-content/uploads/2025/02/Handcrafted-Products-11.png',
    description: 'Elegant pendant light made from natural reeds, perfect for adding a touch of nature to your home decor.',
    material: 'Rattan Reeds, Brass nails, Marble ball',
    dimensions: '48X48X9',
    weight: '450 gms',
    origin: 'Kota, Rajasthan',
    care: 'Place it Where it Can Shine',
    features: ['Lightweight', 'Aesthetics', 'Unlimited Use', 'Durable'],
    category: 'Reeds Products',
    colors: [
      {
        name: 'Natural',
        color: '#D2B48C',
        image: 'https://thearchitectsdiary.com/wp-content/uploads/2025/02/Handcrafted-Products-11.png'
      },
      {
        name: 'Dark Brown',
        color: '#8B4513',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Light Oak',
        color: '#DEB887',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
];

// Add color variants for shirt products
const productColorVariants = {
  14: { // Tangaliya Shirt
    colors: [
      {
        name: 'Natural White',
        color: '#F5F5DC',
        image: 'src/assets/tangaliya_shirt.jpeg'
      },
      {
        name: 'Sky Blue',
        color: '#87CEEB',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Forest Green',
        color: '#228B22',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Sunset Orange',
        color: '#FF8C00',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Deep Purple',
        color: '#9932CC',
        image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  23: { // Khadi Cotton Shirt
    colors: [
      {
        name: 'Natural Khadi',
        color: '#F5F5DC',
        image: 'https://sellon.kraftly.com/web/tr:f-auto,w-1200,h-1200,cm-pad_resize,pr-true/shop_28610/4_1472131866.jpg'
      },
      {
        name: 'Indigo Blue',
        color: '#4B0082',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Earthy Brown',
        color: '#8B4513',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Sage Green',
        color: '#9CAF88',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  // Add more products with color variants as needed
};

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const colorVariants = productColorVariants[Number(id)];
  
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImage, setCurrentImage] = useState(product?.image);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Update current image when product changes
  React.useEffect(() => {
    if (product) {
      if (colorVariants && colorVariants.colors.length > 0) {
        setCurrentImage(colorVariants.colors[0].image);
        setSelectedColor(0);
      } else {
        setCurrentImage(product.image);
      }
    }
  }, [product, colorVariants]);

  const handleColorChange = (colorIndex) => {
    if (colorVariants && colorVariants.colors[colorIndex]) {
      setIsImageLoading(true);
      setSelectedColor(colorIndex);
      
      // Simulate image loading delay for smooth transition
      setTimeout(() => {
        setCurrentImage(colorVariants.colors[colorIndex].image);
        setIsImageLoading(false);
      }, 200);
    }
  };

  if (!product) {
    return <div className="py-8"><h2 className="text-xl text-red-600">Product not found</h2></div>;
  }

  return (
    <div className="py-8 max-w-4xl w-full mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={currentImage} 
                alt={product.name} 
                className={`w-full h-96 object-cover transition-opacity duration-300 ${isImageLoading ? 'opacity-50' : 'opacity-100'}`}
              />
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              )}
            </div>
            
            {/* Color Swatches */}
            {colorVariants && colorVariants.colors && (
              <div className="mt-4 px-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Available Colors:</h4>
                <div className="flex items-center space-x-3">
                  {colorVariants.colors.map((colorOption, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <button
                        onClick={() => handleColorChange(index)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                          selectedColor === index 
                            ? 'border-green-600 shadow-lg ring-2 ring-green-200' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: colorOption.color }}
                        title={colorOption.name}
                      />
                      <span className={`text-xs mt-1 transition-colors duration-200 ${
                        selectedColor === index ? 'text-green-600 font-medium' : 'text-gray-500'
                      }`}>
                        {colorOption.name}
                      </span>
                    </div>
                  ))}
                </div>
                {selectedColor !== null && colorVariants.colors[selectedColor] && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: <span className="font-medium text-green-600">
                      {colorVariants.colors[selectedColor].name}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-green-700 mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            
            {/* Product Specifications */}
            <div className="space-y-4 mb-6 w-full">
              <h3 className="text-xl font-semibold text-gray-800">Product Details</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Material:</span>
                  <span className="text-gray-800">{product.material}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Dimensions:</span>
                  <span className="text-gray-800">{product.dimensions}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Weight:</span>
                  <span className="text-gray-800">{product.weight}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Origin:</span>
                  <span className="text-gray-800">{product.origin}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-600">Care Instructions:</span>
                  <span className="text-gray-800">{product.care}</span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              {addToCart && (
                <button 
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
              <button 
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition-colors"
                onClick={() => window.history.back()}
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
