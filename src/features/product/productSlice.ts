import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Coffee } from '@/lib/type';
import { getCoffeeById, getCoffeeList } from '@/api/api';

type InitialState = {
  loading: boolean;
  coffee: Coffee[];
  selectedCoffee: Coffee | null;
  error: string | null;
};

const initialState: InitialState = {
  loading: false,
  coffee: [],
  selectedCoffee: null,
  error: null,
};

export const fetchCoffee = createAsyncThunk<Coffee[], void>(
  'coffee/fetchCoffee',
  async () => {
    const response = await getCoffeeList();
    return response;
  }
);

export const fetchCoffeeById = createAsyncThunk<Coffee, string>(
  'coffee/fetchCoffeeById',
  async (id) => {
    const response = await getCoffeeById(id);
    return response;
  }
);

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoffee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCoffee.fulfilled,
      (state, action: PayloadAction<Coffee[]>) => {
        state.loading = false;
        state.coffee = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchCoffee.rejected, (state, action) => {
      state.loading = false;
      state.coffee = [];
      state.error = action.error.message || 'Something went wrong';
    });
    builder.addCase(fetchCoffeeById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCoffeeById.fulfilled,
      (state, action: PayloadAction<Coffee>) => {
        state.loading = false;
        state.selectedCoffee = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchCoffeeById.rejected, (state, action) => {
      state.loading = false;
      state.selectedCoffee = null;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default coffeeSlice.reducer;
