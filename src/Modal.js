import React from 'react';

const Modal = (props) => {
	if (!props.show) {
		return null;
	}

	return (
		<div className='modalContainer'>
			<div className='modal' id='modal'>
				{props.children}
			</div>
		</div>
	);
};
export default Modal;
