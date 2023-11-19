"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "../../(...)services/auth/useLogin";
import { useAddProduct } from "@/app/(...)services/auth/useAddProduct";

const AddProduct = () => {
	const router = useRouter();
	const [product, setProduct] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [error, setError] = useState(null);
	const { addProduct } = useAddProduct();

	const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

      if (!product || !description || !price) {
			alert("Please enter information");
		} else {
			var new_product = {
				name: product,
				description: description,
				price: price,
			};

			addProduct(new_product)
				.then((res) => {router.push("/products"); router.refresh()})
				.catch((e) => alert(e));
		}
      
      




	};

	return (
		<main className="flex flex-col h-full">
			<>
				{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
				{/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> */}
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Add Product
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						onSubmit={handleAddProduct}
						className="space-y-6"
						// action="http://127.0.0.1:5000"
						// method="POST"
					>
						<div>
							<label
								htmlFor="product"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Product name
							</label>
							<div className="mt-2">
								<input
									id="product"
									name="product"
									type="text"
									value={product}
									onChange={(e) => setProduct(e.target.value)}
									autoComplete="product"
									required
									className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="description"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Description
							</label>
							<div className="mt-2">
								<input
									id="description"
									name="description"
									type="text"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									autoComplete="description"
									required
									className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="price"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Price
							</label>
							<div className="mt-2">
								<input
									id="price"
									name="price"
									type="text"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									autoComplete="price"
									required
									className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Add Product
							</button>
						</div>
					</form>
				</div>
				{/* </div> */}
			</>
		</main>
	);
};
export default AddProduct;
