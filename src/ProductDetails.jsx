import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Jute Basket',
    price: '₹15',
    image: 'https://i.pinimg.com/originals/86/39/d9/8639d95343028640a5661855ef01143f.jpg',
    description: 'Handmade basket crafted from natural jute fibers. Perfect for storage and decor.',
    material: 'Natural Jute Fiber',
    dimensions: '12" x 8" x 6"',
    weight: '0.8 lbs',
    origin: 'Handcrafted in Bangladesh',
    care: 'Spot clean with damp cloth, air dry',
    features: ['Eco-friendly', 'Durable', 'Lightweight', 'Versatile storage'],
    stock: 15,
    reviews: [
      { rating: 4, comment: 'Great for organizing my living room!', user: 'Alex J.' },
      { rating: 5, comment: 'Love the natural look and feel.', user: 'Sarah K.' }
    ]
  },
  {
    id: 2,
    name: 'Bamboo Lamp',
    price: '₹25',
    image: 'https://ae01.alicdn.com/kf/HTB1Drh4jxSYBuNjSsphq6zGvVXaN/23x28cm-25x38cm-modern-bamboo-work-hand-knitted-bamboo-Pendant-Lamp-Pendant-Lamp-With-bamboo-Shades-For.jpg',
    description: 'Eco-friendly lamp made from sustainable bamboo. Adds a warm glow to any room.',
    material: 'Sustainable Bamboo',
    dimensions: '10" x 6" x 6"',
    weight: '1.2 lbs',
    origin: 'Handcrafted in Vietnam',
    care: 'Dust with soft cloth, avoid moisture',
    features: ['LED compatible', 'Warm lighting', 'Natural finish', 'Energy efficient'],
    stock: 8,
    reviews: [
      { rating: 5, comment: 'Beautiful lighting, eco-friendly too!', user: 'Mike L.' },
      { rating: 4, comment: 'Easy to assemble and looks great.', user: 'Emma W.' }
    ]
  },
  {
    id: 3,
    name: 'Coconut Shell Bowl',
    price: '₹10',
    image: 'https://ae01.alicdn.com/kf/HTB1Xt.ABZyYBuNkSnfoq6AWgVXa1/1pc-Vintage-Natural-Coconut-Shell-Bowl-Eco-friendly-Ice-Cream-Bowls-Creative-Fruit-Bowl-Handicraft-Art.jpg',
    description: 'Unique bowl made from real coconut shells. Great for serving snacks or as a decorative piece.',
    material: 'Natural Coconut Shell',
    dimensions: '5" diameter x 2.5" height',
    weight: '0.3 lbs',
    origin: 'Handcrafted in Philippines',
    care: 'Hand wash with mild soap, oil occasionally',
    features: ['Food safe', 'Unique grain pattern', 'Lightweight', 'Sustainable'],
    stock: 20,
    reviews: [
      { rating: 5, comment: 'Perfect for my tropical-themed kitchen.', user: 'John D.' },
      { rating: 3, comment: 'Nice but a bit small.', user: 'Lisa M.' }
    ]
  },
  {
    id: 4,
    name: 'Palm Leaf Bag',
    price: '₹20',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Stylish and sturdy bag woven from palm leaves. Ideal for shopping or outings.',
    material: 'Woven Palm Leaves',
    dimensions: '14" x 12" x 4"',
    weight: '0.6 lbs',
    origin: 'Handcrafted in Thailand',
    care: 'Spot clean, avoid prolonged water exposure',
    features: ['Water resistant', 'Strong handles', 'Spacious', 'Eco-friendly'],
    stock: 12,
    reviews: [
      { rating: 4, comment: 'Durable and stylish for daily use.', user: 'Rachel B.' },
      { rating: 5, comment: 'Love how eco-friendly it is!', user: 'Tom H.' }
    ]
  },
  {
    id: 5,
    name: 'Banana Fiber Pouch',
    price: '₹16',
    image: 'https://th.bing.com/th/id/R.219c117687025e7755881ae3c8be81e3?rik=uPVJlr7pywsXpA&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fresource%2fbanana-fiber-craft-%e2%80%93-anegundi-karnataka%2fproducts%2fminigallery%2f12361%2f04.jpg&ehk=iC2SGVwyZgL00Ehz%2b5uZCea3aEHloiLpi%2bylHGeE7fA%3d&risl=&pid=ImgRaw&r=0',
    description: 'Handcrafted pouch made from banana fiber, perfect for carrying essentials.',
    material: 'Natural Banana Fiber',
    dimensions: '8" x 6" x 2"',
    weight: '0.3 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean with damp cloth, air dry',
    features: ['Lightweight', 'Natural texture', 'Durable', 'Eco-friendly'],
    stock: 5,
    reviews: [
      { rating: 4, comment: 'Handy little pouch for my keys and cards.', user: 'Sophia T.' },
      { rating: 5, comment: 'Sustainable and well-made.', user: 'David R.' }
    ]
  },
  {
    id: 6,
    name: 'Reed Pen Holder',
    price: '₹12',
    image: 'https://tse2.mm.bing.net/th/id/OIP.G5T5KfiOQaJjjswVRA1aLwHaF4?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Handcrafted pen holder made from natural reed.',
    material: 'Natural Reed',
    dimensions: '4" x 4" x 5"',
    weight: '0.4 lbs',
    origin: 'Handcrafted in Indonesia',
    care: 'Dust regularly, keep dry',
    features: ['Multiple compartments', 'Natural finish', 'Desk organizer', 'Eco-friendly'],
    stock: 18,
    reviews: [
      { rating: 5, comment: 'Keeps my desk tidy and looks natural.', user: 'Olivia P.' },
      { rating: 4, comment: 'Good quality, arrived quickly.', user: 'James C.' }
    ]
  },
  {
    id: 7,
    name: 'Grass Coaster Set',
    price: '₹8',
    image: 'https://images.pexels.com/photos/6207745/pexels-photo-6207745.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Set of 4 coasters made from wild grass.',
    material: 'Wild Grass Weave',
    dimensions: '4" diameter each',
    weight: '0.2 lbs (set)',
    origin: 'Handcrafted in Kenya',
    care: 'Wipe clean, air dry',
    features: ['Set of 4', 'Heat resistant', 'Natural patterns', 'Lightweight'],
    stock: 25,
    reviews: [
      { rating: 5, comment: 'Beautiful and functional coasters.', user: 'Mia S.' },
      { rating: 4, comment: 'Great value for the price.', user: 'Ethan G.' }
    ]
  },
  {
    id: 8,
    name: 'Cane Fruit Basket',
    price: '₹22',
    image: 'https://casavolka.com/wp-content/uploads/2022/06/rattan-basket-756x800.jpg',
    description: 'Large fruit basket woven from cane.',
    material: 'Natural Cane',
    dimensions: '16" x 12" x 8"',
    weight: '1.5 lbs',
    origin: 'Handcrafted in Myanmar',
    care: 'Clean with damp cloth, air dry completely',
    features: ['Large capacity', 'Ventilated design', 'Strong construction', 'Natural finish'],
    stock: 3,
    reviews: [
      { rating: 4, comment: 'Holds a lot of fruit, looks rustic.', user: 'Noah A.' },
      { rating: 5, comment: 'Perfect for my kitchen counter.', user: 'Ava E.' }
    ]
  },
  {
    id: 9,
    name: 'Kerala Coir Door Mat',
    price: '₹14',
    image: 'https://tse3.mm.bing.net/th/id/OIP.jjX_nfcbwyKoLVuCcsAbagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Traditional Kerala coir door mat made from coconut fiber.',
    material: 'Natural Coconut Coir',
    dimensions: '24" x 16"',
    weight: '1.8 lbs',
    origin: 'Handcrafted in Kerala, India',
    care: 'Shake out regularly, hose down when needed',
    features: ['Weather resistant', 'Non-slip backing', 'Durable', 'Natural drainage'],
    stock: 10,
    reviews: [
      { rating: 5, comment: 'Durable and cleans shoes well.', user: 'Liam F.' },
      { rating: 4, comment: 'Authentic Kerala craftsmanship.', user: 'Isabella V.' }
    ]
  },
  {
    id: 10,
    name: 'Clay Plate Set',
    price: '₹28',
    image: 'https://cdn.shopify.com/s/files/1/0594/7251/1153/files/clay_cookware_65a3f9fa-04f6-412f-a8de-246f7ae208a4.jpg?v=1672134491',
    description: 'Set of 4 handmade clay plates, perfect for serving traditional meals.',
    material: 'Natural Clay',
    dimensions: '10" diameter x 1" height (each)',
    weight: '3.2 lbs (set)',
    origin: 'Handcrafted in Rajasthan, India',
    care: 'Hand wash with mild soap, season before first use',
    features: ['Set of 4 plates', 'Food safe', 'Heat resistant', 'Traditional craftsmanship'],
    stock: 7,
    reviews: [
      { rating: 5, comment: 'Beautiful plates, great for Indian cuisine.', user: 'Mason K.' },
      { rating: 4, comment: 'Well-made but need careful handling.', user: 'Charlotte L.' }
    ]
  },
  {
    id: 28,
    name: 'Orchid Pendant Light',
    price: '₹30',
    image: 'https://thearchitectsdiary.com/wp-content/uploads/2025/02/Handcrafted-Products-11.png',
    description: 'Elegant pendant light made from natural reeds, perfect for adding a touch of nature to your home decor.',
    material: 'Rattan Reeds, Brass nails, Marble ball',
    dimensions: '48X48X9',
    weight: '450 gms',
    origin: 'Handcrafted in Kota, Rajasthan',
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
    ],
    stock: 6,
    reviews: [
      { rating: 5, comment: 'Stunning light fixture!', user: 'Lucas M.' },
      { rating: 4, comment: 'Adds a natural vibe to my room.', user: 'Zoe N.' }
    ]
  },
  {
    id: 14,
    name: 'Tangaliya Shirt',
    price: '₹1100',
    image: 'src/assets/tangaliya_shirt.jpeg',
    description: 'Handwoven Tangaliya shirt with intricate patterns.',
    material: 'Cotton',
    dimensions: 'Available in S, M, L, XL, XXL',
    weight: '200 gms',
    origin: 'Handcrafted in Kutch, Gujarat',
    care: 'Hand wash separately in cold water',
    features: ['Handwoven', 'Breathable fabric', 'Unique patterns', 'Ethically made'],
    stock: 10,
    reviews: [
      { rating: 4, comment: 'Love the patterns, very comfortable!', user: 'Priya S.' },
      { rating: 5, comment: 'Perfect fit and eco-friendly fabric.', user: 'Arjun M.' }
    ]
  },
  {
    id: 23,
    name: 'Khadi Cotton Shirt',
    price: '₹750',
    image: 'src/assets/khadi_cotton_shirt.jpeg',
    description: 'Soft and breathable Khadi cotton shirt.',
    material: 'Khadi Cotton',
    dimensions: 'Available in S, M, L, XL, XXL',
    weight: '250 gms',
    origin: 'Handcrafted in Bihar, India',
    care: 'Hand wash separately in cold water',
    features: ['Handwoven', 'Eco-friendly', 'Lightweight', 'Comfortable'],
    stock: 4,
    reviews: [
      { rating: 5, comment: 'Super soft and breathable.', user: 'Rahul K.' },
      { rating: 4, comment: 'Great for summer wear.', user: 'Anita P.' }
    ]
  }
];

