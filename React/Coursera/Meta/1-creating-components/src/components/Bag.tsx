import type { ReactNode } from "react";


export const Bag = ({children}: {children: ReactNode}) => {
	console.log(children);
	return <div style={{backgroundColor: "purple"}}>
		{children}
	</div>
};
