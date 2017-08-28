import { connect } from "react-redux";

import UserForm2 from "../components/UserForm2";
import { bindActionCreators } from "redux";
import * as ServerActions from "../actions/server";


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ServerActions, dispatch);
}

function mapStateToProps(state) {
  return {
    schema: state.form.schema,
    uiSchema: state.form.uiSchema,
    formData: state.form.formData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm2);