// Add color variants for shirt products
const productColorVariants = {
  14: { // Tangaliya Shirt
    colors: [
      {
        name: 'Off White',
        color: '#F5F5DC',
        image: 'https://inkriticrafts.com/cdn/shop/files/DSC08343.jpg?v=1749453473&width=533'
      },
      {
        name: 'Black',
        color: '#000000',
        image: 'https://inkriticrafts.com/cdn/shop/files/inkritinew2546_result_fcb3eabb-39c1-4fd5-a757-202f9b6c436d.webp?v=1749453624&width=416'
      },
      {
        name: 'Dark Green',
        color: '#013220',
        image: 'https://www.tistabene.com/cdn/shop/files/MSH-2632_I.jpg?v=1722603958&width=340'
      }
    ]
  },
  23: { // Khadi Cotton Shirt
    colors: [
      {
        name: 'Natural Khadi',
        color: '#F5F5DC',
        image: 'https://charkhatales.com/cdn/shop/products/off-white-bengal-khadi-men-shirt-624772.jpg?v=1706894075&width=1080'
      },
      {
        name: 'Indigo Blue',
        color: '#4B0082',
        image: 'https://i.pinimg.com/originals/d4/eb/82/d4eb8248baf534ee1efc31a2a6ef1f21.jpg'
      },
      {
        name: 'Earthy Brown',
        color: '#8B4513',
        image: 'https://tse2.mm.bing.net/th/id/OIP.idlVLIWlvM0mOz_9-7oWKAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      {
        name: 'Sage Green',
        color: '#9CAF88',
        image: 'https://uathayam.in/cdn/shop/files/01_14d84c3e-2d91-46ee-966c-318ca9e61793.jpg?v=1723617424'
      }
    ]
  },
};

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const colorVariants = productColorVariants[Number(id)];
  
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeMessage, setPincodeMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(product?.image);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Available sizes for products with size options
  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // Check if product has size options (e.g., shirts)
  const hasSizes = product?.dimensions.includes('Available in');

  // Update current image when product or color changes
  useEffect(() => {
    if (product) {
      if (colorVariants && colorVariants.colors.length > 0) {
        setCurrentImage(colorVariants.colors[0].image);
        setSelectedColor(0);
      } else {
        setCurrentImage(product.image);
      }
      setSelectedSize(null); // Reset size when product changes
      setQuantity(1); // Reset quantity
      setIsWishlisted(false); // Reset wishlist
      setPincode(''); // Reset pincode
      setPincodeMessage(''); // Reset message
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

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + delta)));
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // Optionally, integrate with backend or local storage
  };

  const checkPincode = () => {
    // Mocked logic: Assume delivery available for pincodes starting with '6' (Kerala) and length 6
    if (pincode.startsWith('6') && pincode.length === 6) {
      setPincodeMessage('Delivery available to your area!');
    } else {
      setPincodeMessage('Sorry, delivery is not available to this pincode.');
    }
  };

  const handleAddToCart = () => {
    if (hasSizes && !selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    if (quantity > product.stock) {
      alert('Cannot add more than available stock.');
      return;
    }
    addToCart({ 
      ...product, 
      selectedSize, 
      selectedColor: colorVariants?.colors[selectedColor]?.name, 
      quantity 
    });
  };

  if (!product) {
    return <div className="py-8"><h2 className="text-xl text-red-600">Product not found</h2></div>;
  }

  // Hardcoded delivery date (7 days from current date)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Related products: Filter by shared origin country or region
  const getOriginKey = (origin) => {
    const parts = origin.split(' in ');
    return parts.length > 1 ? parts[1].trim() : origin;
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && getOriginKey(p.origin) === getOriginKey(product.origin))
    .slice(0, 3);

  return (
    <div className="py-8 flex justify-center relative">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="relative animate-sway">
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
                <p className="text-2xl font-bold text-green-700 mb-2">{product.price}</p>
                {product.stock !== undefined && (
                  <p className={`text-sm mb-4 ${product.stock > 5 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 
                      ? (product.stock > 5 ? `In Stock (${product.stock} available)` : `Low Stock! Only ${product.stock} left`)
                      : 'Out of Stock'}
                  </p>
                )}
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Size Selection */}
                {hasSizes && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Select Size:</h4>
                    <div className="flex items-center space-x-3">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeChange(size)}
                          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                            selectedSize === size 
                              ? 'border-green-600 bg-green-50 text-green-600 font-medium' 
                              : 'border-gray-300 hover:border-gray-400 text-gray-600'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {selectedSize && (
                      <p className="text-sm text-gray-600 mt-2">
                        Selected Size: <span className="font-medium text-green-600">{selectedSize}</span>
                      </p>
                    )}
                  </div>
                )}
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Quantity:</h4>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-400 text-gray-600 flex items-center justify-center disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-800">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-400 text-gray-600 flex items-center justify-center disabled:opacity-50"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                
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
                    {/* Delivery Information with Address Symbol */}
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-600 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Estimated Delivery:
                      </span>
                      <span className="text-gray-800">{formattedDeliveryDate}</span>
                    </div>
                    {/* Pincode Checker */}
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-600 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Check Delivery:
                      </span>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                          placeholder="Enter pincode"
                          className="border rounded px-2 py-1 text-gray-800 w-24"
                          maxLength={6}
                        />
                        <button
                          onClick={checkPincode}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                          disabled={pincode.length !== 6}
                        >
                          Check
                        </button>
                      </div>
                    </div>
                    {pincodeMessage && (
                      <p className={`text-sm mt-2 ${pincodeMessage.includes('Sorry') ? 'text-red-600' : 'text-green-600'}`}>
                        {pincodeMessage}
                      </p>
                    )}
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
                
                {/* Customer Reviews */}
                {product.reviews && product.reviews.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Reviews</h3>
                    <div className="space-y-4">
                      {product.reviews.map((review, index) => (
                        <div key={index} className="border-b pb-2">
                          <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                          <p className="text-sm text-gray-500 mt-1">– {review.user}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  {addToCart && (
                    <button 
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold text-lg transition-colors ${
                        (hasSizes && !selectedSize) || product.stock === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                      onClick={handleAddToCart}
                      disabled={(hasSizes && !selectedSize) || product.stock === 0}
                    >
                      Add to Cart
                    </button>
                  )}
                  <button 
                    onClick={handleWishlistToggle}
                    className={`p-3 border-2 rounded-lg transition-colors ${
                      isWishlisted ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                    title="Add to Wishlist"
                  >
                    <svg className="w-6 h-6" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                  <button 
                    className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition-colors"
                    onClick={() => window.history.back()}
                  >
                    Back to Products
                  </button>
                </div>
                
                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {relatedProducts.map((relatedProduct) => (
                        <a
                          key={relatedProduct.id}
                          href={`/products/${relatedProduct.id}`}
                          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-40 object-cover rounded mb-2"
                          />
                          <h4 className="text-lg font-medium text-gray-800">{relatedProduct.name}</h4>
                          <p className="text-green-600 font-semibold">{relatedProduct.price}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}