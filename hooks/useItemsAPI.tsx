import { useQuery } from "@tanstack/react-query";
import Items from "@/data/items";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type ItemProps = {
  id: string;
  title: string;
  desc: string;
};

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const fetchItems = async (token?: string): Promise<Array<ItemProps>> => {
  /*
    const response = await fetch(`${BASE_URL}/api/v1/list`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText || "API Error");
    }
    const data = await response.json();
    return data;
  */

  return Items;
};

const useItemsAPI = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return useQuery({
    queryKey: ["items"],
    queryFn: () => fetchItems(token),
  });
};

export { useItemsAPI, ItemProps };