// "use client";
import Image from "next/image";
import CardList from "../../components/products/CardList";
import { cookies } from "next/headers";
import API from "../../(...)constant/api";
import DeleteButton from "@/app/components/products/DeleteButton";
import EditButton from "@/app/components/products/EditButton";
// import { useRouter } from "next/navigation";

interface Iproducts {
	id: number;
	name: string;
	description: string;
	price: string;
	owner: string;
}

const MyProducts = async () => {
	// const router = useRouter();
	const token = cookies().get("currentUser");
	const response = await fetch(API.PRODUCTS, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token?.value}`, // Pass the token in the Authorization header
			"Content-Type": "application/json",
		},
		next: { revalidate: 0 },
		// credentials: "include",
	});
	// const [products, setProducts] = useState([]);
	const products: Iproducts[] = await response.json();
	// const products = await response.json();
	console.log(products);

	return (
		<>
			<div className="w-screen h-full flex flex-wrap justify-center space-x-6 space-y-2 p-8 pt-20">
				<h1 className="text-center text-3xl">My Products</h1>
				<div className="w-full flex flex-wrap h-full rounded-xl overflow-hidden shadow-lg mx-3 my-4 bg-white">
					{/* <p className="text-xl text-center bg-orange-300 p-2">
						Penawaran Terbaik
					</p> */}
					{products?.map((product) => {
						return (
							<CardList key={product.id}>
								<div className="bg-orange-500/70 rounded-2xl h-fit px-6 py-4 space-y-2">
									<div>
										<h2 className="font-bold text-xl mb-2">
											{product.name}
										</h2>
										<h3 className="text-gray-700 text-base">
											{product.description}
										</h3>
										<h3 className=""> Rp{product.price}</h3>
										<div className="flex justify-between py-2 space-x-2">
											<EditButton product={product} />
											<DeleteButton id={product.id} />
										</div>
									</div>
								</div>
							</CardList>
						);
					})}
				</div>

				{/* Other content in your component */}

				{/* <div className="max-w-xs rounded-xl overflow-hidden shadow-lg mx-3 ml-6 my-4 bg-orange-300">
					<p className="text-xl text-center bg-orange-300 p-2">
						Penawaran Terbaik
					</p>
					<div className="h-32 bg-gray-600 text-white flex">
						{" "}
						Place holder
					</div>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 flex">
							<h2>Feta</h2>
							<h2 className="text-base text-right flex-auto">
								Rp 79.000/250gr
							</h2>
						</div>
						<h3 className="text-gray-700 text-base">
							Merupakan keju Yunani terbuat dari susu domba atau bisa
							ditambahkan dengan susu kambing, dan merupakan keju Yunani
							paling popular di dunia. Beberapa nutrisi yang terkandung
							dalam keju feta adalah kalsium, vitamin B2, vitamin B12,
							vitamin B6, fosfor, selenium, dan zink. Tak hanya itu, keju
							ini juga mengandung lemak dan kalori yang lebih sedikit
							dari keju lainnya.
						</h3>
						<br />
					</div>
				</div> */}
			</div>
		</>
	);
};

export default MyProducts;
