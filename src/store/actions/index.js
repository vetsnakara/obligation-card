import { http } from "../../api/api";
import { getDatesByPeriod } from "../../utils";

export const SET_PARAM = "SET_PARAM";
export const SET_PERIOD = "SET_PERIOD";
export const SET_DATA = "SET_DATA";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const RESET_STATE = "RESET_STATE";
export const SET_INITIAL_DATA = "SET_INITIAL_DATA";

export const setInitialData = ({ description, data }) => ({
  type: SET_INITIAL_DATA,
  payload: {
    description,
    data,
  },
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const setParam = (param) => ({
  type: SET_PARAM,
  payload: { param },
});

export const setPeriod = (period) => ({
  type: SET_PERIOD,
  payload: { period },
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});

export const fetchInitialData = (isin) => async (dispatch) => {
  dispatch(fetchStart());
  const initialData = await http.get(`/bonds/${isin}`);
  dispatch(setInitialData(initialData));
  dispatch(fetchSuccess());
};

export const updatePeriod = (isin, period) => async (dispatch, getState) => {
  const { loading, data } = getState();

  if (loading) return;

  const datesRange = getDatesByPeriod(period);

  const fetchedDates = Object.keys(data);
  const datesToFetch = datesRange.filter(
    (date) => !fetchedDates.includes(date)
  );

  if (datesToFetch.length > 0) {
    dispatch(fetchStart());

    const fetchedData = await http.post(`/bonds/${isin}`, {
      dates: datesToFetch,
    });

    dispatch(setPeriod(period));
    dispatch(setData(fetchedData));
    dispatch(fetchSuccess());
  } else {
    dispatch(setPeriod(period));
  }
};
