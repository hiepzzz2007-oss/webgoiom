import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (product, color = product.color, size = product.size) => {
        const key = `${product.id}-${color}-${size}`;
        const current = get().items;
        const found = current.find((item) => item.key === key);
        set({
          isOpen: true,
          items: found
            ? current.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item)
            : [...current, { key, product, color, size, quantity: 1 }],
        });
      },
      changeQuantity: (key, delta) =>
        set({ items: get().items
          .map((item) => item.key === key ? { ...item, quantity: item.quantity + delta } : item)
          .filter((item) => item.quantity > 0) }),
      removeItem: (key) => set({ items: get().items.filter((item) => item.key !== key) }),
      clearCart: () => set({ items: [] }),
    }),
    { name: "omni-cart", partialize: (state) => ({ items: state.items }) },
  ),
);
