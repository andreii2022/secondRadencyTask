

import React from "react";
import { connect } from "react-redux";
import { toggleCreateButton } from "../../../redux/actions";
import ButtonCreate from "./ButtonCreate";

type ButtonCreateContainerProps = {
  buttonCreate: {
    active: boolean;
    yesVal: string;
    noVal: string;
  };
  onButtonCreate: () => void;
};

const ButtonCreateContainer: React.FC<ButtonCreateContainerProps> = ({
  buttonCreate,
  onButtonCreate,
}) => {
  return (
    <ButtonCreate click={onButtonCreate} buttonCreate={buttonCreate} />
  );
};

const mapStateToProps = (state: any) => ({
  buttonCreate: state.buttonCreate,
});

const mapDispatchToProps = (dispatch: any) => ({
  onButtonCreate: () => dispatch(toggleCreateButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCreateContainer);
