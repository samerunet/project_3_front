import React, { useState, useEffect } from "react";

export default function Story({ data }) {
	return (
		<>
			{data.map((item) => {
				return <div>{item.img}</div>;
			})}
		</>
	);
}
