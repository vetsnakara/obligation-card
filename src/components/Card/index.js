import { connect } from "react-redux";

import { Card } from "./Card";

import { setParam, updatePeriod, fetchInitialData } from "../../store/actions";
import { getData } from "../../store/selectors";

const mapState = (state) => {
  const { loading, param, period, description } = state;

  return {
    selectedParam: param,
    selectedPeriod: period,
    data: getData(state),
    description,
    loading,
  };
};

const mapDispatch = (dispatch, { isin }) => ({
  changeParam: (param) => dispatch(setParam(param)),
  fetchPeriodData: (period) => dispatch(updatePeriod(isin, period)),
  fetchInitialData: () => dispatch(fetchInitialData(isin)),
});

const ConnectedCard = connect(mapState, mapDispatch)(Card);

export { ConnectedCard as Card };
