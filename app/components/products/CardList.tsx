const CardList = ({ children }: any) => {
   return (
		<div className="flex space-x-4 p-4 h-fit">
			{children}
		</div>
	);
};

export default CardList;