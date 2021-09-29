import { sumNumber, subNumber } from "../../store/modules/counter/actions"
import { useDispatch, useSelector } from "react-redux"
import "./style.css"


const Counter = () => {


	const dispatch = useDispatch()
	const counter = useSelector((store) => store.counter)

	return (
		<>
			<h3 className="number">{counter}</h3>

			<div className="action">
				<button
					className="setNumber"
					onClick={() => dispatch(sumNumber(1))}>
					+
				</button>

				<button
					className="setNumber"
					onClick={() => dispatch(subNumber(1))} >
					-
				</button>
			</div>

		</>
	)
}

export default Counter