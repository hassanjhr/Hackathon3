'use client'; // Add this line at the top to convert this to a Client Component
import React from 'react';
import Swal from 'sweetalert2';
import { Product } from '../../../types/product';
import { addToCart } from '@/app/actions/actions';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      title: 'Success!',
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <button
    className='bg-gradient-to-r from-[#7E33E0] to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
