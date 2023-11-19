"use client";
import { useDeleteProduct } from "@/app/(...)services/auth/useDelete";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setData } from "../../(redux)/store";

interface Iproducts {
	id: number;
	name: string;
	description: string;
	price: string;
	owner: string;
}

interface EditButtonProps {
	product: Iproducts;
}

const EditButton: React.FC<EditButtonProps> = ({ product }) => {
   //   const dispatch = useDispatch();
     
     const {push} = useRouter()
     const handleEdit = async () => {
      // dispatch(setData(product));
		alert(product.id);
      push('/edit-product')
	};
	return (
		<>
			<button
				onClick={handleEdit}
				className=" p-2 bg-blue-600 rounded-lg text-white"
			>
				Edit
			</button>
		</>
	);
};

export default EditButton;
