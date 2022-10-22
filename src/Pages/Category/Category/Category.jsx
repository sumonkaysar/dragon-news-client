import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  
  return (
    <div>
      <h2 className="text-center mb-4">This category has {categoryNews.length} news</h2>
      {
        categoryNews.map(news => <NewsSummaryCard
          key={news._id}
          news={news}
        />)
      }
    </div>
  );
}

export default Category;
