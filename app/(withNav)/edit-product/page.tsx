import API from "@/app/(...)constant/api";
import { RootState } from "@/app/(redux)/types";
import { cookies } from "next/dist/client/components/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";


const EditProduct = async () => {
	const { push } = useRouter();
	const [product, setProduct] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [owner, setOwner] = useState("");
	const [error, setError] = useState(null);
	const data = useSelector((state: RootState) => state.data.data); // Access data from Redux store

	// alert(data); Access data from Redux store

   const token = cookies().get("currentUser");
	const response = await fetch(API.EDIT_PRODUCTS, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token?.value}`, // Pass the token in the Authorization header
			"Content-Type": "application/json",
		},
		next: { revalidate: 0 },
		// credentials: "include",
	});
	// const [products, setProducts] = useState([]);
	// const products: Iproducts[] = await response.json();
	// const products = await response.json();
	// console.log(products);
	const handleEditProduct = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();



		// if (!username || !password) {
		// 	alert("Please enter information");
		// } else {
		// 	login(username, password)
		// 		.then((res) => push("/products"))
		// 		.catch((e) => alert(e));
		// }
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
						Edit Product
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						onSubmit={handleEditProduct}
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
								Edit Product
							</button>
						</div>
					</form>
				</div>
				{/* </div> */}
			</>
		</main>
	);
};
export default EditProduct;
