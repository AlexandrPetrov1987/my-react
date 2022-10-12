import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/delete',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.cars = action.payload;
                state.loading = false;
            })

            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })

            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
                state.loading = false;
            })

            .addCase(create.pending, (state) => {
                state.loading = true;
            })

            .addCase(updateById.fulfilled, (state, action) => {
                const findCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(findCar, action.payload);
                state.carForUpdate = null;
                state.loading = false;
            })

            .addCase(updateById.pending, (state) => {
                state.loading = true;
            })

            .addCase(deleteCar.fulfilled, (state, action) => {
                const carIndex = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(carIndex, 1);
                state.loading = false;
            })

            .addCase(deleteCar.pending, (state) => {
                state.loading = true;
            })

            .addDefaultCase((state, action) => {
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'rejected') {
                    state.errors = action.payload;
                    state.loading = false;
                } else {
                    state.errors = null;
                }

            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    setCarForUpdate,
    updateById,
    deleteCar
}

export {
    carReducer,
    carActions
}