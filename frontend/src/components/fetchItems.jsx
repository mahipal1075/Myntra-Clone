import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../Store/itemSlice";
import { fetchingStatusActions } from "../Store/fetchingStatusSlice";


const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();


  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    
    dispatch(fetchingStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {

        dispatch(fetchingStatusActions.markFetchingDone());
        dispatch(fetchingStatusActions.markFetchingFinished());
         
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      
      controller.abort();
    };
  }, [fetchStatus]);


  return (
    <>
    </>
  );
};

export default FetchItems;  
