import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import categories from '../categories.json';

const App = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default App;
