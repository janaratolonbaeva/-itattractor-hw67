import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Intercom.css';

const arrayButtons = ['7','8','9','4','5','6','1','2','3'];

const Intercom = () => {
	const intercom = useSelector(state => state);
	const dispatch = useDispatch();

	const addNum = e => {
		const num = e.target.textContent;
		dispatch({type: 'ADD_NUM', num});
		dispatch({type: 'DISABLE'})
	}

	return (
		<div className="Intercom">
			<div className={`Intercom-code ${intercom.access ? ' Granted' : ' Denied'}`}>{intercom.password}</div>
			<div className="Intercom-row">
				{arrayButtons.map((item, index) => (
						<button key={index}
										disabled={intercom.isDisabled}
										className="Intercom-item"
										onClick={addNum}
						>{item}</button>
					))}
					<button className="Intercom-item" onClick={() => dispatch({type: 'DELETE'})}>&#60;</button>
					<button disabled={intercom.isDisabled}
									className="Intercom-item"
									onClick={addNum}
					>0</button>
					<button className="Intercom-item" onClick={() => dispatch({type: 'CHECK'})}>E</button>
			</div>
		</div>
	);
};

export default Intercom;