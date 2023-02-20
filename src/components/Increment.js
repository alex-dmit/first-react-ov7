export function Increment(props) {
    return <input placeholder='increment value' type={'number'}
        value={props.increment} onChange={(e) => props.setIncrement(+e.target.value)} />
}