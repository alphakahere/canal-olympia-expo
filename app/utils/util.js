import { useState } from "react";

export function useShowModal() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const toggle = () => {
		setIsModalVisible((isModalVisible) => !isModalVisible);
	};
	return {
		isVisible: isModalVisible,
		toggle,
	};
}
