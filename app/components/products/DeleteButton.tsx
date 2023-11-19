"use client";
import { useDeleteProduct } from "@/app/(...)services/auth/useDelete";
import React from "react";

interface DeleteButtonProps {
	id: number; // Define the prop 'id' as a number
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const { deleteProduct } = useDeleteProduct();
	
   const handleDelete = () => deleteProduct(id);

	return (
		<button
			onClick={handleDelete}
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		>
			Delete
		</button>
	);
};

export default DeleteButton;

