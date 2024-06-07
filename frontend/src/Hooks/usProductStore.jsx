import create from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProduct: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "https://asignment-2-of-apollo-ecomerce.vercel.app/api/products"
      );
      set({ products: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProductStore;
