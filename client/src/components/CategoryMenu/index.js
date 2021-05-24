import React, {useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
//import {UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
//import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from '../../utils/helpers';
import { updateCategories, updateCurrentCategory } from '../../utils/slices/categorySlice';
import { useSelector, useDispatch } from 'react-redux';

function CategoryMenu() {
  //const [state, dispatch] = useStoreContext();
  //const {categories} = state;
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
 

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: updateCategories,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: updateCategories,
          categories: categories
        });
      });
    }
  }, [loading, categoryData, dispatch]);

  const handleClick = id => {
    dispatch({
      type: updateCurrentCategory,
      currentCategory: id  
    })
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
