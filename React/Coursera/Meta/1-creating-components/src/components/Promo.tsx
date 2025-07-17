interface PropsType {
	discount: number
}
const Promo = (props: PropsType) => {
	return (
		<span>
			Hurry! you can get a {props.discount}% discout
		</span>
	)
}

export default Promo