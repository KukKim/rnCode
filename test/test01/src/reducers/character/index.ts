import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async () => {
    const userDocument = firestore().collection('character');
    const response = await userDocument.get();
    return response.docs.map(a => a.data());
  },
);

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characterInfo: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    setData(state, action) {
      state.characterInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // 비동기 API 호출의 상태에 따라 리듀서 처리
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading'; // 로딩 중 상태
        console.log('pending');
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 데이터 로드 성공
        state.characterInfo = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed'; // 데이터 로드 실패
        console.log('failed');
      });
  },
});

export const {setData} = characterSlice.actions;

export default characterSlice.reducer;
