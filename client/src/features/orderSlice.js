import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: [],
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

        addItems: (state, action) => {

            const item = action.payload;
            state.order = [...state.order, { item }]

        },

        // New reducer case to handle updating an item in the order
        updateItem: (state, action) => {
            const { itemId, updatedData } = action.payload;

            state.order.map((items) => {
                if (items.item.id === itemId) {
                    if (updatedData.quantity === -1 && items.item.quantity > 0) items.item.quantity += updatedData.quantity;
                    else if (updatedData.quantity === 1) items.item.quantity += updatedData.quantity;
                }
            })

        },

    }
});

export const { addItems,  updateItem } = orderSlice.actions;

export const selectOrder = (state) => state.order.order;

export default orderSlice.reducer;