import { useLoaderData, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { Pagination } from '../../components/Pagination/Pagination';
import { Products } from '../../components/Products/Products';
import { CATEGORIES } from '../../constants/categories';

export const ProductList = () => {
	const products = useLoaderData();
	const params = useParams();

	const foundCategory = CATEGORIES.find(c => c.path === params.category);

	let foundSubcategory;

	{
		foundSubcategory = foundCategory.subcategories.find(sc => sc.path === params.subcategory);
	}

	return (
		<FlexContainer>
			<ExpandableMenu />
			<div>
				<Breadcrumbs />
				<Products
					headerText={foundSubcategory ? foundSubcategory.categoryName : foundCategory.categoryName}
					products={products}></Products>{' '}
				<Pagination numberOfPages={5}></Pagination>
			</div>
		</FlexContainer>
	);
};
